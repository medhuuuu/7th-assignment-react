import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import './card.css';

const Card = (props) => {
    const card = props.card;
    return (
        <div className="whole-card">
            <div className="card mb-3 boots-part">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={card.img} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{card.name}</h5>
                            <p className="card-text">Modules: {card.class}</p>
                            <p className="card-text">Projects: {card.projects}</p>
                            <p className="card-text"><small className="text-muted">{card.hours} hours per day</small></p>
                            <p className="card-text">Price: ${card.price}</p>
                            <Button variant="warning" onClick={()=> props.handleCart(card)} >Enroll Now  <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;