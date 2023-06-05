import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tour from './Tour';

const ToursOverview = () => {

  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const resp = await fetch('https://course-api.com/react-tours-project');
    setTours(await resp.json());
    setLoading(false);
  }

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  }

  const deriveLoading = () => {
    return loading ? <Loading /> : tours.map((tour, index) => <Tour key={index} tour={tour} removeTour={removeTour} />)
  }

  const noToursLeft = () => {
    return (
      <main>
        <div>No Tours left</div>
        <button className='btn' onClick={fetchData}>Refresh</button>
      </main>
    )
  }


  return (
    <div>
      <main>
        <div className='title'>
          <h2>Our Tours</h2>
          <div className='underline'></div>
          {deriveLoading()}
          {tours.length < 1 && !loading && noToursLeft()}
        </div>

      </main>
    </div>
  )
}

export default ToursOverview;
