import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';

function Body({ spotify }) {
    const [ { discover_weekly }] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src={discover_weekly?.images[0]?.url} alt="" />
                <div className="body__infotext">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.name}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" className="body__favorite"/>
                    <MoreHorizIcon className="body__moreicons"/>
                </div>

                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;
