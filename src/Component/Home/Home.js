import React from 'react';
import Banner from '../Banner/Banner';
import Article from './Article/Article';
import Nav from './Nav/Nav';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Nav></Nav>
            <Article></Article>
        </div>
    );
};

export default Home;