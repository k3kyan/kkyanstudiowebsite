import React from 'react';
import './AboutPage.css'; 

const FAQ = () =>
{
    return (
        <div>
            <div className="header">
                <h1>FAQ</h1>
            </div>
            <main class="main">
            <section id="faq">
                <b>What does your shop focus on?</b>
                <p>Creating homemade anime-inspired merch! I make almost everything in my home studio, and all designs are drawn by me.</p>
                <b>How do you make your merch?</b>
                <p>For clothing, I use sublimation and HTV methods. I hand craft all my polymer clay charms and resin them with UV resin.</p>
                <b>How often do you go to conventions or sell things in person?</b>
                <p>Currently, I'm busy with life, but I hope to attend an anime con every month or so when possible!! Sometimes I may go to craft fairs to sell more original things.</p>
                <b>What did you use to make your website?</b>
                <p>I developed this website with a few friends of mine from scratch!</p>
            </section>
            </main>
        </div>
    );
}

export default FAQ;