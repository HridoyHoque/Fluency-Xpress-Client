import { FaGooglePlay } from "react-icons/fa";
import { MdOutlineWifiCalling } from "react-icons/md";
import { BsPeopleFill, BsFillBarChartLineFill } from "react-icons/bs";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from "framer-motion";

const buttonVariants = {
    hover: {
      scale: 1.1,
    
    },
  };

const MobileApp = () => {

    const handleDownload = () => {
        toast.success('Coming sooooooon!!!')
    }
    return (
     <>
       <div className="mb-4"><SectionTitle title="Download Our Mobile App"></SectionTitle></div>
        <section className="bg-gray-100 py-12 lg:flex">
        <div className="ml-auto mb-4">
          <div className="mockup-phone border-primary">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                      <h2 className="text-3xl">Fluency <span className="text-blue-500">Xpress</span></h2>
                        <img src="https://i.ibb.co/qrxsRmQ/6435775.jpg" alt="" />
                        <motion.button  
                        variants={buttonVariants}
                        whileHover="hover"
                        onClick={handleDownload} className="btn btn-outline mt-6"><FaGooglePlay /> Download Now</motion.button>
                    </div>
                </div>
            </div>
         
          </div>
           <div className="max-w-6xl  px-4 flex ml-auto">
          
               
                <div className="grid grid-cols-1 gap-4">
                    <motion.div
                     variants={buttonVariants}
                     whileHover="hover"
                    className="bg-white shadow-md rounded-lg p-6 hover:bg-slate-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold">Attendance Tracking</h3>
                            <BsPeopleFill size={34} className="hover:text-gray-700 transition duration-300" />
                        </div>
                        <p className="text-gray-600">
                            Easily track student attendance and generate reports.
                        </p>
                    </motion.div>
                    <motion.div
                     variants={buttonVariants}
                     whileHover="hover"
                    className="bg-white shadow-md rounded-lg p-6 hover:bg-slate-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold">Grade Management</h3>
                            <BsFillBarChartLineFill size={34} className="hover:text-gray-700 transition duration-300" />
                        </div>
                        <p className="text-gray-600">
                            Manage and record student grades efficiently.
                        </p>
                    </motion.div>
                    <motion.div 
                    variants={buttonVariants}
                    whileHover="hover"
                    className="bg-white shadow-md rounded-lg p-6 hover:bg-slate-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold">Parent Portal</h3>
                            <MdOutlineWifiCalling size={34} className="text-gray-500 hover:text-gray-700 transition duration-300" />
                        </div>
                        <p className="text-gray-600">
                            Provide parents access to view student progress and communicate
                            with teachers.
                        </p>
                    </motion.div>
                </div>
                  <Toaster />
            </div>
        </section>
     </>
    );
};

export default MobileApp;