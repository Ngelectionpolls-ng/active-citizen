import { compaigns } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const LatestCampaigns = () => {
  return (
    <section className='pt-12 pb-8 bg-gradient-to-b from-[#F8F1EA] to-[#FFFFFF]'>
        <div className='flex justify-center flex-col items-center space-y-6'>
            <h3 className='text-base font-bold'>Discover More</h3>
            <h4 className='text-[#2F2A33] text-2xl font-bold'>Latest Compaign</h4>
        </div>

        <div className="section-container flex space-x-4 mt-4 overflow-x-auto p-4">
  {compaigns.map((compaign) => (
    <div key={compaign.id} className="flex rounded-md bg-[#F8F1EA] p-3 min-w-[300px]">
      <Image src={compaign.imagesrc} alt="alt" width={80} height={80} />
      <div className="p-3">
        <p className="font-bold">{compaign.summary}</p>
      </div>
    </div>
  ))}
</div>
<div className='flex justify-center items-center py-8'>
<Button>
    View more latest Campaigns
</Button>
</div>

    </section>
  )
}

export default LatestCampaigns