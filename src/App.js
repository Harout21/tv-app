import React, {useEffect, useState} from "react";
import './App.css';

import axios from "axios";
import TrendingNow from "./components/home/TrendingNow";
import MovieInfo from "./components/home/MovieInfo";
import MainMenu from "./components/home/MainMenu";
import MainFeatured from "./components/home/MainFeatured";

function App() {
    const [movies, setMovies] = useState([]);
    const [startVideo, setStartVideo] = useState(false);
    const [featuredContent, setFeaturedContent] = useState(null);
    const top50TrendingVideos = movies?.trendingNow?.sort((a, b) => new Date(b.Date) - new Date(a.Date)).slice(0, 50);

    const handleVideoClick = (video) => {
        setFeaturedContent(video);

        sessionStorage.setItem('lastClickedMovieId', JSON.stringify(video));
            setTimeout(() => {
                window.scrollTo(0, 0);
                setStartVideo(true)
            }, 2000);

    };

    const fetchData = async () => {
        try {
            const response = await axios.get('data.json');
            const data = await response.data;
            setMovies(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="App">
            <div className="main">
                <MovieInfo featuredContent={featuredContent} featured={movies.featured}/>
                {
                    !startVideo && <MainMenu/>
                }

                    <TrendingNow trendingNow={top50TrendingVideos} handleVideoClick={handleVideoClick}/>
            </div>
            <MainFeatured
                featured={movies.featured}
                startVideo={startVideo}
                setStartVideo={setStartVideo}
                featuredContent={featuredContent}
            />
        </div>
    );
}

export default App;
