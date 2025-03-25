import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className='section-container flex justify-between flex-col md:flex-row pt-12'>
        <div className='w-full'>
            <div className='flex flex-col pb-4 space-y-3 max-w-[900px]'>
                <h2 className='font-black text-center md:text-start leading-[76.8px]  text-[2.5rem] md:text-[52px] lg:text-[3rem]'>What <span className='text-brandgreen'>Meaningful</span> change would <span className='text-brandgreen'>You</span> like to see in your <span className='text-brandgreen'>Community</span>  today?</h2>
                <p className='text-brandgray text-sm max-w-[700px]'>ARM is a community of over a million people who, in moments stolen from their busy lives, take small yet impactful actions on the issues they care about. Together, these efforts create something greater—a movement for a better, fairer Africa for everyone who calls it home.</p>
                <Button className='w-fit font-bold'>
                    See our Impact
                </Button>
            </div>
        </div>
        <div className='w-full flex justify-center items-center'>
<Image
src={'/images/hero-image.png'}
alt='Hero Image'
width={500}
height={500}
/>
        </div>
    </section>
  )
}

export default Hero