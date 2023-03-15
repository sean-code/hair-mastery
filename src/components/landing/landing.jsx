import Slider from './carousel';
import './landing.css';
import { Image } from './image';
import { Demo } from './video';
import Popular from './popular';


const Home = () => {
    return(
        <>
            <Slider />
                <h2 style={{marginTop:'50px', fontWeight:'700'}}>Book an Appointment to Any of Our Outlets</h2>
            <Image />
                <h2>Our Popular Treats</h2>
                <Popular />
            <Demo />
        </>
    )
}

export default Home;