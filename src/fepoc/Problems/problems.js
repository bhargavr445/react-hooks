import ProblemsRoster from './problems-roster';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Problems = () => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/');
    }

    const [customerState, setCustomerState] = useState({
        customerName: '',
        id: null
    });
    const [users, setUsers] = useState([]);
    const [defaultMessage, setDefaultMessage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [rosterComp, setRosterComp] = useState(<div><p>Default Message</p></div>);

    /**
     * use effect as constructor and Destructor
     * when we pass empty array as a sencond parameter, 
     * it will work as constructor and Destructor
     */
    useEffect(() => {
        console.log('constructor...');
        return () => {
            console.log('Destructor...');
        }
    }, []);

    /**
     * use effect will gets triggered when users prop changes
     * function with in return will execute 1st and then use effect 1st argument
     * (since retun is also in 1st argument, but return will execute first and then the above function) 
     */
    useEffect(() => {
        if (defaultMessage) {
            setRosterComp(() => <div><p>Default Message..</p></div>)
        } else if (!isLoading) {
            users.length > 0 ? setRosterComp(() => <ProblemsRoster rosterData={users} onDeleteRecord={deleteRecord} />) : setRosterComp(() => <div><p>No Records Found..</p></div>);
        }
        return () => {

        }
    }, [users]);

    useEffect(() => {
        console.log('call 2 times',customerState);
    }, [customerState]);

    useEffect(() => {
        console.log('call once on name change',customerState);
    }, [customerState.customerName]);


    useEffect(() => {
        console.log('call once on id change',customerState);
    }, [customerState.id]);


    const deleteRecord = (id) => {
        console.log(users.splice(users.findIndex((user) => user.id === id), 1));
        setUsers(() => [...users]);
    }

    const searchResults = async (event) => {
        setCustomerState((prevState) => {
            console.log('*****');
            return { ...prevState, customerName: 'Bhargav' };
        })

        setCustomerState((prevState) => {
            console.log('&&&&&&&');
            return { ...prevState, id: 11 };
        })

        setIsLoading(() => true);
        setDefaultMessage(false);
        setUsers(() => []);
        event.preventDefault();
        await axios.get('https://jsonplaceholder.typicode.com/users').then(
            (resp) => {
                setIsLoading(() => false);
                setUsers(() => resp.data);

            },
            (err) => {
                setIsLoading(() => false);
                console.log(err);
            }
        );
    }

    return (
        <div>
            <button onClick={searchResults}>Search</button>
            <button onClick={navigateBack}>Back</button>
            {rosterComp}
        </div>
    )
}

export default Problems;