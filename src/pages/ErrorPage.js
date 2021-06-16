import React from 'react'
import { connect } from 'react-redux'

export const Error = (props) => {
    return (
        <div>
            404 Error - Page Not Found
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Error)
