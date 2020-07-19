import React from "react";

function PortfolioItem(props) {
    return (

        <div className="column">
            <p className="title">{props.name}</p>
            <hr />
            <img src={props.img} width="500" height="250" />
            <p className="subtitle">{props.subtitle}
                <br /><br />
            GitHub link: <a target="_blank" href={props.repoLink}
                    rel="noreferrer">Git Repository</a>
                <br />
            Application link: <a target="_blank" href={props.appLink} rel="noreferrer">{props.name}</a>
            </p>
        </div>
    )
}

export default PortfolioItem