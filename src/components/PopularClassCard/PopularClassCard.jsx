

const PopularClassCard = ({popularClass}) => {
    const {nameOfClass, image, totalEnrolledStudents, price } = popularClass;
    return (
        <div>
            <div className="rounded overflow-hidden shadow-lg border-gray-300">
                <img src={image}  className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{nameOfClass}</div>
                    <p className="text-gray-700 text-base">
                        Enrolled Students: {totalEnrolledStudents}
                    </p>
                    <p className="text-gray-700 text-base">Price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;