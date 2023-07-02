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
          <label htmlFor='signupUsername'>Username</label>
            <input 
              id='signupUsername'
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          <label htmlFor='signupPassword'>Password</label>
            <input 
              id='signupPassword'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          <label htmlFor='signupPasswordConfirmation'>Password Confirmation</label>
            <input 
              id='signupPasswordConfirmation'
              type='password'
              placeholder='Confirm Password'
              value={passwordConfrimation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
          <button onClick={handleSignUp}>Sign Up</button>
        </form>
    </>
  )
}

export default SignUpForm