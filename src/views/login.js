import React from 'react'

function View({ loginForm, error, updateFields, onSubmit }) {
  return (
    <div>
      <h2>Login</h2>
      <span style={{ color: "red" }}>{error}</span>
      <form onSubmit={onSubmit(loginForm)}>
        <div>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" onChange={updateFields} required />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" onChange={updateFields} required />
          </label>
        </div>
        <input type="submit" label="Login" />
      </form>
    </div>
  )
}

export default View
