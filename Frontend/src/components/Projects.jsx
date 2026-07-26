import React from 'react'
import Project1 from './cards/projects-card/Project1'
import Project2 from './cards/projects-card/Project2'
import Project3 from './cards/projects-card/Project3'
import Project4 from './cards/projects-card/Project4'

const Projects = () => {
    return (
        <section id='projects' className='mx-auto p-10'>
            <h2 className="text-3xl font-bold text-white text-center mb-2 underline decoration-blue-500 underline-offset-8">
                Projects
            </h2>
            <p className="text-white/40 text-center text-sm mt-3 mb-12">
                Skills Applied & Gained
            </p>
            <div className='flex flex-wrap gap-10 justify-center'>
                <Project1 />
                <Project2 />
                <Project3 />
                <Project4 />
            </div>
        </section>
    )
}

export default Projects