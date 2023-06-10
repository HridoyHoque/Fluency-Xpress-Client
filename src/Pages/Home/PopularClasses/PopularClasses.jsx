import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularClassCard from "../../../components/PopularClassCard/PopularClassCard";


const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState(null)

    useEffect( () => {
        fetch('/classes.json')
        .then(res => res.json())
        .then(data => {
            const sortedClasses = data.sort((a, b) => b.price - a.price)
            const topClasses = sortedClasses.slice(0,6)
            setPopularClasses(topClasses)
        })
    },[])
    return (
        <>
        <div className="mt-12 mb-8">
        <SectionTitle title="Popular Classes" ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            { popularClasses &&
               popularClasses.map(popularClass => <PopularClassCard
               key={popularClass._id}
               popularClass={popularClass}
               ></PopularClassCard>)
            }
        </div>
        </div>
        </>
    );
};

export default PopularClasses;