import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

const Courses = () => {
    const { myapiData } = useSelector(state => state.root);
    const { courses } = myapiData;
    return (
        <div className='course' id="courses">
            <SectionTitle title="Courses" />
            <div className='course-container'>
                {courses.map((courses, index) => {
                    return <div key={index} className='course-format'>
                        <div className='gap-5'>
                            <h2>{courses.title}</h2>
                            <p>{courses.description}</p>
                        </div>
                        <img key={index} src={courses.image} alt="" />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Courses