import Slider from './carousel';
import { Image } from './image';
import './landing.css';

const Home = () => {
    return(
        <>
            <Slider />
            <h2 style={{marginTop:'50px'}}>Visit Us To Any Of Our Shops</h2>
            <Image />
        </>
    )
}

export default Home;