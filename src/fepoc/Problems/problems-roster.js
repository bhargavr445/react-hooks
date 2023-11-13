import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProblemsRoster = ({rosterData, onDeleteRecord}) => {

    const navigate = useNavigate();

    const nameClick = (name) => {
        console.log(name);
    }
    
    const deleteRecord = (id) => {
        console.log(id);
        onDeleteRecord(id);
    }
    
    useEffect(() => {
        console.log('constructor..9999999');
        return () => {
            console.log('I am destroyed..');
        }
    }, []);
    
    const rowClick = (item) => {
        console.log(item);
        navigate(`/problems/problemsDetails`);
    }
    return (
        <div className="main">
            <Outlet />
            <table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>UserName</th>
                        <th>Website</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {rosterData.map((item, index) => (
                        <tr onClick={() => rowClick(item)} key={index}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td onClick={() => nameClick(item.name)}>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.username}</td>
                            <td>{item.website}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => deleteRecord(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default ProblemsRoster;