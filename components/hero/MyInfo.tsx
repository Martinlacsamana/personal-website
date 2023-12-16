"use client"
import React, { useState } from 'react';

const myInfo = () => {
    const [activeTab, setActiveTab] = useState('About');

    return (
        <div className="w-3/4">
            {/* Header to showcase this is our personal website */}
            <div className="">
                <h1 className="text-custom-yellow font-inter text-4xl italic font-semibold">Hey There,</h1>
                <h1 className="text-custom-yellow font-inter text-4xl italic font-semibold">I'm Martin</h1>
            </div>

            <div className="pt-8">
                <h2 className="text-custom-yellow font-inter text-2xl italic font-light">Software Engineering Intern</h2>
            </div>
            

            {/* Toggle buttons to select between About and Eduction */}
            <div className="pt-6">
                <div className="flex space-x-4 pb-4">
                    
                <h3 
                    className={`text-lg cursor-pointer hover:text-blue-500 ${activeTab === 'About' ? 'font-semibold underline' : ''}`}
                    onClick={() => setActiveTab('About')}>
                    About
                </h3>

                <h3 
                    className={`text-lg cursor-pointer hover:text-blue-500 ${activeTab === 'Education' ? 'font-semibold underline' : ''}`}
                    onClick={() => setActiveTab('Education')}>
                    Education
                </h3>
            </div>
                
            {activeTab === 'About' && (
            <p className="pb-4">
                Martin is him. He's so attractive that it hurts my eyes. He's also duel-professioned. Vibes Engineer by day. Batman by night. Can we just take a moment to enjoy his heroics.
            </p>
            )}

            {/* Decide how you want to style this not sure yet*/}
            {activeTab === 'Education' && (
            <>
                <p>
                    University of California Berkeley
                </p>
                <p>
                    Electrical Engineering and Computer Science
                </p>
            </>
            )}

            </div>

        </div>
    )
}

export default myInfo