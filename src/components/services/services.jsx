import serviceData from "../../assets/data/serviceData";
import { Container, Row } from "react-bootstrap";
import ServiceItem from "../UI/serviceItem";
import { useState } from "react";

const Services = () =>{
  const [cart, setCart] = useState([]);

  const handleClick = (item) =>{
    console.log(item)
  };

    return(
        <>
            <Container>
                <Row>
                    <h1>Services</h1>
                {serviceData.map((item) => (
              <ServiceItem item={item} key={item.id} handleClick={handleClick} />
            ))}
            
          </Row>
            </Container>
        </>
    )
}

export default Services;