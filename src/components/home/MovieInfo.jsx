import React from 'react';

const MovieInfo = ({featuredContent, featured}) => {
    const hours = featuredContent ?
        Math.floor(featuredContent?.Duration / 3600) :
        Math.floor(featured?.Duration / 3600);
    const remainingMinutes = featuredContent ?
        Math.floor((featuredContent?.Duration % 3600) / 60) :
        Math.floor((featured?.Duration % 3600) / 60);

    if (!featuredContent) {
        return (
            <div className="texts">
                <p className="navbar-footer">{featured?.Category}</p>
                {
                    featured?.TitleImage &&
                    <img src={require(`../../assets/images/${featured?.TitleImage}`)}/>
                }

                <p>{featured?.ReleaseYear} {featured?.MpaRating} {hours}H {remainingMinutes}m</p>
                <p>{featured?.Description}</p>
                <div className="info-btn">
                    <button className="play-btn">Play</button>
                    <button className="more-info-btn">More info</button>
                </div>
            </div>
        );
    }

    return (
        <div className="texts">
            <p className="navbar-footer">{featuredContent?.Category}</p>
            {
                featuredContent?.TitleImage &&
                <img src={require(`../../assets/images/${featuredContent?.TitleImage}`)}/>
            }

            <p>{featuredContent?.ReleaseYear} {featuredContent?.MpaRating} {hours}H {remainingMinutes}m</p>
            <p>{featuredContent?.Description}</p>
            <div className="info-btn">
                <button className="play-btn">Play</button>
                <button className="more-info-btn">More info</button>
            </div>
        </div>
    );
};

export default MovieInfo;