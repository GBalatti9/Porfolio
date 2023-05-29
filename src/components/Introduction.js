import React, { useEffect, useRef, useState } from 'react';
import videoIntroduction from '../assets/videos/Introduction.mp4';
import '../css/styles.css';

const Introduction = () => {
    const videoRef = useRef(null);
    const [isIntroVisible, setIsIntroVisible] = useState(true);

    useEffect(() => {
        const video = videoRef.current;

        video.addEventListener('ended', () => {
            setIsIntroVisible(false);
        });

        if (isIntroVisible) {
            // Después de 5 segundos, oculta el video suavemente
            const fadeOutTimeout = setTimeout(() => {
                setIsIntroVisible(false);
            }, 3500);

            // Limpia el timeout si el componente se desmonta antes de que se cumpla el tiempo
            return () => clearTimeout(fadeOutTimeout);
        }
    }, [isIntroVisible]);

    return (
        <div
            className={`absolute top-0 left-0 w-full h-full object-cover ${isIntroVisible ? 'visible fade-out-animation' : 'hidden'
                }`}
        >
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                className={`w-full h-full object-cover ${isIntroVisible ? '' : ''
                    }`}
            >
                <source src={videoIntroduction} type="video/mp4" />
            </video>
        </div>
    );
};

export default Introduction;
