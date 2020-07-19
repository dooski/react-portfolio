import React from "react";
import Hero from "../components/Hero";
import PortfolioItem from "../components/PortfolioItem";
import globeimg from "../imgs/globe.png";
import spaceimg from "../imgs/space.PNG";
import dooskimg from "../imgs/doosk.PNG";
import weatherimg from "../imgs/weather.png";
import squadimg from "../imgs/squad.png";
import noteimg from "../imgs/note.png"

const Data = require('../PortfolioData')


function Portfolio() {
    return (
        <div>
            <Hero title="PORTFOLIO" />
            <br></br>
            <div className="container" id="portfolio-container">
                <div className="columns">
                    <PortfolioItem name={Data[0].name} img={globeimg} subtitle={Data[0].subtitle} repoLink={Data[0].repoLink} appLink={Data[0].appLink} />;
                    <PortfolioItem name={Data[1].name} img={spaceimg} subtitle={Data[1].subtitle} repoLink={Data[1].repoLink} appLink={Data[1].appLink} />;
                    <PortfolioItem name={Data[2].name} img={dooskimg} subtitle={Data[2].subtitle} repoLink={Data[2].repoLink} appLink={Data[2].appLink} />;
                </div>
                <div className="columns">
                    <PortfolioItem name={Data[3].name} img={weatherimg} subtitle={Data[3].subtitle} repoLink={Data[3].repoLink} appLink={Data[3].appLink} />;
                <PortfolioItem name={Data[4].name} img={squadimg} subtitle={Data[4].subtitle} repoLink={Data[4].repoLink} appLink={Data[4].appLink} />;
                <PortfolioItem name={Data[5].name} img={noteimg} subtitle={Data[5].subtitle} repoLink={Data[5].repoLink} appLink={Data[5].appLink} />;

                </div>
            </div>
        </div>
    )
}

export default Portfolio