import Image from 'next/image'
import MyInfo from '@/components/hero/MyInfo'
import ProfilePicture from '@/components/hero/ProfilePicture'
import ArrowIndicator from '@/components/hero/ArrowIndicator'
import Timeline from '@/components/timeline'

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

      {/* Arrow Indicator */}
      <ArrowIndicator/>

      {/* This is the experiences timeline page */}
      <Timeline/>
      
      
    </div>
     
  )
}
