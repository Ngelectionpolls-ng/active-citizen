import { herostats } from '@/utils/constants'
import React from 'react'

const StatsContainer = () => {
  return (
    <section className='shadow-lg rounded-md flex md:flex-row flex-col gap-4 section-container p-4 justify-between bg-white'>
        {herostats.map((stat) => (
            <div key={stat.id} className='flex gap-4 items-center'>
                <div className='rounded-full p-2 w-fit  border-[#F8F1EA] border-[4px]'>
                    <stat.icon className='size-16' />
                </div>
                <div>
                    <h3 className='font-bold text-[#2F2A33]'>{stat.stat}</h3>
                    <p className='text-brandgray text-sm'>{stat.name}</p>
                </div>
            </div>
        ))}
    </section>
  )
}

export default StatsContainer