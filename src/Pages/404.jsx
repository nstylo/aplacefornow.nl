import React from "react"
import { Link } from "react-router-dom"

export default () => {
  return (
    <>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/signup">Signup</Link>
      </div>
      <div>
        <Link to="/forgot-Password">Forgot Password</Link>
      </div>
      <div>
        <Link to="/reset-password">Reset Password</Link>
      </div>
    </>
  )
}
