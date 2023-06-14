

const PopularClassCard = ({ popularClass }) => {
    const { name, image, totalEnrolledStudents, price } = popularClass;
    return (
        <div
            className="hover:bg-slate-300 cursor-pointer"
        >
            <div className="rounded overflow-hidden shadow-lg border-gray-300">
                <img src={image} className="w-full h-[250px]" />
                <div className="px-6 py-4">
                    <div className="text-xl mb-2 font-semibold">{name}</div>
                    <p className="text-gray-700 text-base font-semibold">
                        Enrolled Students: {totalEnrolledStudents}
                    </p>
                    <p className="text-gray-700 text-base font-bold">Price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;