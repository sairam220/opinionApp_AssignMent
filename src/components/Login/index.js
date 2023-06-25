import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import {AiFillApple} from 'react-icons/ai'
import './index.css'


class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  showAndHidePassword = () => {
    this.setState(pre => ({isShowPassword: !pre.isShowPassword}))
  }

  successLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  failedLogin = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  showPassword = () => {
    const {isShowPassword} = this.state
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
    console.log(isShowPassword)
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const apiLoginUrl = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiLoginUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.successLogin(data.jwt_token)
    } else {
      this.failedLogin(data.error_msg)
    }
  }

  render() {
    

    const {
      username,
      password,
      isShowPassword,
      showErrorMsg,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="BgContainer">
        <div className='board-container'>
            <h1 className='board-heading'>Board.</h1>
        </div>
        <div>
            <div className='sign-in-heading-container'>
             <h1 className='heading-1'>Sign In</h1>
            <p >Sign in to your account</p>
            </div>

            <div className='sign-in-with-google'>
                <button className='google-card'>
                     <FcGoogle className='icon'/>
                     <p className='para1'>Sign in with Google</p> 
                </button>

                <button className='google-card'>
                     <AiFillApple className='icon'/>
                     <p className='para1'>Sign in with Apple</p> 
                </button>
            </div>
        
        <div className="LoginContainer">
          
          <form className="FormContainer" onSubmit={this.onSubmitForm}>
            <label htmlFor="userName" >
              Email address
            </label>
            <input
              type="text"
              id="userName"
              className="InputElement"
              onChange={this.onChangeUsername}
              value={username}
              placeholder='rahul'
            />
            <label htmlFor="password" >
              Password
            </label>
            <input
              type={isShowPassword ? 'text' : 'password'}
              id="password"
              className="InputElement"
              onChange={this.onChangePassword}
              value={password}
              placeholder='rahul@2021'
            />

            <p className='forget-password'>Forget password</p>

            {showErrorMsg ? <p className="ErrorMsg">*{errorMsg}</p> : null}
            <button className="LoginButton" type="submit">
               Sign In
            </button>
            <div className="checkbox-input">
              <input
                type="checkbox"
                id="checkbox"
                onClick={this.showPassword}
              />
              <label className='label1' htmlFor="checkbox">
                Show Password
              </label>
            </div>
          </form>
        </div>
      </div>
      </div>
    )
  }
}

export default LoginRoute
