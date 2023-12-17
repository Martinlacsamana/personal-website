import Image from 'next/image'
const ProfilePicture = () => {
    return (
        <div className="flex flex-col items-center w-full pt-8 pl-6">
            <div className="w-96 h-96">
                <img src="/profile_picture.jpg" alt="Image 4" className="object-cover rounded-full w-full h-full" />
            </div>
            
            <div className="flex justify-between space-x-5 pt-8">
                <a href="https://github.com/Martinlacsamana" target="_blank" rel="noopener noreferrer">
                    <Image src="/github-50.png" alt="Github" width={50} height={50} />
                </a>
                <a href="mailto:martinlacsamana@berkeley.edu">
                    <Image src="/gmail-48.png" alt="Gmail" width={45} height={50} />
                </a>
                <a href="https://www.linkedin.com/in/martin-lacsamana-18a712168" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin-48.png" alt="LinkedIn" width={50} height={50} />
                </a>
            </div>
        </div>
    
    )
    
}

export default ProfilePicture