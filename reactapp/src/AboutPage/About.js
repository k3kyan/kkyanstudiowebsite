import React from 'react';
import './AboutPage.css'; 

function About()
{
    return (
        <div>
            <div className="header">
                <h1>About</h1>
            </div>

            <div className="sidenav">
            <a href="aboutpage.html" style="text-decoration: none">About</a><br></br>
            <a href="faq.html" style="text-decoration: none">FAQ</a><br></br>
            <a href="tutorial1.html" style="text-decoration: none">Tutorials</a><br></br>
            <a href="partners.html" style="text-decoration: none">Partners</a>
            </div>

            <main className="main">
                <section id="about">
                    <h2>About</h2>
                    <p>Kkyan<img src="KkyanCat.png" className="image" alt="KkyanCat" /></p>
                </section>
            </main>
        </div>
    );
}

export default About;