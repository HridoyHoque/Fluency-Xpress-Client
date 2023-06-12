import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUserPlus } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Classes = () => {
    const [disabledButtons, setDisabledButtons] = useState([]);
    const { user, role } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    // use TanStack query to refetch and get approvedClasses data
    const { data: newClasses = [] } = useQuery(['newClasses'], async () => {
        const res = await fetch('http://localhost:5000/newClasses')
        const allClasses = await res.json();
        const approvedClasses = allClasses.filter((approvedClass) => approvedClass.status === 'approved');
        return approvedClasses
    }
    );

    const handleSelectClasses = classItem => {
       
        if (user) {
            const selectedClass = {
                name: classItem.name, image: classItem.image, instructorName: classItem.instructorName, price: classItem.price, seats: classItem.seats, studentEmail: user.email
            }
            console.log(classItem.seats)
            // const studentSelectedClass = 
            fetch('http://localhost:5000/selectedClasses',{
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
               })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    toast.success('Class Booked successfully')
                    setDisabledButtons(prevState => [...prevState, classItem._id]);
                  
                }
            })
            .catch(error => {
                console.log(error)
                toast.error('Failed to Book the class')
             

            })
        }
        else {
            Swal.fire({
                title: 'Please login to Select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    const isButtonDisabled = (classItem) => {
        return (
          role === 'admin' ||
          role === 'instructor' ||
          classItem.seats < 1 ||
          disabledButtons.includes(classItem._id)
        );
      };
    return (
        <>
            <div className="container mx-auto py-10 ml-2">
                <div className="mb-4">
                    <SectionTitle title="Approved Classes" />
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {newClasses.map((classItem) => (
                        <div
                            key={classItem._id}
                            className={`${classItem.seats < 1 ? 'bg-red-200' : 'bg-white'
                                } p-6 border border-gray-300 rounded-md shadow-md flex flex-col ${classItem.seats < 1 ? "hover:bg-red-300" : "hover:bg-base-200"} `}
                        >
                            <img
                                src={classItem.image}
                                alt={classItem.image}
                                className="w-full h-40 object-cover mb-4 rounded-md"
                            />
                            <h2 className="text-lg font-bold mb-2">{classItem.name}</h2>
                            <p className="text-gray-600 mb-2">
                                <span className="font-extrabold">Instructor:</span>{" "}
                                {classItem.instructorName}
                            </p>
                            <p className="text-gray-600 mb-4">
                                <span className="font-semibold">Available Seats:</span>{" "}
                                {classItem.seats}
                            </p>
                            <div className="flex items-center mb-2">
                                <span className="mr-2">
                                    <strong>Price:</strong> ${classItem.price}
                                </span>
                            </div>
                            <div className="flex justify-between">

                                <div
                                >
                                    <button
                                       disabled={isButtonDisabled(classItem)}
                                        className="btn bg-blue-500 hover:bg-blue-600 text-white"
                                        onClick={() => handleSelectClasses(classItem)}
                                    >
                                        <FaUserPlus className="inline-block mr-1" />
                                        Select Class
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <Toaster />
            </div>
        </>
    );
};

export default Classes;