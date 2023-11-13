import { useFormik } from 'formik'
import React from 'react';

export default function Kids() {

  const initialValues = {
    name: 'Ram',
    email: ''
  }

  const onSubmit = values => {
    console.log(values);
  }
  
  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <label>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name} />

        <label>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email} />

        <button type='submit'>Submit</button>
      
      </form>
    </div>
  )
}
