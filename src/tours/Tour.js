import React, { useState } from 'react';

const Tour = ({tour, removeTour}) => {
    const [showAll, setShowAll] = useState(false);

    const toggleContent = () => {
        console.log('triggered..');
        setShowAll(!showAll)
    }
    
    return (
        <div>
            <article className='single-tour'>
                <img src={tour.image} alt={tour.id} />
                <footer>
                    <div className='tour-info'>
                        <h4>{tour.name}</h4>
                        <h4 className='tour-price'>{tour.price}</h4>
                    </div>
                    <p>
                        {showAll ? tour.info : `${tour.info.substring(0,200)}...`  }
                        <button onClick={toggleContent}>{showAll ? 'show less' : 'read more'  }</button>
                    </p>
                    <button className='delete-btn' onClick={() => removeTour(tour.id)}>Not Interested</button>
                </footer>
            </article>
            </div>
    )
}

export default Tour