import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jobsData from './data'
import JobDetails from './Job-Details';

const JobsOverview = () => {

    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);


    useEffect(() => {
        getAllJobsApi();
    }, []);

    useEffect(() => {
        setSelectedJob(jobs[0]);
    }, [jobs])

    const getAllJobsApi = () => {
        setJobs(jobsData)
        // axios.get('https://course-api.netlify.app/api/react-tabs-project')
        // .then((resp) => {
        //     console.log(resp);
        // })
        // .catch((error) => {
        //     console.log(error)
        // });
    }
    if (!selectedJob) {
        return (
            <p>Loading...</p>
        )
    }

    const jobSelect = (index) => {
        console.log(index);
        setSelectedJob(jobs[index])
    }

    const renderCompanies = () => {
        return (
            <div className="btn-container">{
                jobs.length > 0 ?
                    <div>{jobs.map((item, index) => (<button
                        key={item.id}
                        onClick={() => jobSelect(index)}
                        className='job-btn'
                      >
                        {item.company}
                      </button>))}</div> :
                    <div>No Companies</div>
            }</div>
        )
    }

    return (
        <section className="section">
            <div className="title">
                <h2>experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                {renderCompanies()}
                <JobDetails selectedJob={selectedJob} />
            </div>
        </section>
    )
}

export default JobsOverview;