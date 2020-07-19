import React from "react";
import profile from "../../imgs/profile.jpg"
import gitlogo from "../../imgs/gh.png"
import lilogo from "../../imgs/li.png"

function AboutInfo() {
    return (
        <section className="container" id="about">
            <div className="section">
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-4">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child" id="profile">
                                    <figure className="image is-4by4">
                                        <img src={profile}
                                            alt="A photo of Dan McKeon, standing in front of a cactus in Portland, OR" />
                                    </figure>
                                </article>
                                <article className="tile is-child" id="links">
                                    <p className="title" id="links-title">LINKS</p>
                                    <div className="container" id="buttons">
                                        <a href="https://github.com/dooski"><img src={gitlogo} width="100" height="20"
                                            alt="GitHub Profile" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/dan-mckeon-89a625160/"><img src={lilogo}
                                            width="150" height="20" alt="LinkedIn Profile" /> </a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child" id="about-tile">
                            <p className="title" id="about-title">DAN MCKEON</p>
                            <p className="subtitle" id="about-sub">Coming from a background in literay, journalistic, and legal
                            editing, Dan McKeon is an LGBTQ coder-in-training in both front-end and back-end web
                            development.
                            Dan graduated from the University at Buffalo in 2018, spending three years working for
                <i>The Spectrum</i>, the student-run newspaper, as a reporter, copy chief and managing
                editor, as well as three years as an editor for <i>NAME Magazine</i>, the literary magazine.
                <br /><br />
                        Out of college, Dan worked for General Code editing municipal ordinances into code books
                        available online in Rochester, NY. They currently work in the Philadelphia suburbs as a
                        barista for Starbucks and as a communications coordinator for
                        the Church of the Holy Apostles while learning full-stack web development
                        through the coding bootcamp at UPenn.
                <br /><br />
                            Dan also enjoys reading and writing poetry, playing and modding video games, and programming
                            a Twitter bot to dunk on them.
            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutInfo