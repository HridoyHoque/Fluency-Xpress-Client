
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import AwesomeSlider from 'react-awesome-slider';


const Banner = () => {
    return (
        <> <AwesomeSlider>
            <div>
                <img className='w-screen' src="https://i.ibb.co/Qp4nwJR/3170961.jpg" alt="" />
            </div>
            <div>
                <img className='w-screen' src="https://i.ibb.co/2PwNzvB/group-students-posing-table.jpg" alt="" />
            </div>
        </AwesomeSlider>
        </>
    );
};

export default Banner;