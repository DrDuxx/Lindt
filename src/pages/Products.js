import React from 'react'
import { connect } from 'react-redux'
import ProductCard from '../components/ProductCard/ProductCard'

export const Products = (props) => {
    const styles={
        productsContainer:{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
        },
        productTitle:{
            textAlign:'center',
            margin:'2rem 0',
            color:'#AB8E4E'
        }
    }
    return (
        <div>
            <h1 style={styles.productTitle}>Products</h1>
            <div style={styles.productsContainer}>
                <ProductCard name="Chocolate Bar" details="Hello This is a detailcccccccc cccccccccccccccccc cccccccccccccccccccc ccccccccccccccccc ccccccccccccccccccccccccccccccc cccccccccccccccccccccccccccccccccccccccccccccccccca"/>
                <ProductCard name="Chocolate Bar" details="Hello This is a detail"/>
                <ProductCard name="Chocolate Bar" details="Hello This is a detail"/>
                <ProductCard name="Chocolate Bar" details="Hello This is a detail"/>
                <ProductCard name="Chocolate Bar" details="Hello This is a detail"/>
                <ProductCard name="Chocolate Bar" details="Hello This is a detail"/>
                <ProductCard name="Chocolate Bar" details="Hello This is a detail"/>
                <ProductCard name="Chocolate Bar" details="Hello This is a detail"/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
