
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import AwesomeSlider from 'react-awesome-slider';


const Banner = () => {
    return (
        <> <AwesomeSlider>
            <div>
                <img className='w-screen' src="https://i.ibb.co/0ntZPLz/s1.png" alt="" />
            </div>
            <div>
                <img className='w-screen' src="https://i.ibb.co/vswFh5v/brooke-cagle-g1-Kr4-Ozfoac-unsplash.jpg" alt="" />
            </div>
        </AwesomeSlider>
        </>
    );
};

export default Banner;