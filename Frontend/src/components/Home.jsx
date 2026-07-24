import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import ProfileCard from './profilecard'
import Button1 from './buttons/button1'
import Button2 from './buttons/button2'
import MediaButtons from './buttons/mediabtn'

const Home = () => {
    return (
        <section id='home'>
            <div className='flex flex-row gap-10 justify-center mx-auto items-center mt-30 p-10 w-[90%] lg:w-[50%]'>
                <div className='m-10 '>
                    <p className='font-bold pl-1 m-2'>Hi, i'm</p>
                    <h1 className='text-5xl font-bold m-2'>Praveen S</h1>
                    <p className='m-2 text-xl'>
                        <Typewriter
                            words={[
                                'Aspiring Full Stack Developer',
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </p>
                    <p className='m-2 text-justify '>Full Stack Developer with experience in building scalable web applications using modern technologies. Skilled in frontend and backend development, API integration, database management, and problem-solving.</p>
                    <div className='flex gap-5 mt-5 items-center'>
                        <Button1 />
                        <Button2 />
                    </div>
                    <div className='mt-5 mr-20'>
                        <MediaButtons />
                    </div>
                </div>
                <div className="scale-130">
                    <ProfileCard />
                </div>
            </div>
        </section>
    )
}

export default Home