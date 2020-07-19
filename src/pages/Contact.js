import React from "react";
import Hero from "../components/Hero";

function Contact() {
    return (
        <div>
            <Hero title="CONTACT INFO" />
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <p className="title">CONTACT INFO</p>
                        <hr />
                        <p className="subtitle"><i>email:</i> dmckeon495@gmail.com</p>
                    </div>
                    <div className="column">
                        <p className="title">RESUME</p>
                        <hr />
                        <p className="subtitle"><i>resume:</i> <a href={require("../resume.pdf")} download="resume">click here to view</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact