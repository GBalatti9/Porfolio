import React, { useState } from 'react';

function StickyNote({ brand, projectName, video, backgroundImage, img }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [zIndex, setZIndex] = useState(0);

    const toggleHover = () => {
        setIsHovered(!isHovered);
    };

    const togglePopUp = () => {
        if (isOpen) {
            setZIndex(0);
        } else {
            setZIndex((prevZIndex) => prevZIndex + 1);
        }
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                className={`w-60 h-40 relative m-10 p-6 rounded-md hover:shadow-[0_2px_5px_rgb(0,0,0)] hover:cursor-pointer overflow-hidden ${isOpen ? 'bg-yellow-200' : ''
                    }`}
                onClick={togglePopUp}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    zIndex: isOpen ? zIndex : 0,
                }}
            >
                <div
                    className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-70`}
                >
                    <p className="px-4 py-2 text-white font-bold">{brand}</p>
                    <h1 className={`text-2xl font-permanent-marker font-bebas-neue text-white w-full h-full absolute top-0 flex items-center justify-center ${isHovered ? 'underline transition duration-300' : ''}`}>
                        VER
                    </h1>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center backdrop-filter backdrop-blur-sm"
                    onClick={togglePopUp}
                    style={{ zIndex: zIndex + 1 }}
                >
                    <div className="h-4/5 bg-yellow-200 w-full relative rounded-lg sm:overflow-hidden sm:w-4/5">
                        <div className="px-8 pt-4">
                            <p className="font-bold">{brand}</p>
                        </div>
                        <div className="image-container w-full h-4/5 my-auto flex flex-col justify-center sm:w-4/5 sm:relative sm:mx-auto">
                            <h2 className="text-2xl pb-5 font-bold text-center">{projectName}</h2>
                            {video ? (
                                <video src={video} className="w-4/5 mx-auto sm:w-3/5 sm:h-3/4 rounded-lg" controls></video>
                            ) : (
                                <img src={img} alt={projectName} className="m-auto h-3/4 sm:h-3/4 rounded-lg" />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default StickyNote;
