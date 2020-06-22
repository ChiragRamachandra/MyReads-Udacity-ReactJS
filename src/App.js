import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Switch>
				<Route exact path="/search" component={Search} />
			</Switch>
		</Router>
	);
}

export default App;
