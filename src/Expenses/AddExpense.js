import { useEffect, useState } from "react";

const AddExpense = (props) => {

    console.log(props);

    useEffect(() => {
        console.log('only me Executed....');
      }, []);

      useEffect(() => {
       const timer = setTimeout(() =>{
            console.log('timeout');
        }, 500)
        console.log('no deps....');
        return () => {
            console.log('dest....');
            console.log(timer);
            clearTimeout(timer);
            console.log(timer);
        }
      })

    const [formvalues, setFormValues] = useState({ title: '', price: null, zonar: '' });

    const handleTitleChange = (event) => {
        setFormValues((prevFormValues) => ({ ...prevFormValues, title: event.target.value }))
    };

    const handlePriceChange = (event) => { 
        setFormValues((prevFormValues) => ({ ...prevFormValues, price: event.target.value }))
    };

    const handleZonarChange = (event) => {
        setFormValues((prevFormValues) => ({ ...prevFormValues, zonar: event.target.value }))
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setFormValues(formvalues);
        props.onAddExpenses(formvalues);
    }

    return (
        <div>
            <from>
                <label>Title</label>
                <input id="title" name="title" onChange={handleTitleChange} />

                <label>Price </label>
                <input id="price" name="price" onChange={handlePriceChange} />

                <label>Zonar</label>
                <input id="zonar" name="zonar" onChange={handleZonarChange} />

                <button type="submit" onClick={onFormSubmit}>Add Expense</button>
            </from>
        </div>
    )

}

export default AddExpense;

