import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  position: 'start' | 'end';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, position }) => {
  return (
    <li>
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
        </svg>
      </div>
      <div className={`timeline-${position} ${position === 'start' ? 'text-right' : 'text-left'} mb-10`}>
        <time className="font-mono italic text-blue-500">{year}</time>
        <div className="text-lg font-black text-red-500">{title}</div>
        <div className="text-green-500">{description}</div>
      </div>
      <hr />
    </li>
  );
};

export default TimelineItem;