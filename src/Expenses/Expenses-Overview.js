import { useState } from 'react';
import Expenses from './Expenses';
import ExpensesList from './Expenses-List/ExpensesList';
import AddExpense from './AddExpense';
import { Link } from 'react-router-dom';


const ExpensesOverview = () => {

    const expenses = [
        // { title: 'Combat Games', price: 100, zonar: 'combat' },
        // { title: 'Kid Games', price: 80, zonar: 'combat' },
        // { title: 'Racing Games', price: 110, zonar: 'combat' }
      ];
    
      const [expense, setExpense] = useState(expenses);
    
      const addNewExpense = newExpense => setExpense(prevState => [...prevState, newExpense]);
    
      const empty = () =>  setExpense(() => []);
    
      const showList = () => setExpense(() => [...expenses]);
    
      let showRecords = expense.length < 1 ? <p>No Records Found</p> : 
      expense.map((exp, index) => 
      <ExpensesList key={index} title={exp.title} price={exp.price} zonar={exp.zonar} />)
    
    

    return (
      <div>
        <button onClick={empty}>Empty</button>
        <button onClick={showList}>Show List</button>
        <Expenses title="Exp Comp" />
        <AddExpense onAddExpenses={addNewExpense} />
        <p>Go To <Link to="problems">Problems</Link></p>
        {showRecords}
      </div>
    )


}

export default ExpensesOverview;