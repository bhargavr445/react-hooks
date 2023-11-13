import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination';

const PostsTable = ({ tableData }) => {

    const [paginatedList, setPaginatedList] = useState([]);

    useEffect(() => {
        // console.log(tableData);
    }, []);

    const constFormatData = (date) => {
        return moment(date).format('MM-DD-YYYY')
    }

    const renderTableHeader = () => {
        return (
            <thead>
                <tr key="posts_header">
                    <th id='th_index'>Index</th>
                    <th id='th_company'>Company</th>
                    <th id='th_title'>Title</th>
                    <th id='th_dates'>Dates</th>
                </tr>
            </thead>
        )
    }

    const renderTableData = () => {
        return (
            paginatedList.map((row, index) => (
                <tbody>
                    <tr id={`${row.company}_row`} key={`${row.company}_key`}>
                        <td id={`${row.company}_index`}>{index + 1}</td>
                        <td id={`${row.company}_company`}>{row.company}</td>
                        <td id={`${row.company}_title`}>{row.title}</td>
                        <td id={`${row.company}_dates`}>{row.dates}</td>
                    </tr>
                </tbody>
            ))
        )
    }

    const paginatedListHandler = (dataList) => {
        setPaginatedList(dataList)
    }

    return (
        <div className="search-results">
            <table id='table-data'>
                {renderTableHeader()}
                {renderTableData()}
            </table>
            {tableData.length > 0 ? <Pagination dataList={tableData} paginatedListHandler={paginatedListHandler} /> : <div>No Records found...</div>}
        </div>
    )
}

export default PostsTable;