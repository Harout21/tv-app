import React, { useEffect, useRef } from 'react';

const AutoPlayVideo = ({ videoUrl, setStartVideo }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleVideoEnd = () => {
            setStartVideo(false);
        };

        if (videoElement) {
            videoElement.addEventListener('ended', handleVideoEnd);

            videoElement.play().catch((error) => {
                console.error('Autoplay failed:', error);
            });
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('ended', handleVideoEnd);
            }
        };
    }, []);

    return (
        <div>
            <video ref={videoRef} width="100%" height="100%" autoPlay>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default AutoPlayVideo;
