import { ErrorMessage, Field, Form, Formik } from "formik";
import { string, object } from "yup";
import { API_URL } from "../constants";
import { useEffect, useState } from "react";
import Userstable from "./Userstable";
import { useDispatch, useSelector } from "react-redux";
import { interviewActions } from "../store/interview.index";
import axios from 'axios';


const formInitialValues = { trackingNumber: "" };

const trackingNumberRegex = /^[A-Za-z\d-]*$/;

const validationSchema = object().shape({
  trackingNumber: string()
    .matches(
      trackingNumberRegex,
      ({ label }) =>
        `${label} may only contain alphanumeric characters and dashes (-)`
    )
    .required()
    .label("Tracking Number"),
});

const UserSearch = () => {

  const dispatch = useDispatch();
  const interviewState = useSelector((state) => state.interviewState);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTrackingNumber(interviewState.trackingNumber)
  }, [interviewState.trackingNumber])

  const invokeApi = () => {
    dispatch(interviewActions.setUsersList([]));
    getData(trackingNumber);
    dispatch(interviewActions.setTrackingNumber(trackingNumber))
  }

  const getData = async (trackNbr) => {
    setIsLoading(true)
    const url = `${API_URL}/api/users?trackingNumber=${trackNbr}`;
    // const resp = await fetch(url);
    // dispatch(interviewActions.setUsersList(await resp.json()))
    try {
      const response = await axios.get(url);
      dispatch(interviewActions.setUsersList(response.data));
    } catch (error) {
      console.log(error);
    }
    
    setIsLoading(false)
  }


  const cust = () => {
    return interviewState.usersList.length > 0 ? < Userstable /> : isLoading ? 'Loading...' : <div>No Records Found...</div>
  }

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value)
  }

  return (
    <div>
      <h1>User Search..</h1>
      
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        validateOnBlur>

        <Form>
          <div className="search-input">
            <Field value={trackingNumber} onChange={handleInputChange} name="trackingNumber" placeholder="Tracking Number" />
            <button className="table-btn mat-h-20" onClick={invokeApi} type="submit">Search</button>
          </div>
          <div className="search-error">
            <ErrorMessage name="trackingNumber" />
          </div>
        </Form>
      </Formik>
      {!!interviewState.trackingNumber ? cust() : <div>Please Search...</div> }
    </div>
  );
};

export default UserSearch;
