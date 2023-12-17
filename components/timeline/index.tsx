import TimelineItem from "./TimelineItem"
const Timeline = () => {
    return (
      
        <div className="flex justify-center" style={{background: '#FCF7E6'}}>
            <div className=" min-h-screen pt-12">
                <h1 className="text-center mb-12" style={{ color: '#395162', fontSize: '48px', fontStyle: 'italic', fontWeight: 400, lineHeight: 'normal' }}>
                Experiences Timeline
                </h1>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <TimelineItem
                        year="2020"
                        title="First Macintosh computer"
                        description="The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."
                        position="start"
                    />
                    <TimelineItem
                        year="2021"
                        title="First Macintosh computer"
                        description="The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."
                        position="end"
                    />

                </ul>
                
            </div>
        </div>
    )
}

export default Timeline