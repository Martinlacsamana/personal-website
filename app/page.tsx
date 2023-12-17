"use client"
import Image from 'next/image'
import MyInfo from '@/components/hero/MyInfo'
import ProfilePicture from '@/components/hero/ProfilePicture'
import ArrowIndicator from '@/components/hero/ArrowIndicator'
import Timeline from '@/components/timeline'
import React, { useRef } from 'react'; // Import useRef

export default function Home() {
  const timelineRef = useRef<HTMLDivElement>(null); // Specify the type of the ref

  const scrollToTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <ArrowIndicator onClick={scrollToTimeline}/> {/* Pass the scrollToTimeline function as a prop to the ArrowIndicator component */}

      {/* This is the experiences timeline page */}
      <div ref={timelineRef}> {/* Add the ref to this div */}
        <Timeline/>
      </div>
      
      
    </div>
     
  )
}
