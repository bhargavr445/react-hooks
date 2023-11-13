import React from 'react'
import { useUser } from './context/UserContext';

function LearningDetails(props) {

    const { userData, setUserData } = useUser();

    function updateUserEmail() {
        setUserData((prevObj) => {
            const userPrevObj = { ...prevObj };
            userPrevObj.userEmail = 'upd@gmail.com';
            return userPrevObj
        });
    }

    function handletabSelection() {
        props.onTabClickFun();
    }

    return (
        <div className='line-cls'>
            <ul className='tab-button' onClick={handletabSelection}>{props.tabInfo.title}</ul>
            **{userData.userEmail}**
            <button className='fim-btn secondary-btn' onClick={updateUserEmail}>Update Email</button>
        </div>
    )
}

export default LearningDetails;
