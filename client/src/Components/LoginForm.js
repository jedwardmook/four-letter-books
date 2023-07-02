import React, { useState } from 'react'

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
    <>
        <form>
            <label htmlFor='loginUsername'>Username</label>
            <input
                id='loginUsername'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                />
            <label htmlFor='loginPassword'>Password</label>
            <input
                id='loginPassword'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
            <button onClick={handleLogin}>Log In</button>
        </form>
    </>
  )
}

export default LoginForm