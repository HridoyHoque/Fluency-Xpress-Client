// import { useState } from "react";
// import { useEffect } from "react";
import { FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const ManageUsers = () => {

    // const [allUsers, setAllUsers] = useState(null);
    const { role } = useContext(AuthContext)

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllUsers(data);
    //         })
    // }, [allUsers])

    // use TanStack query to refetch and load users data

    const {data: allUsers = [], refetch } = useQuery(['allUsers'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

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
                            <tr key={user._id}>
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
                                    {role === 'admin' && (
                                        <>
                                            <button
                                                disabled={user.role === 'admin'}
                                                onClick={() => makeAdmin(user._id)}
                                                className="btn btn-outline btn-primary mr-2"
                                            >
                                                <FaUserShield className="mr-1" />
                                                Make Admin
                                            </button>
                                            <button
                                                disabled={user.role === 'instructor'}
                                                onClick={() => makeInstructor(user._id)}
                                                className="btn btn-outline btn-primary"
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