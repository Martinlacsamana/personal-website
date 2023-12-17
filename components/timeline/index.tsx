import React, { useEffect } from 'react';
import TimelineItem from "./TimelineItem"
import ScrollReveal from 'scrollreveal'

const Timeline = () => {
    useEffect(() => {
        ScrollReveal().reveal('.timeline-item', { 
            delay: 300,
            distance: '50px',
            origin: 'bottom',
            reset: false,
            easing: 'ease-in-out',
            interval: 200
        });
    }, []);
``
    return (
      
        <div className="flex justify-center" style={{background: '#FCF7E6'}}>
            <div className=" min-h-screen pt-12">
                <h1 className="text-center mb-12" style={{ color: '#395162', fontSize: '48px', fontStyle: 'italic', fontWeight: 400, lineHeight: 'normal' }}>
                Timeline
                </h1>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    
                    <TimelineItem
                        year="2020"
                        title="Tumalon"
                        description=" A brand to spread awareness on the harmful effects of CO2 emissions in the atmosphere."
                        position="start"
                        svg="/TumalonDownload.jpeg"
                    />
                    
                    
                    <TimelineItem
                        year="2021"
                        title="Ceros"
                        description=" Internship doing the xyz"
                        position="end"
                        svg="/Ceros.png"
                    />
                    <TimelineItem
                        year="2021"
                        title="Grduation and accepted into UC Berkeley"
                        description="Got into Berkeley which I was extremely excited for"
                        position="start"
                        svg="/BerkDownload.png"
                    />
                    {/* Got into Berkeley -> can put fireworks effect here. */}
                    <TimelineItem
                        year="2021"
                        title="Superlative Secret Society"
                        description="Did the thing"
                        position="end"
                        svg="/SuperlativeSS.jpeg"
                    />
                    <TimelineItem
                        year="2021"
                        title="Shaq Gives Back"
                        description="Did another thing"
                        position="end"
                        svg="/ShaqGivesBack.avif"
                    />
                    <TimelineItem
                        year="2023"
                        title="Academic Intern"
                        description="Did another thing we are doing"
                        position="start"
                        svg="/EECSBerkeley.png"
                    />
                    <TimelineItem
                        year="Current"
                        title="Elavize"
                        description="Elavize is the shit it's pretty damn fun tbh"
                        position="end"
                        svg="/footer copy.png"
                    />

                </ul>
                
            </div>
        </div>
    )
}

export default Timeline