import React from 'react'
import { connect } from 'react-redux'

export const WebFooter = (props) => {
    return (
        <>
            At Lindt USA, we’ve been honored by Newsweek with both an America's Best Customer Service 2020 award and an America’s Best Online Shops 2021 award. We’re proud to have been recognized in these areas and we’re committed to ensuring our customers and great customer experiences are the center of all that we do at Lindt.
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(WebFooter)
