import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pink from '../Styles/Images/pink.svg'
import '../Styles/loginform.min.css'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('/sessions', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log(user)
        })
      } else {
        response.json().then((errors) => {
          console.log(errors)
        })
      }
    })
    setUsername('');
    setPassword('');
  }



  return (
    <main className='log_in_main'>
      <article className='log_in_container'>
        <img src={pink} alt='pink_alien_cat' className='log_in_form_image'/>
        <h2 className='log_in_header'>Login to your account</h2>
        <form className='log_in_form'>
            <label className="log_in_label" htmlFor='loginUsername'>Username</label>
            <input
                id='loginUsername'
                className='log_in_input'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                />
            <label className="log_in_label" htmlFor='loginPassword'>Password</label>
            <input
                id='loginPassword'
                className='log_in_input'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
            <button className='log_in_button' onClick={handleLogin}>Log In</button>
        </form>
        <div className='log_in_sign_up_div'>
          <p>Sign up for account</p>
          <Link className='log_in_sign_up_link' to="/signup">
            <button className='log_in_sign_up_button'>here</button>
          </Link>
        </div>
      </article>
    </main>
  )
}

export default LoginForm