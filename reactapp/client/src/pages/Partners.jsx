import React from 'react';
import './AboutPage.css'; 

const Partners = () =>
{
    return (
        <div>
            <div className="header">
                <h1>Partners</h1>
            </div>
            <main class="main">
                <section id="partners">
                    <h2>Partners</h2>
                    {/* target and rel fields make the link open in a new tab*/}
                    <p>M.C. Jeter: <a href="https://mcjeterbooks.com/" target="_blank" rel="noopener noreferrer">Website</a></p>
                    <p>SlimWrites Tiana</p>
                </section>
            </main>
        </div>
    );
}

export default Partners;