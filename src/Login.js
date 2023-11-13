import React, { useState } from 'react'

const Login = () => {

  const [userName, setuserName] = useState('');
  const [userPassword, setuserPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [usersList, setUsersList] = useState([]);

  const logInhandler = (e) => {
    e.preventDefault();
    if (userName && userPassword) {
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

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  }

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  }

  const onSubmitUser = (e) => {
    e.preventDefault();
    setUsersList((prevValue) => [...prevValue, { firstName, lastName }]);
    setFirstName('');
    setLastName('');
  }

  const renderUsersList = () => {
    return (
      usersList.length > 0 ? usersList.map((user, index) => <div id="user_section_list">
        <h3 id={`first_name_list_${index}`}>{user.firstName}</h3>
        <h3 id={`last_name_list_${index}`}>{user.lastName}</h3>
        <h6>=====================</h6>
      </div>) : <div id="no_users_found">No Users Added</div>
    );
  }

  const resetUsersList = () => {
    setUsersList([]);
  }

  return (
    <div>
      <form>
        <div>
          <input id='userNameField' type="text" value={userName} placeholder='enter user name' onChange={userNameChangeHandler} />
        </div>
        <div>
          <input id='userPasswordField' type="password" value={userPassword} placeholder='enter password' onChange={userPasswordHandler} />
        </div>
        <div>
          <button id="loginButton" type='submit' onClick={logInhandler}>Login</button>
        </div>
      </form>
      <h2>Add User</h2>
      <div id="addUserSection">
        <form>
          <label id="firstNameLabel" for="">First Name</label>
          <input id='firstNameField' type="text" value={firstName} placeholder='enter first name' onChange={firstNameChangeHandler} />

          <label id="lastNameLabel" for="">Last Name</label>
          <input id='lastNameField' type="text" value={lastName} placeholder='enter last name' onChange={lastNameChangeHandler} />
          
          <button id='submit_user' type='submit' onClick={onSubmitUser}>Add user</button>
          <button id='reset_button' type='reset' onClick={resetUsersList}>Reset users</button>
        </form>
      </div>



      
        {renderUsersList()}
    </div>
  )
}

export default Login;