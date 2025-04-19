import React from 'react';

const Contact = () => {

    const maxHeightPercentPC = 6.5;
    const maxHeightPercentMobile = 3;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollBottom = docHeight - (scrollTop + winHeight); // Distance from bottom

        // PC Hider
        const pcHider = document.getElementById('pc-hider');
        if (pcHider) {
            const maxScrollDistancePC = (maxHeightPercentPC / 100) * docHeight;
            let heightPxPC = maxScrollDistancePC - scrollBottom;
            heightPxPC = Math.max(0, Math.min(maxScrollDistancePC, heightPxPC));
            pcHider.style.height = heightPxPC + 'px';
        }

        // Mobile Hider
        const mobileHider = document.getElementById('mobile-hider');
        if (mobileHider) {
            const maxScrollDistanceMobile = (maxHeightPercentMobile / 100) * docHeight;
            let heightPxMobile = maxScrollDistanceMobile - scrollBottom;
            heightPxMobile = Math.max(0, Math.min(maxScrollDistanceMobile, heightPxMobile));
            mobileHider.style.height = heightPxMobile + 'px';
        }
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
