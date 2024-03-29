import React from "react";

import "./Qualities.css";
import sections from "../../constants/data";
import images from "../../constants/images";

const Qualities = () => {
    return (
        <section className="qualities section-p bg-md-black" id="qualities">
        <div className="container">
            <div className="qualities-content grid">
                <div className="section-t">
                    <h3> We Are Professionals</h3>
                    <p className="text">

                        Welcome to the perfect destination for more than just transactions, we're here to guide you towards success. Beyond offering products,
                        our dedicated team is committed to assisting you on your journey forward.
                        With our specialized expertise, we're poised to help you discover the route to your success. </p>

                    <div className="item-list grid text-white">
                        {sections.qualities.map(quaity => {
                            return (
                                <div className="item flex" key={quaity.id}>
                                    <div className="item-icon flex flex-center">{quaity.icon}</div>
                                    <div className="item-text"><h3 className="item-title"> Ideas & Plans</h3>
                                        <p className="text"> {quaity.text}</p></div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className='content-right'>
                    <img src={images.professionals_main_img} alt=""/>
                </div>
            </div>
        </div>
    </section>)
}

export default Qualities;