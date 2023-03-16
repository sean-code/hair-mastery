import serviceData from "../../assets/data/serviceData";
import { Container, Row } from "react-bootstrap";
import ServiceItem from "../UI/serviceItem";
import { useState } from "react";

const Services = ({ handleClick }) =>{
  const [cart, setCart] = useState([]);

  // const handleClick = (item) =>{
  //   console.log(item)
  // };

    return(
        <>
            <Container>
                <Row>
                    <h1>Services</h1>
                {serviceData.map((item, index) => (
              <ServiceItem item={item} key={`item-${item.id}-${index}`} />
            ))}
            
          </Row>
            </Container>
        </>
    )
}

export default Services;