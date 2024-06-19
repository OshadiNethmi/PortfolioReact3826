import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
import React from 'react'
import { motion } from "framer-motion"

const Projects = () => {
    const { myapiData } = useSelector(state => state.root);
    const { projects } = myapiData;
    return (
        <div className='pb-4' id="projects">
            <div className='project'>
                <div className='project-title flex justify-center lg:justify-center lg:mb-5'><SectionTitle title="Projects" /></div>
                {projects.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            className='w-full lg:w-1/4'
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={project.image}
                                width={200}
                                height={200}
                                alt={project.title}
                                className='mb-6 rounded'
                            />
                        </motion.div>
                        <motion.div
                            className='w-full max-w-xl lg:w-3/4'
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                        >
                            <h5 className='mb-2 text-white font-semibold'>{project.title}</h5>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                                >{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
