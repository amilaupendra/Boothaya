import React from 'react'
import { Form } from 'react-bootstrap'

export default function SignUp() {
  return (
    <div>
        <Form>
            <label htmlFor="username">User name</label>
            <input type="text" id='username' name='username' />

            <label htmlFor="password">Password</label>
            <input type="password" id='password' name='password' />
        </Form>
    </div>
  )
}
