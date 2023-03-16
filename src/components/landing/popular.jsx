import serviceData from "../../assets/data/serviceData";
import ServiceItem from "../UI/serviceItem";
import { Container, Row } from "react-bootstrap";
import './landing.css';

const Popular = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center" style={{minWidth:'20px'}}>
                {serviceData.slice(0, 6).map((item) => (
                    <ServiceItem item={item} key={item.id} className="mx-3 mb-4" />
                ))}
            </Row>
        </Container>
    );
};

export default Popular;
