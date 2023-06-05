import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import OutcomesRoster from "./Outcomes-Roster";
import LoginContext from "../../context/login-context";
import { useDispatch, useSelector } from "react-redux";
import { counterActions} from '../../store/outcomes.index';

const Outcomes = () => {

    const ctx = useContext(LoginContext);
    const dispatch = useDispatch();;

    const counter = useSelector(state => state.counterState.counter);

    const [student, setStudent] = useState({
        name: 'Bhargav',
        email: 'Bhargav@gmail.com'
    });

    useEffect(() => {
        console.log('API call here...');
        return () => {
            console.log('Outcomes Destroyed...');
        };
    }, []);

    useEffect(() => {
        console.log('name changed...');
        console.log(student);
    }, [student.name]);

    useEffect(() => {
        console.log('email changed...');
        console.log(student);
    }, [student.email]);

    const testStateName = () => {
    //    dispatch({type: INCREMENT});
    dispatch(counterActions.increment());
        setStudent((prevState) => ({ ...prevState, name: `Bhargav R G${Math.random()}` }));
    };
    const testStateEmail = () => {
        // dispatch({type: DECREMENT});
    dispatch(counterActions.decrement());

        setStudent((prevState) => ({ ...prevState, email: `Bhargavrg@gmail.com${Math.random()}` }));
    };

    const incrementBy = (amount) => {
        // dispatch({type: INCREMENTBY, amount: amount})
    dispatch(counterActions.incrementBy(6));

    }

    const d = useLoaderData();

    return (
        <div>
           {counter} Outcomes...{ctx.isLoggedIn}
            <button onClick={testStateName}>Test Use Effect Name or Inc</button>
            <button onClick={testStateEmail}>Test Use Effect Email or Dec</button>
            <button onClick={() => incrementBy(5)}>Test Use Effect Email or Dec</button>
            <OutcomesRoster rosterData={d} />
        </div>
    )
}

export default Outcomes;

export const getAllUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}
