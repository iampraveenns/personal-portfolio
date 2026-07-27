import React from 'react'

import Certificate1 from './cards/Certificate-cards/Certificate1'
import Certificate2 from './cards/Certificate-cards/Certificate2'
import Certificate3 from './cards/Certificate-cards/Certificate3'
import Certificate4 from './cards/Certificate-cards/Certificate4'
import Certificate5 from './cards/Certificate-cards/Certificate5'
import Certificate6 from './cards/Certificate-cards/Certificate6'


const Certifcates = () => {
  return (
    <section id='certificates'>
        <h2 className="text-3xl font-bold text-white text-center mb-2 underline decoration-blue-500 underline-offset-8">Certifications</h2>
      <p className="text-white/40 text-center text-sm mt-3 mb-12">Certifcates and Rewards got during the Academics & Co-curricular activities</p>

      <div className='flex flex-wrap align-center justify-center gap-20 m-15'>
        <Certificate1 />
        <Certificate2 />
        <Certificate3 />
        <Certificate4 />
        <Certificate5 />
        <Certificate6 />
      </div>
      
    </section>
  )
}

export default Certifcates