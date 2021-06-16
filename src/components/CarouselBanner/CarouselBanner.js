import React from 'react'
import { connect } from 'react-redux'
import Carousel from 'react-material-ui-carousel'
import Banner from './Banner'

// images
import Image1 from '../../images/Component1.png'
import Image2 from '../../images/master-chocolatier-2-20180614-1500x680.jpg'
import Image3 from '../../images/Component2.png'

export const CarouselBanner = (props) => {
    return (
        <div>
            <Carousel
                autoPlay={true}
                stopAutoPlayOnHover={true}

                >
                <Banner image={Image1} text="Text1"/>
                <Banner image={Image2} text="Text1"/>
                <Banner image={Image3} text="Text1"/>   
            </Carousel>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselBanner)
