import Image from 'next/image'
const ProfilePicture = () => {
    return (
        <div className="flex flex-col items-center w-full pt-8 pl-6">
            <div className="w-96 h-96">
                <img src="/profile_picture.jpg" alt="Image 4" className="object-cover rounded-full w-full h-full" />
            </div>
            
            <div className="flex justify-between space-x-5 pt-8">
                <Image src="/github-50.png" alt="Image 1" width={50} height={50} />
                <Image src="/gmail-48.png" alt="Image 2" width={45} height={50} />
                <Image src="/linkedin-48.png" alt="Image 3" width={50} height={50} />
            </div>
        </div>
    
    )
    
}

export default ProfilePicture