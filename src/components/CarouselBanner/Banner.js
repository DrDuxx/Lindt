import React from 'react'
import { connect } from 'react-redux'

export const Banner = (props) => {
    const styles={
        container:{
            position:'relative',
        },
        image:{
            objectFit:'contain',
            width:'100%',
            filter: 'grayscale(50%)'
        },
        test:{
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50%,-50%)',
            color:'white',
            fontWeight:'bold',
            zIndex:'3'
        },
        overlay:{
            position:'absolute',
            top:'0',
            bottom:'0',
            right:'0',
            left:'0',
            zIndex:'2',
            backgroundColor:'rgba(0,0,0,.4)'
        }
    }
    return (
        <div style={styles.container} >
            <img src={props.image} alt="Banner" style={styles.image} draggable={false} />
            <h1 style={styles.test} >{props.text}</h1>
            <div style={styles.overlay}></div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
