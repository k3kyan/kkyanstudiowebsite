import React from 'react';
import './AboutPage.css'; 

const Tutorials = () =>
{
    return (
        <div>
            <div className="header">
                <h1>Tutorials</h1>
            </div>
            <main class="main">
                <section id="about">
                    <h2>How I make plushies</h2>
                    <p>How to sublimate on minky: <a href="https://www.plushbymakeshiftwings.com/sublimation.html">Makeshiftwings' Tutorial</a>
                    Where I buy my minky:
                    Where I buy "nylex", the fabric for the body: <a href="https://www.etsy.com/listing/1401382311/soft-velcro-fabric-sewing-doll-materials?click_key=370b4bef6c523c676fa471459e92294f179015ef%3A1401382311&click_sum=925224cc&ref=shop_home_active_8&sts=1">Felt Depot on Etsy</a></p>
                </section>
            </main>
        </div>
    );
}

export default Tutorials;