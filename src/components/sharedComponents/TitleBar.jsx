import React from 'react';

const TitleBar = ({ children }) => {
    return (
        <div className="flex items-center mb-6 relative group">
            <div className="absolute left-0 w-1.5 h-full bg-foreground rounded-full transform origin-top transition-transform duration-300 group-hover:scale-y-110"></div>
            <div className="pl-6 w-full">
                {children}
            </div>
        </div>
    );
};

export default TitleBar;