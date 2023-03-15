import Slider from './carousel';
import './landing.css';
import { Image } from './image';
import { Demo } from './video';

const Home = () => {
    return(
        <>
            <Slider />
                <h2 style={{marginTop:'50px', fontWeight:'700'}}>Book An Appointment To Any Of Our Outlets</h2>
            <Image />

            <Demo />
        </>
    )
}

export default Home;