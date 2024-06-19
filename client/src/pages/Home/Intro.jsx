/*import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TrackVisibility from 'react-on-screen';
import headerImg from '../../assests/img/header-img.svg';

function Intro() {
    const { loading, myapiData } = useSelector(state => state.root);
    const { intro } = myapiData;
    const { firstName, lastName, welcomeText, description, caption } = intro;

    const [typedCaption, setTypedCaption] = useState('');

    useEffect(() => {
        let interval;

        const typeCaption = () => {
            const characters = caption.split('');
            let index = 0;

            interval = setInterval(() => {
                if (index <= characters.length) {
                    setTypedCaption(characters.slice(0, index).join(''));
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 30);
        };

        typeCaption();

        return () => clearInterval(interval);
    }, [caption]);

    return (
        <div className='h-[100vh] bg-primary flex flex-col sm:flex-row items-start justify-center sm:justify-start gap-10 py-80 sm:gap-8'>
            <div className="flex-1">
                <h1 className='text-white font-semibold'>
                    {welcomeText || ''}
                </h1>
                <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>
                    {firstName || ''} {lastName || ''}
                </h1>
                <h1 className='text-6xl sm:text-3xl text-white font-semibold'>
                    {typedCaption}
                </h1>
                <p className='text-black w-full sm:w-2/3 font-semibold'>
                    {description || ''}
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <TrackVisibility>
                    {({ isVisible }) => (
                        <div className={`animate__animated ${isVisible ? 'animate__zoomIn' : ''}`}>
                            <img src={headerImg} alt="Header Img" />
                        </div>
                    )}
                </TrackVisibility>
            </div>
        </div>
    );
}

export default Intro;
// Intro.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TrackVisibility from 'react-on-screen';
import headerImg from '../../assests/img/header-img.svg'; // Ensure the correct path
import { Container, Row, Col } from "react-bootstrap";
//import './Intro.css'; // Import Intro CSS

const Intro = () => {
    const { loading, myapiData } = useSelector(state => state.root);
    const { intro } = myapiData;
    const { firstName, lastName, welcomeText, description, caption } = intro;

    const [typedCaption, setTypedCaption] = useState('');

    useEffect(() => {
        let interval;

        const typeCaption = () => {
            const characters = caption.split('');
            let index = 0;

            interval = setInterval(() => {
                if (index <= characters.length) {
                    setTypedCaption(characters.slice(0, index).join(''));
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 30);
        };

        typeCaption();

        return () => clearInterval(interval);
    }, [caption]);

    return (
        <section className="intro" id="home">
            <Container fluid>
                <div className="flex w-full items-center gap-4 sm:flex-col">
                    <div className='flex flex-col gap-0 w-1/2 sm:w-full' xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1 className='text-white font-semibold'>
                                        {welcomeText || ''}
                                    </h1>
                                    <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>
                                        {firstName || ''} {lastName || ''}
                                    </h1>
                                    <h1 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent sm:text-3xl font-semibold'>
                                        {typedCaption}
                                    </h1>
                                    <p className='font-light text-white tracking-tight w-full sm:w-2/3'>
                                        {description || ''}
                                    </p>
                                </div>}
                        </TrackVisibility>
                    </div>
                    <div xs={12} md={6} xl={4} className="h-[10vh] w-1/2 sm:w-full">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" className="intro-img" /> {/* Apply CSS class }
                                </div>}
                        </TrackVisibility>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Intro; */

import { useSelector } from 'react-redux';
import headerImg from '../../assests/img/header-img.svg';
import React, { useState, useEffect } from 'react';
import TrackVisibility from 'react-on-screen';

const Intro = () => {

    const { loading, myapiData } = useSelector(state => state.root);
    const { intro } = myapiData;
    const { firstName, lastName, welcomeText, description, caption } = intro;
    const [typedCaption, setTypedCaption] = useState('');

    useEffect(() => {
        let interval;

        const typeCaption = () => {
            const characters = caption.split('');
            let index = 0;

            interval = setInterval(() => {
                if (index <= characters.length) {
                    setTypedCaption(characters.slice(0, index).join(''));
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 30);
        };

        typeCaption();

        return () => clearInterval(interval);
    }, [caption]);

    return (
        <div className='intro border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap sm:flex-col'>
                <div className='sm:w-full lg:w-1/2'>
                    <div className='mt-20 flex flex-col items-center gap-4 lg:items-start' >
                        <h1 className='text-white font-semibold'>
                            {welcomeText || ''}
                        </h1>
                        <h1 className='pb-10 text-4xl text-white font-thin tracking-tight lg:mt-5 lg:text-7xl'>
                            {firstName || ''} {lastName || ''}
                        </h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent sm:text-3xl font-semibold'>
                            {typedCaption}
                        </span>
                        <p className='my-2 max-w-xl font-light mt-5 text-white tracking-tighter lg:w-full sm:w-2/3'>
                            {description || ''}
                        </p>
                        <div className='profile-options'>
                            <a href='Arachchige.O.N.A.pdf' download="Oshadi Arachchige.O.N.A.pdf">
                                <button className='btn highlighted-btn bg-gradient-to-r from-pink-300 to-purple-500'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='sm:w-full lg:w-1/2 lg:p-8 lg:mt-40 '>
                    <div className='flex hustify-center'>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" className="intro-img" />
                                </div>}
                        </TrackVisibility>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Intro ;