import { needStart } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const StartCompaign = () => {
  return (
    <div className='bg-bgdown min-h-[50vh] bg-cover bg-no-repeat'>
        <div className='pt-12'>
            <div className='flex  mt-12 md:mt-20 items-center flex-col text-center w-full justify-start space-y-4'>
            <h5 className='text-white text-xl'>Want to make a difference?</h5>
            <h6 className='text-white font-bold text-xl md:text-3xl'>Start a Compaign for..</h6>
            </div>


        </div>
        <div className='section-container place-content-center place-items-center grid grid-cols-1 gap-4 mt-6 pb-8 md:grid-cols-2 lg:grid-cols-3'>
            {needStart.map((need) => (
                <div className=' w-fit bg-[#F8F1EA] rounded-[10px]' key={need.id}>
                    <div className='overflow-hidden'>
                        <Image src={need.imagesrc} alt="alt" width={300} height={300} />
                    </div>
                    <div className='py-5 px-3 flex flex-col space-y-4'>
                        <h4 className='font-bold'>{need.summary}</h4>
                        <Button className='bg-white w-fit text-brandgreen font-bold'>
                            Get Started
                        </Button>
                    </div>

                </div>
            ))}

        </div>
    </div>
  )
}

export default StartCompaign