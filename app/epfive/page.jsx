import React from 'react';

const VideoEmbed = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <iframe 
                src="https://streamtape.com/e/JvoeBm02JWCjwb1/" 
                width="800" 
                height="600" 
                allowFullScreen 
                allowTransparency 
                allow="autoplay" 
                scrolling="no" 
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default VideoEmbed;
