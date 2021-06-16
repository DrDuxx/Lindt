import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

// Images
import Logo from '../../images/lindtLogo.png';

// Styles
const styles = {
    menuListItems:{
        flexBasis:'33.33%',
        width:'100%',
    },
    menuLeft:{
        textAlign:'left'
    },
    menuCenter:{
        justifySelf:'center',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    menuRight:{
        textAlign:'right'
    },
    menuLink:{
        color:'#AB8E4E',
        padding:'1rem'
    },
    menuLinkActive:{
        color:'#AB8E4E',
        border:'1px solid transparent',
        borderTop:'0',
        borderRadius:'50%',
        padding:'1rem',
        backgroundColor:'#d6c8ba'
    }
}


export const WebMenu = (props) => {
    
    return (
        <>
            <div style={Object.assign({},styles.menuListItems,styles.menuLeft)}><img src={Logo} width="150px" alt="LogoLindt" /></div>
            <div style={Object.assign({},styles.menuListItems,styles.menuCenter)}>
                <NavLink style={styles.menuLink} activeStyle={styles.menuLinkActive} to='/home'>Home</NavLink>
                <NavLink style={styles.menuLink} activeStyle={styles.menuLinkActive} to='/products'>Products</NavLink>
                <NavLink style={styles.menuLink} activeStyle={styles.menuLinkActive} to='/about'>About</NavLink>
                <NavLink style={styles.menuLink} activeStyle={styles.menuLinkActive} to='/contact'>Contact Us</NavLink>
            </div>
            <div style={Object.assign({},styles.menuListItems,styles.menuRight)}>SignIn</div>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(WebMenu)
