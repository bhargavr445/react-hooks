import React, { useState } from 'react'

const Login = () => {

  const [userName, setuserName] = useState('');
  const [userPassword, setuserPassword] = useState('');

  const logInhandler = (e) => {
    e.preventDefault();
    if(userName && userPassword) {
      console.log('logged in...');
      setuserName(() => '');
      setuserPassword(() => '');
    }
  }

  const userNameChangeHandler = (e) => {
    setuserName(() => e.target.value);
  }

  const userPasswordHandler = (e) => {
    setuserPassword(() => e.target.value);
  }

  return (
    <div>
      <form>
        <div>
          <input type="text" value={userName} placeholder='enter user name' onChange={userNameChangeHandler} />
        </div>
        <div>
          <input type="password" value={userPassword} placeholder='enter password' onChange={userPasswordHandler} />
        </div>
        <div>
          <button type='submit' onClick={logInhandler}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;