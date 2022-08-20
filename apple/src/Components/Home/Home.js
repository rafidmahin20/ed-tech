import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Stats></Stats>
            <Contact></Contact>
        </div>
    );
};

export default Home;