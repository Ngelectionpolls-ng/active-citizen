import { whoWeAre } from '@/utils/constants'
import React from 'react'

const WhoWeAre = () => {
  return (
    <section className='section-container py-8 flex flex-col space-y-8 lg:pt-20 lg:pb-12'>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center place-items-center'>
  {
    whoWeAre.map((who) => (
      <div className='card-styling' key={who.id}>
        <h3 className='text-[#056D22] font-bold'>{who.heading}</h3>
        {
          Array.isArray(who.description) ? (
            <ul className='text-[#2F2A33] text-center text-lg font-medium '>
              {who.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className='text-[#2F2A33] text-center text-lg font-medium'>{who.description}</p>
          )
        }
      </div>
    ))
  }
</div>

    </section>
  )
}

export default WhoWeAre