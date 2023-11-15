import React from 'react';
import AutoPlayVideo from "./AutoPlayVideo";

const MainFeatured = ({
    featured,
    startVideo,
    setStartVideo,
    featuredContent
}) => {

    return (
        <div className="display">
            {
                startVideo ?
                    <AutoPlayVideo
                        setStartVideo={setStartVideo}
                        videoUrl={featuredContent?.VideoUrl}
                    /> :
                    <div>
                        {
                            featured &&
                            <img
                                src={require(`../../assets/images/${featured.CoverImage}`)}
                                alt="Video Cover"
                                className="cover-image"
                            />
                        }
                    </div>
            }
        </div>
    );
};

export default MainFeatured;