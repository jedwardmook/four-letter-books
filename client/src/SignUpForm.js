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

  return (
    <>
        <form>
          <label htmlFor='username'>Username</label>
            <input 
              id='username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          <label htmlFor='password'>Password</label>
            <input 
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          <label htmlFor='passwordConfirmation'>Password Confirmation</label>
            <input 
              id='passwordConfirmation'
              type='password'
              value={passwordConfrimation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
          <button onClick={handleSignUp}>Sign Up</button>
        </form>
    </>
  )
}

export default SignUpForm