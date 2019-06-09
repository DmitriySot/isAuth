import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './style.css'

class Login extends Component{

	state = {
		pass: '12345',
		login: 'Admin',
		error: false,
		link: false
	}

	onSubmit = (e) => {
		e.preventDefault()
		const { login, pass, link } = this.state
		if(login === 'Admin' && pass === '12345' ) {
			localStorage.setItem('isLog', true)
			this.setState({link: true})
			return
		}
		localStorage.setItem('isLog', false)
			this.setState({
				login: '',
				pass: '',
				error: true,
				link:false
			})
			console.info("__link__", link)
	}



	onLoginChange = (e) => this.setState({login: e.target.value})
	onPassChange = (e) => this.setState({pass: e.target.value})

  render() {
		const {error, link} = this.state
		const incorrect = error ? <div>incorrect login or password</div>: null

		if(link) return <Redirect to="/profile"/>

    return (
      <form className="login-form"
						onSubmit={this.onSubmit}>
				<input
					type="text"
					 placeholder="login"
					 value={this.state.login}
					 onChange={this.onLoginChange}
				/>
				<input
					type="text"
					placeholder="12345"
					value={this.state.pass}
					onChange={this.onPassChange}
				/>
				{incorrect}
				<button>
					DONE
				</button>

			</form>
    )
  }
}

export default Login
