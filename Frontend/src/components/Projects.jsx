import React from 'react'
import Project1 from './cards/projects-card/Project1'

const Projects = () => {
    return (
        <section id='projects' className='m-10 p-10'>
            <h2 className="text-3xl font-bold text-white text-center mb-2 underline decoration-blue-500 underline-offset-8">
                Projects
            </h2>
            <p className="text-white/40 text-center text-sm mt-3 mb-12">
                Skills Applied & Gained 
            </p>
            <Project1 />
        </section>
    )
}

export default Projects