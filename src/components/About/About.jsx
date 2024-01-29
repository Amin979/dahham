import React from "react";
import './About.css';
import images from "../../constants/images";

const About = () => {
    return (
        <section className='about section-p bg-dark ' id="about">
            <div className='container'>
                <div className='about-content grid text-center'>
                    <div className='content-left'>
                        <img src={images.about_main_img} alt=""/>

                    </div>
                    <div className='content-right'>
                        <div className='section-t'>
                            <h3> About Us </h3>
                        </div>
                        <p className="text"> We are Dahham's, a company that started with washing machines in 1974.
                            After 49 years of experience, we still hold the number one position in Aleppo. Over the
                            years, we have not only grown in the washing machine industry but also diversified into
                            manufacturing plastic products and various minerals. </p>
                        <p className="text">We capture your interest. Contact us now!</p>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default About;