import React, { useContext, useState } from 'react'
import Header from './Header'
import Course from './Course'
import coursesData from '../data/courses-data';
import { UdemyContextProvider, UdemyCartContext } from '../Context/udemy-context';

export default function Overview() {
    const [courses] = useState(coursesData);
    const crtCtx = useContext(UdemyCartContext);
    console.log(crtCtx)

    return (
        <UdemyContextProvider>
            <div className='udemy-container'>
                <Header />
                {courses.length > 0 && courses.map((course) =>
                (<Course key={course.id}
                    course={course}
                />))}
            </div>
        </UdemyContextProvider>
    )
}
