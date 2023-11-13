import React, { useEffect, useState } from 'react';
import LearningDetails from './Learning-Details';
import tabsData from './data/tabs';
import learningData from './data/learning-data';
import { UserProvider } from './context/UserContext';


function LearningOverview() {

    const initialStudentState = {
        name: 'bhargav',
        email: 'bhargav@gmail.com'
    }
    const [selectedTab, setSelectedTab] = useState(null);
    const [student, setStudentb] = useState(initialStudentState);

    useEffect(() => {
        console.log('constructor...');
        return () => {
             console.log('destructor...');
        }
    }, []);

    useEffect(() => {
        if(student.email !== initialStudentState.email) {
            console.log('email prop...') 
        } 
    }, [student.email]);

    useEffect(() => { 
        console.log('name prop...') 
    }, [student.name]);

    useEffect(() => { 
        console.log('object...') 
    }, [student]);


    function handleClick(propName) {
        setSelectedTab(learningData[propName]);
    }

    function updateStudent() {
        setStudentb((prevStudent) => {
            const studentObj = { ...prevStudent };
            studentObj.email = 'gbr@gmail.com'
            return studentObj;
        })
    }

    function updateName() {
        setStudentb((prevStudent) => {
            const studentObj = { ...prevStudent };
            studentObj.name = 'gbr'
            return studentObj;
        })
    }

    return (
        <UserProvider>
            <p>Learning-Overview</p>
            {tabsData.map((tab) => (
                <LearningDetails
                    key={tab.propName}
                    
                    tabInfo={tab}
                    onTabClickFun={() => handleClick(tab.propName)}
                />))}
            <div>
                {selectedTab ? (
                    <div>
                        {selectedTab.description}
                        <div>{selectedTab.code}</div>
                    </div>
                ) : (<p>No Selection</p>)}
            </div>
            <button type='submit' className='fim-btn primary-btn'>Primary</button>
            <button className='fim-btn secondary-btn'>Secondary</button>
            <button onClick={updateStudent} className='fim-btn secondary-btn'>{student.email}</button>
            <button onClick={updateName} className='fim-btn secondary-btn'>{student.name}</button>
        </UserProvider>

    )
}

export default LearningOverview;