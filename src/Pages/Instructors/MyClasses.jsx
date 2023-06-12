import { useContext } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import {  FiAlertCircle, FiXCircle, FiMessageSquare } from 'react-icons/fi';
import {FcApproval} from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';
const MyClasses = () => {

    const { user} = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/newClasses?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyClasses(data);
            })
    }, [user])

    const handleUpdate = () => {
        toast.success('Coming Soon!!!')
    }
    return (
        <div>
            <SectionTitle title="My Classes" />
            <div className="p-4">
     <h1 className="text-2xl font-bold mb-4">You Can Add a class from Add a class page</h1>
     
      {myClasses && myClasses.map((myClass) => (
        <div
          key={myClass.id}
          className="bg-white shadow-md rounded-md p-4 mb-4 flex flex-col lg:flex-row items-center justify-between"
        >
          <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0">
            <img
              src={myClass.image}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
         
          <div className="flex-grow lg:flex-grow-0 w-full lg:w-2/3 ml-0 lg:ml-8">
            <div className="flex items-center mb-2">
            
              <div className="text-lg font-bold mr-2">
                {myClass.status === 'approved' && (
                  <FcApproval className="text-green-500 inline-block mr-1" />
                )}
                {myClass.status === 'pending' && (
                  <FiAlertCircle className="text-yellow-500 inline-block mr-1" />
                )}
                {myClass.status === 'denied' && (
                  <FiXCircle className="text-red-500 inline-block mr-1" />
                )}
                {myClass?.status}
              </div>
              <div className="text-sm text-gray-500">ID: {myClass._id}</div>
            </div>
            <div className="font-semibold">
          class name: {myClass.name}
            </div>
            <div className="text-gray-600 mb-2">
              Total Enrolled Students: {myClass.totalEnrolledStudents ? <>{myClass.totalEnrolledStudents}</> : <>0</>}
            </div>
            <div className="text-gray-600 mb-2">
              {myClass.feedback ? (
                <div>
                  Feedback: {myClass?.feedback?.text}
                  <button
                    className="ml-2 inline-flex items-center text-blue-500"
                  >
                    <FiMessageSquare className="mr-1" /> new Feedback
                  </button>
                </div>
              ) : (
                'No feedback yet.'
              )}
            </div>
          
            <button
              onClick={handleUpdate}
              className="btn btn-outline"
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
    <Toaster />
        </div>
    );
};

export default MyClasses;