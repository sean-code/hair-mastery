import Slider from './carousel';
import './landing.css';
import { Image } from './image';
import { Demo } from './video';


const Home = () => {
    return(
        <>
            <Slider />
                <h2 style={{marginTop:'50px', fontWeight:'700'}}>Book an Appointment to Any of Our Outlets</h2>
            <Image />
          

            <Demo />
        </>
    )
}

export default Home;