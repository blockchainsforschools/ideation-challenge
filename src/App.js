import React from 'react';
import './App.css';
import AppBar from './comps/AppBar';
import ThemeProvider from './comps/ThemeProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './comps/Rules';
import GettingStarted from './pages/GettingStarted';
import CodeOfConduct from './comps/CodeOfConduct';

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<AppBar />
				<Switch>
					<Route path={'/'} component={Home} exact />
					<Route path={'/CoC'} component={CodeOfConduct} />
					<Route
						path={'/getting-started'}
						component={GettingStarted}
					/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
