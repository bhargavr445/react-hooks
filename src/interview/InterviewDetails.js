import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from "../constants";

import { FaBackward } from 'react-icons/fa';


const InterviewDetails = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [user, setUser] = useState(null);

    const backToSearch = () => {
        navigate('/interview');
    }

    useEffect(() => {
        if (params.id) {
            fetchDataById(params.id);
        }
    }, [params.id]);

    const fetchDataById = async (id) => {
        const response = await fetch(`${API_URL}/api/user?userId=${id}`);
        setUser(await response.json())
    }

    if (!user) {
        return <div>Loading...</div>
    }



    return (<>
        {user && (<div>
            <button className='table-btn' onClick={backToSearch}>Back to Search</button>
            <h1>View User</h1>
            <ul>
                <li>Email: {user?.email}</li>
                <li>
                    Name: {user?.first} {user?.last}
                </li>
                <li>Company: {user?.company}</li>
                <li>Country: {user?.country}</li>
            </ul>
        </div>)} </>
    )
}

export default InterviewDetails;