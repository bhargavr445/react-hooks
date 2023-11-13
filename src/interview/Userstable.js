import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const Userstable = () => {

    const navigate = useNavigate();

    const usersListFromStore = useSelector((state) => state.interviewState.usersList);
    const [results, setResults] = useState([]);

    useEffect(() => {
        setResults([...usersListFromStore])
    }, [usersListFromStore])

    const sortData = (sortType) => {
        let sortedData = [...results];
        switch (sortType) {

            case 'asc':
                sortedData.sort((c, p) => c.first > p.first ? -1 : c.first < p.first ? 1 : 1);
                setResults([...sortedData])
                break;

            case 'desc':
                sortedData.sort((c, p) => c.first < p.first ? -1 : c.first > p.first ? 1 : 1);
                setResults([...sortedData])
                break;

            default:
                setResults([...results])
        }
    }

    const sortButtonsJsx = () => {
        return (<>
            <button onClick={() => sortData('')}>Original Order</button>
            <button onClick={() => sortData('asc')}>Asc</button>
            <button onClick={() => sortData('desc')}>Desc</button>
        </>)
    }

    const tableHeadersJsx = () => {
        return (<>
            <thead>
                <tr key="userslistHeaders">
                    <th>F Name</th>
                    <th>L Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>

            </thead>
        </>)
    }

    const renderTableData = () => {
        return (

            results?.map((result, index) => (
                <tr key={result?.id}>
                    <td>{result?.first}</td>
                    <td>{result?.last}</td>
                    <td>{result?.email}</td>
                    <td>
                        <button onClick={() => onRowClickHandler(result)} className='table-btn'>Details</button>
                    </td>
                </tr>
            ))
        );
    }

    const onRowClickHandler = ({ id }) => {
        navigate(`/interview/${id}`);
    }

    const paginatedListHandler = (dataList) => {
        console.log(dataList);
        setResults(dataList)
    }

    const renderTable = () => {
        return (
            <div className="search-results">
                {sortButtonsJsx()}
                {usersListFromStore.length > 0 ? <div className="search-results">
                    <table>
                        {tableHeadersJsx()}
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </table>
                    <Pagination dataList={usersListFromStore} paginatedListHandler={paginatedListHandler}/>
                </div> : 'No Data...'}
            </div>
        )
    };

    return (
        <div>
            {renderTable()}
        </div>
    )
}

export default Userstable;