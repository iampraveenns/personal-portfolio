import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import ProfileCard from './profilecard'
import Button1 from './buttons/button1'
import Button2 from './buttons/button2'
import MediaButtons from './buttons/mediabtn'

const Home = () => {
    return (
        <section id='home'>
            <div className='flex  gap-10 justify-around space-ar mx-auto items-center m-20 mr-20 p-10 '>
                <div className='m-10 text-left'>
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
                    <p className='m-2 text-justify lg:w-155'>Full Stack Developer with experience in building scalable web applications using modern technologies. Skilled in frontend and backend development, API integration, database management, and problem-solving.</p>
                    <div className='flex gap-5 mt-5 items-center'>
                        <Button1 />
                        <Button2 />
                    </div>
                    <div className='mx-auto'>
                        <MediaButtons />
                    </div>
                </div>
                <div className="sm:scale-130 lg:scale-150">
                    <ProfileCard />
                </div>
            </div>
        </section>
    )
}

export default Home