import Image from 'next/image'
import MyInfo from '@/components/hero/MyInfo'
import ProfilePicture from '@/components/hero/ProfilePicture'

export default function Home() {
  return (
    <div>
      {/* This is the hero page */}
      <div style={{ background: `linear-gradient(180deg, rgba(42, 47, 60, 0.00) 0%, rgba(42, 47, 60, 0.03) 0.01%, #26354d 100%)` }}>

        <div className="flex w-9/12 mx-auto min-h-screen pt-12" > 
          <div className="w-1/2 w-full">
            <MyInfo/>
          </div>
          <div className="w-1/2 w-full">
            <ProfilePicture/>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center absolute bottom-2 left-0 right-0 mx-auto">
        {/* <div className="animate-bounce mb-[-8px]">
          <Image src="/white-down-arrow-png-2.png" alt="Down arrow" width={20} height={20} />
        </div> */}
        <div className="animate-bounce mb-[-16px]">
          <Image src="/white-down-arrow-png-2.png" alt="Down arrow" width={30} height={30} />
        </div>
        {/* <div className="animate-bounce100  mb-[-20px]">
          <Image src="/white-down-arrow-png-2.png" alt="Down arrow" width={40} height={40} />
        </div> */}
        <div className="animate-bounce200">
          <Image src="/white-down-arrow-png-2.png" alt="Down arrow" width={50} height={50} />
        </div>
      </div>

      {/* This is the experiences timeline page */}
      <div className="" style={{background: '#FCF7E6'}}>
        <div className="flex justify-center mx-auto min-h-screen pt-12">
          <h1 className='' style={{ color: '#395162', fontSize: '48px', fontStyle: 'italic', fontWeight: 400, lineHeight: 'normal' }} className="font-inter">
            Experiences Timeline
          </h1>

        </div>
      </div>
    </div>
     
  )
}
