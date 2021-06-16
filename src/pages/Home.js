import React from 'react'
import { connect } from 'react-redux'
import CarouselBanner from '../components/CarouselBanner/CarouselBanner'
import LatestProducts from '../components/LatestProducts/LatestProducts'

export const Home = (props) => {
    return (
        <div>
            <CarouselBanner />
            <LatestProducts />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
