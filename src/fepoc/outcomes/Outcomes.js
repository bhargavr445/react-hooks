import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import OutcomesRoster from "./Outcomes-Roster";

const Outcomes = () => {

    useEffect(() => {
        console.log('API call here...');
        return () => {
            console.log('Outcomes Destroyed...');
        };
    }, []);

    const d = useLoaderData();

    return (
        <div>
            Outcomes...
            <OutcomesRoster rosterData={d} />
        </div>
    )
}

export default Outcomes;

export const getAllUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}
