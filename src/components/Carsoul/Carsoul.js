import React from 'react';
import './carsoul.css';

const Carsoul = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide bg-slide-color main" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                    <div className="col-md-5 written-slide">
                        <p className="first-line">
                            Are you ready to Learn?
                        </p>
                        <h1 >Learn With fun <br/><span>Online Courses</span></h1>
                        <p>50+ courses available</p>
                    </div>
                    <div className="col-md-7">
                        <img src="https://eduklas.com/wp-content/uploads/2017/02/eLearning.jpg" className="d-block w-100" alt="slide-pic" />
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Carsoul;