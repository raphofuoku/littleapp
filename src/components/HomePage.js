import React from 'react';
import Header from "./Header";
import Hero from "./Hero";
import Highlights from './Highlight';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';


const HomePage = () =>{
    return(
        <>
        <Header />
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
        </>
    );
}

export default HomePage;