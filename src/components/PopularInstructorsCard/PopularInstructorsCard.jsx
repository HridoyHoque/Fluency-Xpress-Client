import { FcReading } from 'react-icons/fc';
import { motion } from "framer-motion";

const buttonVariants = {
    hover: {
        scale: 1.1,

    },
};
const PopularInstructorsCard = ({ popularInstructor }) => {

    const { name, image, students } = popularInstructor;
    return (
        <motion.div
        
        variants={buttonVariants}
        whileHover="hover"
        className=" bg-white rounded-lg shadow-lg p-6 border border-gray-300 hover:bg-gray-200 cursor-pointer">
            <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                    <img
                        src={image}
                        alt={name}
                        className="rounded-lg h-48 w-48 object-cover"
                    />
                </div>
                <div className="ml-6">
                    <h2 className="text-2xl font-bold">{name}</h2>
                </div>
            </div>
            <div className="flex items-center">
                <FcReading size={20} className="mr-2" />
                <p>{students} students</p>
            </div>
        </motion.div>
    );
};

export default PopularInstructorsCard;