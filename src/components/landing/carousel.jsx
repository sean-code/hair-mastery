import { Carousel } from 'react-bootstrap';
import './landing.css';


const Slider = () => {
    return(
        <div className='carousel-page'>
            <Carousel fade indicators={false} controls={false} pause={false} >
            <Carousel.Item interval={1900}>
                    <img
                    style={{width:'10%', height:'20%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1308801083/photo/client-during-beard-shaving-in-barber-shop.jpg?s=612x612&w=0&k=20&c=XIoEGGAn_2deTFEbTBIABS2vDLRIwSJwcrsf4OIfQ18="
                    alt="First slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                    <h1 style={{}}>
                        Welcome to Our Hair Dressing</h1>
                    <p>Wilkomen, Bienvenue, Bienvenidos interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1900}>
                    <img
                    style={{width:'10%', height:'20%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1297620303/photo/smiling-barber-combing-customers-haircut.jpg?s=612x612&w=0&k=20&c=jV59P-WRqCf4ivNAmTNHjUwsgGUiWcaXSLLJin-0UqA="
                    alt="First slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                    <h1 style={{}}>
                        Book Your Session Today</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1900}>
                    <img
                     style={{width:'10%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1407090464/photo/cute-little-boy-at-the-barber-shop-getting-his-hairut.jpg?s=612x612&w=0&k=20&c=I5Oh0kyjfERCAN2sNbAdjtAFgx5prm6unWWrQ8xokko="
                    alt="Second slide"
                    />

                    <Carousel.Caption className='carousel-caption'>
                    <h1 style={{}}>
                    Top Male Grooming Brand</h1>
                    <p>Enjoy our Services</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1900}>
                    <img
                     style={{width:'10%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1356272678/photo/close-shot-of-a-young-man-beard-while-he-is-sitting-at-a-barbershop.jpg?s=612x612&w=0&k=20&c=rD1LFUkePrSPQ0M44sJQL5Ww8A70xYu2PjRCSQcd3Vo="
                    alt="Third slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h1 style={{}}>
                            Our Passionate Brotherhood</h1>
                        <p>We are highly fun and interactive</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )

};

export default Slider;