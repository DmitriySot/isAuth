import React from 'react'

import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest}) {

	const getStorage = () => {
		const storage = localStorage.getItem('isLog')
		console.log(typeof storage)
		return localStorage.getItem('isLog')

	}
	return (
		<Route
			{...rest}
			render={ props => (
				getStorage() === 'true' ?
					 <Component  {...props} /> :
					 <Redirect to="/login" />
			)}
		/>
	)
}

export default PrivateRoute
