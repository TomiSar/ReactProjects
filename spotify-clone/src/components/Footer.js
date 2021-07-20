import React from 'react';
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumlogo" src="https://www.udiscovermusic.com/wp-content/uploads/2017/05/MC-Hammer-Please-Hammer-Dont-Hurt-Em-album-cover-web-optimised-820-820x600.jpg" alt="" />
                <div className="footer__songinfo">
                    <h4>U Can't touch this</h4>
                    <p>MC Hammer</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon className="footer__icon" fontSize="large"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;