
import { FaCheckCircle, FaTimesCircle, FaComment } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";


const ManageClasses = () => {

    const {role} = useContext(AuthContext)
     // use TanStack query to refetch and get newClasses data
    const {data: newClasses = [], refetch} = useQuery(['newClasses'], async () => {
        const res = await fetch('http://localhost:5000/newClasses')
        return res.json();
    })

    const handleApprove = (newClass) => {
        console.log(`approved ${newClass.name}`)
        fetch(`http://localhost:5000/newClasses/approved/${newClass._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch()
                toast.success(`${newClass.name} is approved now`);
            }
        })
    }
    const handleDeny = (newClass) => {
        console.log(`Denied ${newClass.name}`)
        fetch(`http://localhost:5000/newClasses/denied/${newClass._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch()
                toast.success(`${newClass.name} is denied now`);
            }
        })
    }

    const handleFeedback = async (newClass) => {
        console.log(newClass.feedback.text)
        console.log(`feedback ${newClass.name}`);
        const { value: text } = await Swal.fire({
          input: 'textarea',
          inputLabel: 'Message',
          inputPlaceholder: 'Type your message here...',
          inputAttributes: {
            'aria-label': 'Type your message here',
          },
          showCancelButton: true,
        });
      
        if (text) {
          fetch(`http://localhost:5000/newClasses/feedback/${newClass._id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body:  JSON.stringify({ text })
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount) {
                refetch();
                toast.success(`Feed sent to Instructor`);
              }
            })
            .catch((error) => {
              console.error('Error submitting feedback:', error);
              toast.error(`Failed to send feedback`);
            });
        }
      };
    return (
      <>
        <div className="container mx-auto py-10 ml-2 ">
   <div className="mb-4"><SectionTitle title="Manage Classes"></SectionTitle></div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {
        newClasses &&
        newClasses.map((newClass) => (
          <div
            key={newClass._id}
            className="bg-white p-6 border border-gray-300 rounded-md shadow-md flex flex-col hover:bg-base-200"
          >
            <img
              src={newClass.image}
              alt={newClass.image}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-bold mb-2">{newClass.name}</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-extrabold">Instructor:</span> {newClass.instructorName}
            </p>
            <p className="text-gray-600 mb-4">
             <span className="font-semibold"> Email:</span> {newClass.email}
            </p>
            <div className="flex items-center mb-2">
              <span className="mr-2">
                <strong>Available Seats:</strong> {newClass.seats}
              </span>
              <span className="mr-2">
                <strong>Price:</strong> ${newClass.price}
              </span>
              <span className="mr-2">
                <strong>Status:</strong> {newClass.status}
              </span>
            </div>
            <div className="flex justify-between">
              <div>
                {role === "admin" && (
                  <button
                  disabled={newClass.status === "approved" || newClass.status === "denied"}
                    className="btn bg-green-500 hover:bg-green-600 text-white mr-2"
                    onClick={() => handleApprove(newClass)}
                  >
                    <FaCheckCircle className="inline-block mr-1" />
                    Approve
                  </button>
                )}
                {role === "admin" && (
                  <button
                  disabled={newClass.status === "approved" || newClass.status === "denied"}
                    className="btn bg-red-500 hover:bg-red-600 text-white mr-2"
                    onClick={() => handleDeny(newClass)}
                  >
                    <FaTimesCircle className="inline-block mr-1" />
                    Deny
                  </button>
                )}
              </div>
              <button
                className="btn bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => handleFeedback(newClass)}
              >
                <FaComment className="inline-block mr-1" />
                Send Feedback
              </button>
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
      </>
    );
};

export default ManageClasses;