import React from 'react';

const Contact = () => {

    const maxHeightPercentPC = 6.5;
    const maxHeightPercentMobile = 1;

    window.addEventListener('scroll', () => {
        const hider = document.getElementById('pc-hider');
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollBottom = docHeight - (scrollTop + winHeight); // Distance from bottom

        const maxScrollDistance = (maxHeightPercentPC / 100) * docHeight; // max height in px
        let heightPx = maxScrollDistance - scrollBottom;

        heightPx = Math.max(0, Math.min(maxScrollDistance, heightPx)); // clamp between 0 and max

        hider.style.height = heightPx + 'px';
    });

    window.addEventListener('scroll', () => {
        const hider = document.getElementById('mobile-hider');
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollBottom = docHeight - (scrollTop + winHeight); // Distance from bottom

        const maxScrollDistance = (maxHeightPercentMobile / 100) * docHeight; // max height in px
        let heightPx = maxScrollDistance - scrollBottom;

        heightPx = Math.max(0, Math.min(maxScrollDistance, heightPx)); // clamp between 0 and max

        hider.style.height = heightPx + 'px';
    });

    return (
        <div id="contact" className={"contact"}>
            <h1>Let's Connect</h1>
            <iframe src="https://surveyheart.com/form/67f67aa7fa6fac248afa1e64">Loading...</iframe>
            <div id={"pc-hider"} className={"hider"}/>
            <div id={"mobile-hider"} className={"hider"}/>
        </div>
    )
}

export default Contact;
