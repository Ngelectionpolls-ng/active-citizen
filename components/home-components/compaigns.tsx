import { courses } from '@/utils/constants'
import React from 'react'

const ListCourses = () => {
  return (
    <section>
       <section className='section-container py-6 flex flex-col '>
        <div className='flex justify-center items-center w-full flex-col'>
            <h4 className='font-bold text-[32px] md:text-[48px] text-black text-center'>Start or Donate to A Compaign</h4>
            </div>
            </section>

      <section className='bg-lightgray pb-12'>
        <div className='section-container'>
        <h5 className='text-center font-bold py-6'>Looking to Support a Specific Course?</h5>

        <div className='flex flex-wrap gap-4 items-center justify-center'>
          {courses.map((course) =>(
            <div className='bg-white p-2 flex rounded-[8px]  items-center' key={course.id}>
              <course.icon />
              <p className='text-black underline font-bold'>{course.course}</p>


            </div>
          ))}

        </div>

        </div>


      </section>
    </section>
  )
}

export default ListCourses