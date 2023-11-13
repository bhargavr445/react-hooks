import React, { useEffect, useState } from 'react';
import people from './data';
import Review from './Review';

const ReviewsOverview = () => {

    const [index, setIndex] = useState(0);
    let selectedPerson = people[index];

    const onNextHandler = () => {
        if (index + 1 < people.length) {
            setIndex(index + 1);

        }
    }

    const onPreviousHandler = () => {
        if (index > 0 && index < people.length) {
            setIndex(index - 1);
        }
    }

    const randomReview = () => {
        const randomIndex = Math.floor(Math.random() * people.length);
        setIndex(randomIndex);
    }

    useEffect(() => {
        if(index) {
            selectedPerson = people[index];
            console.log('not constructor');
        }
        
    }, [index]);

    useEffect(
        ()=> {

            console.log('now i am constructor...')
        }, 
        []
        )


    return (
        <div>
            <main>
                <section className='container'>
                    <div className='title'>
                        <h2>our reviews</h2>
                        <div className='underline'></div>
                    </div>
                    <Review
                        selectedPerson={selectedPerson}
                        randomReview={randomReview}
                        onPreviousHandler={onPreviousHandler}
                        onNextHandler={onNextHandler}
                    />
                </section>
            </main>
        </div>
    )
}

export default ReviewsOverview;