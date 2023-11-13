import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';

const JobDetails = (props) => {

  const renderDutys = () => {
    return (
      <div>
        {props?.selectedJob?.duties?.length > 0 ?
          <div>{props?.selectedJob?.duties.map((dutie, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{dutie}</p>
              </div>
            )
          })}</div>
          : <div>No Duties...</div>}
      </div>
    )
  }

  return (
    <article className="job-info">
      <h3>{props?.selectedJob?.title}</h3>
      <h4>{props?.selectedJob?.company}</h4>
      <p className="job-date">{props?.selectedJob?.dates}</p>
      {renderDutys()}
    </article>
  )
}

export default JobDetails;