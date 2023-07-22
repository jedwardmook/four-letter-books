import React, { useState } from 'react'
import "../Styles/signup.min.css"

function SignUpForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfrimation, setPasswordConfirmation] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()

    fetch('/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
          password_confirmation: passwordConfrimation,
        }
      })
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((user) =>{
          console.log(user);
        })
      } else {
        response.json().then(errors => console.log(errors))
      }
    })
    setUsername('');
    setPassword('');
    setPasswordConfirmation('');
  }

  return (
    <main className='sign_up_main'>
      <article className='sign_up_form_container'>
        <form className='sign_up_form'>
          <label className='sign_up_label' htmlFor='signupUsername'>Username</label>
            <input
              id='signupUsername'
              className='sign_up_input'
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          <label className='sign_up_label' htmlFor='signupPassword'>Password</label>
            <input 
              id='signupPassword'
              className='sign_up_input'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          <label className='sign_up_label' htmlFor='signupPasswordConfirmation'>Password Confirmation</label>
            <input 
              id='signupPasswordConfirmation'
              className='sign_up_input'
              type='password'
              placeholder='Confirm Password'
              value={passwordConfrimation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
          <button className='sign_up_button' onClick={handleSignUp}>Sign Up</button>
        </form>
      </article>
    </main>
  )
}

export default SignUpForm