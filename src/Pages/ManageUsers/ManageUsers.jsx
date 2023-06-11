import { useState } from "react";
import { useEffect } from "react";
import { FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const ManageUsers = () => {

    const [allUsers, setAllUsers] = useState(null);

    useEffect( () => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => {
            setAllUsers(data);
        })
    },[allUsers])

    const makeAdmin = (userId) => {
        // Logic to make user with userId an admin
        console.log(`Make Admin - User ID: ${userId}`);
      };
    
      const makeInstructor = (userId) => {
        // Logic to make user with userId an instructor
        console.log(`Make Instructor - User ID: ${userId}`);
      };
     return (
        <div className="container mx-auto">
       <div className="mb-4">
       <SectionTitle title="Manage All Users"></SectionTitle>
       </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">Photo</th>
              <th className="py-2 px-4 border-b border-gray-300">Name</th>
              <th className="py-2 px-4 border-b border-gray-300">Email</th>
              <th className="py-2 px-4 border-b border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            allUsers &&
            allUsers.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b border-gray-300">
                  <img
                    src={user.photo}
                    alt={user.displayName}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-300">{user.name}</td>
                <td className="py-2 px-4 border-b border-gray-300">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {user.role === "student" && (
                    <>
                      <button
                        onClick={() => makeAdmin(user.id)}
                        className="btn btn-primary mr-2"
                      >
                        <FaUserShield className="mr-1" />
                        Make Admin
                      </button>
                      <button
                        onClick={() => makeInstructor(user.id)}
                        className="btn btn-primary"
                      >
                        <FaChalkboardTeacher className="mr-1" />
                        Make Instructor
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ManageUsers;