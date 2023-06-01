import React, { useState, useEffect } from 'react';

function StickyNote({ brand, projectName, videos, backgroundImage, photos, projectDescription }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [zIndex, setZIndex] = useState(0);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % (photos?.length || 0));
    };

    const handleNextVideo = (event) => {
        event.stopPropagation();
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % (videos?.length || 0));
    };

    useEffect(() => {
        let intervalId;
        if (isOpen) {
            intervalId = setInterval(handleNextPhoto, 5000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isOpen, photos]);

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
                    zIndex: isOpen ? zIndex + 10 : 0, // Incrementa el z-index en 10 cuando está abierto
                }}
            ></div>

            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center backdrop-filter backdrop-blur-sm"
                    onClick={togglePopUp}
                    style={{ zIndex: zIndex + 11 }}
                >
                    {/* Incrementa el z-index en 11 cuando está abierto */}
                    <div className="h-4/5 bg-yellow-200 w-screen relative rounded-lg sm:overflow-hidden sm:w-4/5 shadow-lg flex flex-col">
                        <div className="image-container w-full h-4/5 my-auto flex items-center flex-col justify-center sm:w-4/5 sm:relative sm:mx-auto">
                            <h2 className="text-2xl font-bold text-center pb-2">{projectName}</h2>
                            <p className="text-center pb-4 w-4/5">{projectDescription}</p>
                            {videos && videos.length > 0 ? (
                                <div className="relative w-full h-3/4 sm:w-3/5 sm:h-3/4 rounded-lg overflow-hidden">
                                    <video src={videos[currentVideoIndex]} className="w-full h-full object-cover" controls></video>
                                    {videos.length > 1 && (
                                        <button
                                            className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-md shadow-md"
                                            onClick={handleNextVideo}
                                        >
                                            Siguiente
                                        </button>
                                    )}
                                </div>
                            ) : (
                                photos && photos.length > 0 && (
                                    <img src={photos[currentPhotoIndex]} alt={projectName} className="m-auto h-3/4 sm:h-3/4 rounded-lg" />
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default StickyNote;
