import { whoWeAre } from '@/utils/constants'
import React from 'react'

const WhoWeAre = () => {
  return (
    <section className='section-container py-8 flex flex-col space-y-8 lg:pt-20 lg:pb-12'>
        <div className='flex justify-center items-center w-full flex-col'>
            <h4 className='font-bold text-[42px] md:text-[60.25px] text-black text-center'>Who <span className='text-brandgreen'>We</span> are</h4>
            <p className='text-brandgray text-center max-w-2xl text-lg'>ARM is a pan-African, membership-based civil society network and resource centre dedicated to promoting transparency and accountability in governance in African democracy</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                whoWeAre.map((who) =>(
                    <div className='bg-lightgray space-y-4 rounded-[20px] items-center justify-center p-4 flex flex-col ' key={who.id} >
                        <h3 className='text-[#056D22] font-bold'>{who.heading}</h3>
                        <p className='text-[#2F2A33] text-lg font-medium'>{who.description}</p>
                    </div>
                ))
            }

        </div>
    </section>
  )
}

export default WhoWeAre