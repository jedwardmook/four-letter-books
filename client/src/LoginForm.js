import React from 'react'

function LoginForm() {
  return (
    <>
        <form>
            <label htmlFor='username'>Username</label>
            <input
                id='username' 
                />
            <label htmlFor='password'>Password</label>
            <input
                id='password' 
                />
        </form>
    </>
  )
}

export default LoginForm