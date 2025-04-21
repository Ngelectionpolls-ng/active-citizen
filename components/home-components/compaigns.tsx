import { courses } from '@/utils/constants';
import React from 'react';
import Link from 'next/link';

const ListCourses = () => {
  return (
    <section>
      <section className='section-container py-6 flex flex-col '>
        <div className='flex justify-center items-center w-full flex-col'>
          <h4 className='font-bold text-[32px] md:text-[48px] text-black text-center'>
            Start or Donate to A Campaign
          </h4>
        </div>
      </section>

      <section className='bg-lightgray pb-12'>
        <div className='section-container'>
          <h5 className='text-center font-bold py-6'>
            Looking to Support a Specific Course?
          </h5>

          <div className='flex flex-wrap gap-4 items-center justify-center'>
            {courses.map((course) => (
              <Link
                href={`/course/${course.slug}`}
                key={course.id}
                className='bg-white p-2 flex gap-2 rounded-[8px] items-center transition hover:bg-gray-100'
              >
                <course.icon />
                <p className='text-black underline font-bold'>{course.course}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ListCourses;
