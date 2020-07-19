import React from "react";

function Hero(props) {
    return (
        <section className="hero" id="portfolio">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        {props.title}
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Hero;