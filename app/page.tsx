import Image from 'next/image'
import MyInfo from '@/components/hero/MyInfo'
import ProfilePicture from '@/components/hero/ProfilePicture'

export default function Home() {
  return (

    <div className="flex w-9/12 mx-auto w-full h-full pt-32" > 
      <div className="w-1/2 w-full">
        <MyInfo/>
      </div>
      <div className="w-1/2 w-full">
        <ProfilePicture/>
      </div>
    </div>
     
  )
}
