import React, { useEffect, useState } from 'react'
import sampleQuestions from './data';
import AccordionToggle from './Accordion-toggle';
import './Accordion.css'


const Accordion = () => {

  const [questions, setQuestions] = useState([]);

  const setToggleprop = () => {
    setQuestions(sampleQuestions.map((question) => ({ ...question, toggle: false })))
  }

  useEffect(() => {
    setToggleprop();
  }, [])

  const resetToggle = (index) => {
    setQuestions(questions.map((q, i) => ({ ...q, toggle: i === index ? !q.toggle : false })));
  }

  return (
    <div>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          { questions.map((question, i) => <AccordionToggle
            key={i}
            index={i}
            question={question}
            toggle={question.toggle}
            onToggleClick={resetToggle} />) }
        </section>
      </div>
    </div>
  )
}

export default Accordion;