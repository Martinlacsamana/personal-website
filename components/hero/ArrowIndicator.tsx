"use client"
import Image from 'next/image'
interface ArrowIndicatorProps {
    onClick: () => void; // Specify the type of the onClick prop
  }

const ArrowIndicator: React.FC<ArrowIndicatorProps> = ({ onClick }) => {
    
    return (
        
        <div className="flex flex-col justify-center items-center absolute bottom-2 left-0 right-0 mx-autotransform transition-transform duration-200 hover:scale-110 cursor-pointer" onClick={onClick}>
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
    )
}

export default ArrowIndicator