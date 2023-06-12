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
            <label htmlFor='login_username'>Username</label>
            <input
                id='login_username'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                />
            <label htmlFor='login_password'>Password</label>
            <input
                id='login_password'
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