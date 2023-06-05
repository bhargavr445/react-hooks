import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { problemsActions } from '../../store/problems.index';


const ReferralsOerview = () => {

    const dispatch = useDispatch();
       const selector = useSelector((state) => {
       
        return state.problemsState
    });

    const [titles, setTitles] = useState([]);
    const [isFormValid, setIsFormvalid] = useState(true);
    const [formValues, setFormValues] = useState({
        title: { value: '', isValid: true, errors: [] },
        price: { value: null, isValid: false, errors: [] }
    });

    /**
     * constructor and Destructor
     */
    useEffect(() => {
        getDropDownValues();
    }, []);

    // useEffect(() => {
    //     console.log('only price..', formValues);
    // }, [formValues.price])

    // useEffect(() => {
    //     console.log('only title..', formValues);
    // }, [formValues.title])

    useEffect(() => {
        setIsFormvalid(checkIfFormIsValid());
    }, [formValues]);

    useEffect(() => {
        console.log(isFormValid);
    }, [isFormValid]);

    const checkIfFormIsValid = () => {
        return Object.keys(formValues).every((key) => formValues[key].isValid)
    }

    const checkIfValueIsLessThan100 = (value) => {
        return value && value <= 100 ? true : false;
    }

    const getDropDownValues = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = await response.data;
        setTitles(() => [...data.map((emp) => emp.title)])
    }

    const onSelectionChangeDp = (event) => {
        setFormValues((previousFormvalues) => ({
            ...previousFormvalues,
            title: {
                ...previousFormvalues.title,
                value: event.target.value
            }
        }));
    }

    const handlePriceChange = (event) => {
        const maxValid = checkIfValueIsLessThan100(event.target.value)
        setFormValues((previousFormvalues) => ({
            ...previousFormvalues,
            price: {
                ...previousFormvalues.price,
                value: event.target.value,
                isValid: maxValid,
                errors: [{ max: !maxValid }]
            }
        }));
    }

    const changeModuleNameHandler = () => {
        console.log('changeModuleNameHandler triggred..');
        dispatch(problemsActions.incrementBy('Referral MODULE'));
    }
 
    return (
        <div>
            {selector.moduleName}ReferralsOerview{isFormValid.toString()}
            <input id="price" name="price" onChange={handlePriceChange} />
            <button onClick={changeModuleNameHandler}>Change Module Name</button>
            <select onChange={onSelectionChangeDp}>
                <option value="" key="">Select</option>
                {titles.length > 0 ? titles.map((title, index) => <option value={title} key={title + index}>{title}</option>) : []}
            </select>
            <button disabled={!isFormValid}>Search</button>
            <details>
                <summary>Hello</summary>
                <p>sdgvdsfbfgb</p>

            </details>
        </div>
    )
}

export default ReferralsOerview;