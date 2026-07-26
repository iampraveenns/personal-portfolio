import React from 'react'

import AboutCard from './cards/aboutcard'

const About = () => {
    return (
        <section id='about'>
            <h1 className='m-10 text-3xl text-center font-bold underline decoration-blue-500 underline-offset-8'>About Me</h1>

            <div className='flex gap-15 mt-20 mx-auto text-justify items-center w-[90%] lg:w-[60%]'>
                <div className='tranform: scale-[1.4] '>
                    <AboutCard />
                </div>

                <div>
                    <p>
                        I'm Praveen S, a Full Stack Developer currently pursuing my Master of Computer Applications at Rathinam Technical Campus, with a Bachelor's in Information Systems from Kongu Engineering College. I specialize in the MERN stack — building scalable web applications with React.js, Node.js, Express.js, and MongoDB, backed by RESTful API design and clean, component-based architecture.
                        <br /><br />
                        Some of my recent work includes a full-stack notes application with Redis-based rate limiting to protect against API abuse, and a Twitter-style social platform with JWT authentication, refresh token handling, and efficient state management via TanStack Query. I care about the parts of development that often get overlooked — secure auth flows, production CORS configuration, and debugging the kind of subtle deployment issues (like ES module import ordering) that only show up once an app is live.
                        <br /><br />
                        Beyond web development, I've solved 200+ problems on LeetCode across arrays, strings, binary search, and linked lists, placing in the top 30% globally — a habit that keeps my problem-solving sharp for both interviews and real-world debugging. I'm also certified in Computer Networks & Internet Protocols (NPTEL, Top 5% performer) and have foundational experience in GenAI prompt engineering through IBM.
                        <br /><br />
                        I'm always looking to build things that are functional, secure, and genuinely well-crafted — and I'm currently open to full-stack developer roles where I can keep growing.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About