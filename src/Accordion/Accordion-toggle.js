import React, { useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';



const AccordionToggle = ({question, index, toggle, onToggleClick}) => {
    
    useEffect(() => {
        console.log(index);
        console.log(question);
    }, [])


    const toggleClick = () => {
        onToggleClick(index)
    }




  return (
      <article className='question'>
          <header>
              <h4>{question.title}</h4>
              <button onClick={toggleClick} className='btn'>{ toggle ? <FaMinus/> : <FaPlus />}</button>
          </header>
          {toggle ? <p>{question.info}</p> : ''}
      </article>
  )
}

export default AccordionToggle;