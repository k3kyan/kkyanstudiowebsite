import React from 'react';
import './AboutPage.css'; 

function Partners()
{
    return (
        <div>
            <div className="header">
                <h1>About</h1>
            </div>

            <div className="sidenav">
            <a href="aboutpage.html">About</a><br></br>
            <a href="faq.html">FAQ</a><br></br>
            <a href="tutorial1.html">Tutorials</a><br></br>
            <a href="partners.html">Partners</a>
            </div>

            <main class="main">
                <section id="partners">
                    <h2>Partners</h2>
                    <p>M.C. Jeter</p>
                </section>
            </main>
        </div>
    );
}

export default Partners;