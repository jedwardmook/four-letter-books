import React, { useState } from 'react'

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

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value)
  }

  return (
    <>
        <form>
          <label htmlFor='username'>Username</label>
            <input 
              id='username'
              value={username}
              onChange={handleUsername}
              />
          <label htmlFor='password'>Password</label>
            <input 
              id='password'
              value={password}
              onChange={handlePassword}
              />
          <label htmlFor='passwordConfirmation'>Password Confirmation</label>
            <input 
              id='passwordConfirmation'
              value={passwordConfrimation}
              onChange={handlePasswordConfirmation}
              />
          <button onClick={handleSignUp}>Sign Up</button>
        </form>
    </>
  )
}

export default SignUpForm