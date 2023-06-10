import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularInstructorsCard from "../../../components/PopularInstructorsCard/PopularInstructorsCard";


const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState(null)

    useEffect( () => {
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => {
            const topInstructors = data.slice(0,6)
            setPopularInstructors(topInstructors)
        })
    },[])
    return (
        <div className="mt-12 mb-8">
            <SectionTitle title="Popular Instructors"></SectionTitle>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
            {
                popularInstructors &&
                popularInstructors.map(popularInstructor => <PopularInstructorsCard
                key={popularInstructor._id}
                popularInstructor={popularInstructor}
                ></PopularInstructorsCard>)
            }
           </div>
        </div>
    );
};

export default PopularInstructors;