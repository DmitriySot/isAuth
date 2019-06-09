import React from 'react'
import Main from "../../pages/Main";
import Header from '../Header'
import Login from '../../pages/Login'
import Profile from '../../pages/Profile'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'

import "./styles.css";

function App() {

	return (
		<div className="App">

			<Router>
				<Header />
				<Route exact path="/" component={Main} />
				<Route path="/login" component={Login} />
				<PrivateRoute path="/profile" component={Profile} />
			</Router>

		</div>
	)
}

export default App
