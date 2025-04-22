import { ourInitiative, whoWeAre } from '@/utils/constants'
import React from 'react'

const OurInitiatives = () => {
  return (
    <section
    id='our-initiative'
    className='section-container py-8 flex flex-col space-y-8 lg:pt-20 lg:pb-12'>
        <div className='flex justify-center items-center w-full flex-col'>
            <h4 className='font-bold text-[42px] md:text-[60.25px] text-black text-center'>Our Initiative</h4>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-content-center place-items-center'>
            {
                ourInitiative.map((who) =>(
                    <div className='card-styling ' key={who.id} >
                        <h3 className='text-[#056D22] text-center font-bold'>{who.heading}</h3>
                        <p className='text-[#2F2A33] text-center text-lg font-medium'>{who.description}</p>
                    </div>
                ))
            }

        </div>
    </section>
  )
}

export default OurInitiatives