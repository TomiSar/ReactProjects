import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
    const [ { playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" 
            src="https://www.pngkey.com/png/full/788-7885953_we-distribute-playlist-for-spotify-logo-on-black.png" 
            alt="" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <SidebarOption Icon={LibraryAddIcon} title="Create Playlist"/>
            <SidebarOption Icon={FavoriteIcon} title="Liked Songs"/>
            <hr />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name}/>
            ))}
        </div>
    )
}

export default Sidebar;