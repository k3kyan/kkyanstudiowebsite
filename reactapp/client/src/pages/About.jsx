import React from 'react';
import './AboutPage.css'; 

const About = () =>
{
    return (
        <div>
            <div className="header">
                <h1>About</h1>
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