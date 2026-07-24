import React from 'react'

import AboutCard from './cards/aboutcard'

const About = () => {
    return (
        <section id='about'>
            <h1 className='m-10 text-3xl text-center font-bold'>About Me</h1>

            <div className='flex gap-7 mt-10 mx-auto text-justify items-center w-[90%] lg:w-[60%]'>
                <div className='tranform: scale-[1.2]'>
                    <AboutCard />
                </div>

                <p>
                    Hey, I'm Praveen — a Full Stack Developer who genuinely enjoys building things that work in production, not just in development.

                    <br /><br />

                    I work with the MERN stack (React, Node.js, Express, MongoDB) and have hands-on experience deploying applications across Netlify and Render, integrating Redis-based rate limiting, configuring CORS policies, and debugging the kind of errors that only show up in production.
                    <br /><br />
                    I've solved 200+ DSA problems on LeetCode and hold an NPTEL Top 5% certification in Computer Networks — because I believe good engineers understand both the code and the systems underneath it.
                    <br /><br />
                    Currently pursuing MCA with an 8.44 CGPA and actively looking for internship or fresher roles at product-focused companies.
                </p>
            </div>
        </section>
    )
}

export default About