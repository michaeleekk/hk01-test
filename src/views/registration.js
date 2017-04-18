import React from 'react'

function View({ registrationForm, error, updateFields, onSubmit }) {
  return (
    <div>
      <h2>Registration</h2>
      <span style={{ color: "red" }}>{error}</span>
      <form onSubmit={onSubmit(registrationForm)}>
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
        <div>
          <label htmlFor="confirm_password">
            Confirm Password:
            <input type="password" name="confirm_password" onChange={updateFields} required />
          </label>
        </div>
        <input type="submit" label="Login" />
      </form>
    </div>
  )
}

export default View
