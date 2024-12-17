import React from 'react'
import Banner from '../../features/banner/Banner'
import FeaturedProducts from '../../features/featureProducts/FeaturedProducts'
import Service from '../../features/service/Service'
import Sponcer from '../../features/sponcers/Sponcer'

const Home = () => {
    return (
        <>
            <Banner />
            <FeaturedProducts />
            <Service />
            <Sponcer />
        </>
    )
}

export default Home
