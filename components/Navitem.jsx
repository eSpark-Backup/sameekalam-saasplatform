import React from 'react';

const NavItem = ({ number, text, image }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <span className="absolute left-4 bottom-2 text-[0.70rem] 2xl:text-sm text-white">
                {number}
            </span>
            {image ? (
                <img 
                    src={image} 
                    alt={text} 
                />
            ) : (
                text && (
                    <h1 className="text-[0.70rem] 2xl:text-sm tracking-wider text-white font-medium uppercase">
                        {text}
                    </h1>
                )
            )}
        </div>
    );
};

export default NavItem;
