import React from 'react';
import Banner from '../Banner/Banner';
import OurserVices from '../OurServices/OurserVices';
import OurServices from '../OurServices/OurserVices';
import Popular_Class from './Popular_Class/Popular_Class';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EduHub | Home</title>
            </Helmet>
         <Banner/>
         <Popular_Class/>
         <OurServices/>
        </div>
    );
};

export default Home;