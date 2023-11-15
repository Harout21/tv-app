import React, {useState} from 'react';

import SearchIcon from "../../assets/icons/Search.png";
import HomeIcon from "../../assets/icons/Home.png";
import VideosIcon from "../../assets/icons/Videos.png";
import MovieIcon from "../../assets/icons/Movie.png";
import MaskIcon from "../../assets/icons/Mask.png";
import HistoryIcon from "../../assets/icons/History.png";

const MainMenu = () => {
    const menuItems = [
        {
            Icon: SearchIcon,
            text: 'Search'
        },
        {
            Icon: HomeIcon,
            text: 'Home'
        },
        {
            Icon: VideosIcon,
            text: 'TV Shows'
        },
        {
            Icon: MovieIcon,
            text: 'Movies'
        },
        {
            Icon: MaskIcon,
            text: 'Genres'
        },
        {
            Icon: HistoryIcon,
            text: 'Watch Later'
        },
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const expandNavbar = () => {
        setIsExpanded(true);
    };

    const minimizeNavbar = () => {
        setIsExpanded(false);
    };

    return (
        <>
            {isExpanded ? (
                <div className="left-navbar-overlay">
                    <div className="expanded-icons" onMouseLeave={minimizeNavbar}>
                        <div className="user-avatar">
                            <div className="user-pic"/>
                            <div className="user-name">Daniel</div>
                        </div>
                        <ul className="items">
                            {menuItems.map(menuItem => (
                                <li key={menuItem.text} className="expanded-menu-item">
                                    <img src={menuItem.Icon} alt={menuItem.text}/>
                                    {menuItem.text}
                                </li>
                            ))}
                        </ul>
                        <ul className="navbar-footer">
                            <li>LANGUAGE</li>
                            <li>GET HELP</li>
                            <li>EXIT</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="icons" onMouseEnter={expandNavbar}>
                    {menuItems.map(menuItem => (
                        <li key={menuItem.text} className="collapsed-menu-item">
                            <img src={menuItem.Icon} alt={menuItem.text}/>
                        </li>
                    ))}
                </div>
            )}

        </>
    );
};

export default MainMenu;