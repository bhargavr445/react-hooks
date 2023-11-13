import React, { useState } from 'react'

const Pratice = () => {

  const login = () => {
    return new Promise((resolve, reject) => {
      console.log('logging in ....');
      setTimeout(() => {
        return reject({ userName: 'Bhargav R G' })
      }, 2000)
    })
  }

  const fetchUser = (userName) => {
    return new Promise((resolve, reject) => {
      console.log('fetching user details ....');
      setTimeout(() => {
        return resolve({ userEmail: 'BhargavR@gmail.com', userRole: 'Dev' })
      }, 2000)
    })
  };

  const checkUserStatus = () => {
    return new Promise((resolve, reject) => {
      console.log('fetching user status ....');
      setTimeout(() => {
        return reject({ userEmail: 'BhargavR@gmail.com', userRole: 'Dev', userStatus: 'Active' })
      }, 2000)
    })
  };

  const startApp = () => {
    login()
      .catch((userDetailsError) => {
        throw { errorFrom: 'FETCH_LOGIN_API' }
      })
      .then((login) => {
        console.log('$$login success::', login.userName);
        return fetchUser(login.userNam).catch((error) => {
          throw { errorFrom: 'FETCH_USER_API' }
        })
      })
      .then((userDetails) => {
        console.log('$$fetching user details success::', userDetails);
        return checkUserStatus().catch(() => {
          throw { errorFrom: 'USER_STATUS_API' }
        })
      })
      .then((userStatusResp) => {
        console.log('$$Fetching User Status::',userStatusResp.userStatus);
      })
      .catch((userDetailsError) => {
        console.log('***Failed***', userDetailsError)
      })
  };

  return (
    <div>
      loading..
      <button onClick={startApp}>Login</button>
    </div>
  )


}

export default Pratice;