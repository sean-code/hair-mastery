import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./serviceItem.css";

const ServiceItem = ({item, handleClick}) => {
  const { id, image, title, price, desc } = item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="service__item">
        <div className="service__img">
          <img src={image} alt="" className="w-100" />
        </div>

        <div className="service__item-content mt-4">
          <h4 className="section__title text-center">{title}</h4>
          <h6 className="rent__price text-center mt-">
            Ksh.{price}
          </h6>
          <p>
            {desc}
          </p>
          <button className=" w-50 service__item-btn service__btn-rent" onClick={()=>handleClick(item)}>
            Book Service
          </button>

          <button className=" w-50 service__item-btn service__btn-details">
            <Link to={`/our-services/${title}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ServiceItem;
