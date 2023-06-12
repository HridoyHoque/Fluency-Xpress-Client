import { useContext } from "react";
// import toast, { Toaster } from 'react-hot-toast';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaMoneyBill } from "react-icons/fa";
import Swal from "sweetalert2";


const MySelectedClasses = () => {
    const {user} = useContext(AuthContext);
      // use TanStack query to get student's selected classes
  const { data: selectedClasses = [], refetch } = useQuery(['selectedClasses'], async () => {
    const res = await fetch(`http://localhost:5000/selectedClasses?studentEmail=${user.email}`);
    const classes = await res.json();
    return classes;
  });

  const handleDeleteClass = (classId) => {
    Swal.fire({
        title: 'Are you sure Want to delete Class?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete Class!'
      }).then((result) => {
        if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedClasses/${classId}`, {
            method: 'DELETE'
        })
        .then(res => {
            console.log('deleted result', res);
            if (res.status == 200) {
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your Class has been deleted.',
                    'success'
                )
            }
        })
        }
      })
  }
    return (
        <>
        <div className="container mx-auto py-10 ml-2">
          <div className="mb-4">
            <SectionTitle title="My Selected Classes" />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {selectedClasses.map((classItem) => (
              <div
                key={classItem._id}
                className="bg-white p-6 border border-gray-300 rounded-md shadow-md flex flex-col hover:bg-base-200"
              >
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
                <h2 className="text-lg font-bold mb-2">{classItem.name}</h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-extrabold">Instructor:</span> {classItem.instructorName}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Price:</span> ${classItem.price}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Seats:</span> {classItem.seats}
                </p>
                <div className="flex justify-between">
                  <button
                    className="btn bg-red-500 hover:bg-red-600 text-white mr-2"
                    onClick={() => handleDeleteClass(classItem._id)}
                  >
                    <FaTrash className="inline-block mr-1" />
                    Delete
                  </button>
                  <button
                    className="btn bg-blue-500 hover:bg-blue-600 text-white"
                    // onClick={() => handlePayClass(classItem._id)}
                  >
                    <FaMoneyBill className="inline-block mr-1" />
                    Pay
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* <Toaster /> */}
        </div>
      </>
    );
};

export default MySelectedClasses;