import React from 'react'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Review = (props) => {
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={props.selectedPerson?.image} alt={props.selectedPerson?.name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{props.selectedPerson?.name}</h4>
            <p className='job'>{props.selectedPerson?.job}</p>
            <p className='info'>{props.selectedPerson?.text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={props.onPreviousHandler}><FaChevronLeft /></button>
                <button className='next-btn' onClick={props.onNextHandler}><FaChevronRight /></button>
            </div>
            <button className='random-btn' onClick={props.randomReview}>andom Review</button>
        </article>
    )
}

export default Review;