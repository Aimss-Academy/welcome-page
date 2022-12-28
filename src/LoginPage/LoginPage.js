import React from 'react'

import "./LoginPage.css"

const LoginPage = () => {
  return (
    <div class="app-container">
    <div class="content-container">
      <h1 class="main-heading">
        Welcome To <span class="heading">Aimss</span> Academy
      </h1>
      <div class="form-container">
        <form class="form-control">
          <label class="label">Email</label>
          <input type="email" placeholder="Enter Your Email" class="input" />
          <label class="label">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            class="input"
          />
          <button type="button" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default LoginPage
