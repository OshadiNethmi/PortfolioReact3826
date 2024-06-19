import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Experiences = () => {
    const { myapiData } = useSelector(state => state.root);
    const { experiences } = myapiData;
    return (
        <div className='experiences' id='experiences'>
            <div className='experience-title'>
                <SectionTitle title="Experiences" />
            </div>
            <div className='exp-container'>
                {experiences.map((experience, index) => {
                    return <div key={index} className='exp-format'>
                        <h3>Period: {experience.period}</h3>
                        <h2>Role: {experience.title}</h2>
                        <h1>Company: {experience.company}</h1>
                        <p>{experience.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Experiences