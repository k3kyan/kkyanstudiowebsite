import React from 'react';
//css file

const Home = () =>
{
    return (
        <div>
            <div className="header">
                <h1>Sorry, maintenance is ongoing. If you're a recruiter, check my GitHub with the link in my resume! Will be fixed and functioning by 9/20!!</h1>
            </div>
            <main class="main">
                <section id="featured-products">
                    <h2>Featured Products</h2>
                    <p>!! insert product list!!</p>
                </section>

                <section id="event-schedule">
                    <h2>Event Schedule</h2>
                    <p>!! insert frequently updated event schedule list!! figure out how to update from admin side!!</p>
                </section>

                <section id="social-media">
                    <h2>Social Media</h2>
                    <p>!! insert links for instagram, twitter, email, etsy !!</p>
                </section>


                <section id="gallery">
                    <h2></h2>
                    <p>!! insert gallery for instagram, customers, and twitter posts !!</p>
                </section>
            </main>
        </div>
    );
}

export default Home;