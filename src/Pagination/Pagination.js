import React, { useEffect, useState } from 'react'
import AppConstants from '../app.constants';

const Pagination = ({ dataList, paginatedListHandler }) => {

    const pageSize = AppConstants.pageSize;
    const buttonLabels = AppConstants.buttonLabels;

    const [paginatedList, setPaginatedList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [disableFirstPage, setDisableFirstPage] = useState(false);
    const [disableLastPage, setDisableLastPage] = useState(false);
    const [displayRecordsRange, setDisplayRecordsRange] = useState('');

    useEffect(() => {
        console.log(dataList);
        onFirstCLick();
    }, []);

    useEffect(() => {
        sendDataToTableComponent();
    }, [paginatedList]);


    const onFirstCLick = () => {
        const endingNumber = checkIfDataListIsGraterThanRequiredSize(pageSize) ? pageSize : dataList.length;
        setPaginatedRecords(0, endingNumber);
        setDisplayRange(0, endingNumber);
        setPageNumber(1);
        endingNumber === dataList.length ? setDisableLastPage(true) : setDisableLastPage(false);
        setDisableFirstPage(true);
    }

    const onPreviousCLick = () => {
        const beginningNumber = ((pageNumber - 1) * pageSize) - pageSize;
        const endingNumber = (pageNumber - 1) * pageSize
        setPaginatedRecords(beginningNumber, endingNumber);
        setDisplayRange(beginningNumber, endingNumber);
        setPageNumber((previousPage) => previousPage - 1);
        if (beginningNumber === 0) setDisableFirstPage(true)
        setDisableLastPage(false);
    }

    const onNextCLick = () => {
        const beginningNumber = (pageNumber * pageSize);
        const endingNumber = checkIfDataListIsGraterThanRequiredSize(beginningNumber + pageSize) ? (beginningNumber + pageSize) : dataList.length;
        setPaginatedRecords(beginningNumber, endingNumber);
        setDisplayRange(beginningNumber, endingNumber);
        setPageNumber((previousPage) => previousPage + 1);
        // endingNumber === dataList.length ? setDisableLastPage(true) : setDisableFirstPage(false);
        // Update the logic to setDisableLastPage correctly
        setDisableLastPage(!checkIfDataListIsGraterThanRequiredSize(beginningNumber + pageSize));
        setDisableFirstPage(false);
    }

    const onLastCLick = () => {
        const lastPageNumber = Math.ceil(dataList.length / pageSize);
        const beginningNumber = (lastPageNumber - 1) * pageSize;
        const endingNumber = dataList.length;
        setPaginatedRecords(beginningNumber, endingNumber);
        setDisplayRange(beginningNumber, endingNumber);
        setPageNumber(lastPageNumber);
        setDisableFirstPage(false);
        setDisableLastPage(true);
    }

    const setDisplayRange = (beginningNumber, endingNumber) => {
        setDisplayRecordsRange(`${beginningNumber + 1} - ${endingNumber}`);
    }

    const setPaginatedRecords = (beginningNumber, endingNumber) => {
        setPaginatedList(dataList.slice(beginningNumber, endingNumber));
    }

    const checkIfDataListIsGraterThanRequiredSize = (lengthValueToCheck) => {
        return dataList.length > lengthValueToCheck;
    }

    const sendDataToTableComponent = () => {
        paginatedListHandler(paginatedList);
    }

    return (
        <div>
            <p>page Number = {pageNumber}</p>
            <button id='firstButton' className="table-btn mat-h-20" disabled={disableFirstPage} onClick={() => { onFirstCLick() }}>{buttonLabels.first}</button>
            <button id='previousButton' className="table-btn mat-h-20" disabled={disableFirstPage} onClick={() => { onPreviousCLick() }}>{buttonLabels.previous}</button>
            <span class="paging-info">&nbsp;Displaying {displayRecordsRange} of {dataList.length} Records</span>
            <button id='nextButton' className="table-btn mat-h-20" disabled={disableLastPage} onClick={() => { onNextCLick() }}>{buttonLabels.next}</button>
            <button id='lastButton' className="table-btn mat-h-20" disabled={disableLastPage} onClick={() => { onLastCLick() }}>{buttonLabels.last}</button>
        </div>
    )
}

export default Pagination;