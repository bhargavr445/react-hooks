import { useState } from "react";

const ExpensesList = (props) => {

    const [title, setTitle] = useState(props.title);
    const [price, setPrice]= useState(props.price);
    const [zonar, setZonar]= useState(props.zonar);

    const setThisTitle = () => {
        setTitle(`New Title Updated ${Math.random()}`);
    }

    return (
        <div>
           <p>{title}</p> 
           <p>{price}</p>
           <p>{zonar}</p>
           <button onClick={setThisTitle}>Set Name</button>
        </div>
    )
}

export default ExpensesList;