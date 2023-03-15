import serviceData from "../../assets/data/serviceData";
import { Container, Row } from "react-bootstrap";
import ServiceItem from "../UI/serviceItem";

const Services = () =>{
    return(
        <>
            <Container>
                <Row>
                    <h1>Services</h1>
            {serviceData.map((item) => (
              <ServiceItem item={item} key={item.id} />
            ))}
          </Row>
            </Container>

            

        </>
    )
}

export default Services;