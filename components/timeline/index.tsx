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

    return (
      
        <div className="flex justify-center" style={{background: '#FCF7E6'}}>
            <div className=" min-h-screen pt-12">
                <h1 className="text-center mb-12" style={{ color: '#395162', fontSize: '48px', fontStyle: 'italic', fontWeight: 400, lineHeight: 'normal' }}>
                Experiences Timeline
                </h1>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    
                    <TimelineItem
                        year="2020"
                        title="Tumalon"
                        description="The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."
                        position="start"
                        svg="/TumalonDownload.jpeg"
                    />
                    
                    
                    <TimelineItem
                        year="2021"
                        title="Ceros"
                        description="The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."
                        position="end"
                        svg="/Ceros.png"
                    />
                    <TimelineItem
                        year="2021"
                        title="Grduation and accepted into UC Berkeley"
                        description="The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."
                        position="start"
                        svg="/BerkDownload.png"
                    />
                    <TimelineItem
                        year="2021"
                        title="Superlative Secret Society"
                        description="The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."
                        position="end"
                        svg="/SuperlativeSS.jpeg"
                    />
                    <TimelineItem
                        year="2021"
                        title="Shaq Gives Back"
                        description="The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."
                        position="end"
                        svg="/ShaqGivesBack.avif"
                    />
                    <TimelineItem
                        year="2023"
                        title="Academic Intern"
                        description="The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."
                        position="start"
                        svg="/EECSBerkeley.png"
                    />
                    <TimelineItem
                        year="Current"
                        title="Elavize"
                        description="The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."
                        position="end"
                        svg="/footer copy.png"
                    />

                </ul>
                
            </div>
        </div>
    )
}

export default Timeline