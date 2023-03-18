import serviceData from "../../assets/data/serviceData";
import ServiceItem from "../UI/serviceItem";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import './landing.css';

const Popular = () => {
    const [cart, setCart] = useState([]);

    const handleClick = (item) =>{
        cart.push(item);
        console.log(cart);
      };
    
    
    return (
        <Container fluid>
            <Row className="justify-content-center" style={{minWidth:'20px'}}>
                {serviceData.slice(0, 6).map((item, index) => (
                    <ServiceItem item={item} handleClick={handleClick} key={`item-${item.id}-${index}`} />
                ))}
            </Row>
        </Container>
    );
};

export default Popular;
