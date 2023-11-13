import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { interviewActions } from '../store/interview.index';

function Interview() {

    const promiseTest = async () => {
        return 987;
    }


    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(interviewActions.setUsersList([]))
            dispatch(interviewActions.setTrackingNumber(''))
        }
    }, []);

    const getPromiseHere = async () => {
        const resp = await promiseTest();
        //    resp.then((data) => console.log(data))
        console.log(resp);
    }


    return (
        <div className="main">
            {/* <button onClick={getPromiseHere}>Promise</button> */}
            <Outlet />
        </div>
    )
}

export default Interview;