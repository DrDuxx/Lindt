import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../../routers/PrivateRoute'



// Components
import Home from '../../pages/Home'
import ProductDetails from '../../pages/ProductDetails'
import AdminPanel from '../../pages/AdminPanel'
import ErrorPage from '../../pages/ErrorPage';
import Products from '../../pages/Products'
import About from '../../pages/About'
import Contact from '../../pages/Contact'




export const WebContent = (props) => {

    

    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/home' />} />

            {/* Public Routes */}
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />

            <Route exact path='/products' component={Products} />
            <Route exact path='/products/:productId' component={ProductDetails} />

            {/* Private Routes / Admin */}
            <PrivateRoute exact path='/admin' component={AdminPanel} />
            <PrivateRoute exact path='/admin' component={AdminPanel} />

            {/* error route */}
            <Route render={() => <Redirect to='/error' />} />

            <Route exact path='/error'>
                <ErrorPage />
            </Route>

            {/* Login and Signup*/}
            {/* <Route exact path='/login' component={Login} />
            <Route exact path='/forgot-password' component={ForgotPass} />
            <Route exact path='/verify/:token' component={Verify} />
            <Route exact path='/register' component={Register} /> */}

            <Route>
                <Redirect to='/error' />
            </Route>
        </Switch>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(WebContent)
