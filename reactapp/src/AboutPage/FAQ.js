import React from 'react';
import './AboutPage.css'; 

function FAQ()
{
    return (
        <div>
            <div className="header">
                <h1>About</h1>
            </div>

            <div className="sidenav">
                <a href="aboutpage.html" className='link'>About</a><br />
                <a href="faq.html" className='link'>FAQ</a><br />
                <a href="tutorial1.html" className='link'>Tutorials</a><br />
                <a href="partners.html" className='link'>Partners</a>
            </div>

            <main class="main">
            <section id="faq">
                <b>Question</b>
                <p>Answer</p>
                <b>Question</b>
                <p>Answer</p>
                <b>Question</b>
                <p>Answer</p>
                <b>Question</b>
                <p>Answer</p>
                <b>Question</b>
                <p>Answer</p>
            </section>
            </main>
        </div>
    );
}

export default FAQ;