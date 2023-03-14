import Slider from './carousel';
import { Image } from './image';
import './landing.css';

const Home = () => {
    return(
        <>
            <Slider />
            <h2 style={{marginTop:'50px'}}>Enjoy Our Services From Any Of Our Shops</h2>
            <Image />
        </>
    )
}

export default Home;