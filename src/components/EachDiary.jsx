import React, { useState } from 'react';

function EachDiary({ title, content }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const maxContentLength = 100;

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    return (
        <div className="max-w-md bg-purple-50 rounded-xl shadow-md p-5 mb-6 border border-purple-100 mx-5">
            <div className="flex items-center mb-4">
                <div className="flex flex-col items-center justify-center bg-[#949EDC] text-purple-900 font-bold rounded-full h-14 w-14 shadow-sm">
                    <span className="text-sm">{title.slice(0, 2)}</span>
                    <span className="text-xs uppercase">{title.slice(3)}</span>
                </div>
                <div className="ml-4 flex-1">
                    <p className={`text-purple-900 text-sm font-semibold ${isExpanded ? '' : 'max-h-20 overflow-hidden'}`}>
                        {isExpanded ? content : content.slice(0, maxContentLength) + (content.length > maxContentLength ? '...' : '')}
                    </p>
                    {content.length > maxContentLength && (
                        <button onClick={toggleExpanded} className="text-purple-500 mt-2 text-sm">
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

EachDiary.defaultProps = {
    title: "01 May",
    content: "Default content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
};

export default EachDiary;
