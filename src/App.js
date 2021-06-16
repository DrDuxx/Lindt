import { Suspense } from 'react';
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'


// Components
import WebContent from './components/common/WebContent';
import WebMenu from './components/common/WebMenu';
import WebFooter from './components/common/WebFooter';

// Styles
const styles = {
	headerContainer: {
		display:'flex',
		flexDirection:'row',
		alignItems:'center',
		padding:'2rem 2rem',
		borderBottom:'1px solid #000',
		'@media screen and (maxWidth:1000px)':{
			backgroundColor:'#black'
		}
	},
	contentContainer: {
		// minHeight:'calc(100vh - 260px)',
		marginBottom:'5rem',
		backgroundColor:'white'
	},
	footerContainer: {
		position:'fixed',
		bottom:0,
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		textAlign:'center',
		padding:'2rem 4rem',
		borderTop:'1px black solid',
		marginTop:'2rem',
		backgroundColor:'#2C1A08',
		color:'#d6c8ba',
		zIndex:'-1'
	}
}

const Loading = () => {
	return <div>Loading</div>
}

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/'>
					<Suspense fallback={<Loading />}>
						<div style={styles.headerContainer}>
							<WebMenu />
						</div>
						<div style={styles.contentContainer}>
							<WebContent />
						</div>
						<div style={styles.footerContainer}>
							<WebFooter />
						</div>
					</Suspense>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
