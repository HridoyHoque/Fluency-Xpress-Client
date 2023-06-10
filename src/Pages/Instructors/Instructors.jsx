import { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AllInstructorsTable from "../../components/AllInstructorsTable/AllInstructorsTable";
import { MdOutlineMail } from 'react-icons/md';

const Instructors = () => {

    const [instructors, setInstructors] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => {
            setInstructors(data)
        })
    },[])
    return (
       <>
      <div className="mt-4 mb-4 overflow-x-auto">
      <SectionTitle title="Our All Instructors"></SectionTitle>
      </div>
        <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="flex px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><span className="mr-1"><MdOutlineMail /></span> Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        { instructors && instructors.map((instructor) => (
         <AllInstructorsTable
         key={instructor._id}
         instructor={instructor}
         ></AllInstructorsTable>
        ))}
      </tbody>
    </table>
       </>
    );
};

export default Instructors;