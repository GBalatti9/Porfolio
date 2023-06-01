import React from 'react';
import '../css/FullScreenAnimation.css';

const FullscreenAnimation = () => {
  const [isAnimationVisible, setAnimationVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fullscreen-animation ${isAnimationVisible ? 'visible' : 'hidden'}`}>
      {isAnimationVisible && (
        <div className="text-container w-full">
          <h1 className="text font-bebas-neue text-6xl text-white">Salvador Posse</h1>
        </div>
      )}
    </div>
  );
};

export default FullscreenAnimation;
