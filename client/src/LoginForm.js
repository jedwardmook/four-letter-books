import React, { useState } from 'react'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
        <form>
            <label htmlFor='username'>Username</label>
            <input
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                />
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
            <button>Log In</button>
        </form>
    </>
  )
}

export default LoginForm