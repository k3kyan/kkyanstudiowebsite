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
                    <h2>About Kyue Studio's Creator</h2>
                    <p>Kyue Studio was started at a college event that showcased artists who made art things that they could sell to other college students. That event was so successful for me that I decided to start a side business where I can continue my craft and share it with people! (And so I can fund my art hobbies.)</p>
                    <p>Kkyan<img src="../KkyanCat.png" className="image" alt="KkyanCat" /></p>
                </section>
            </main>
        </div>
    );
}

export default About;