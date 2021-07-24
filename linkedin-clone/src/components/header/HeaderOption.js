import React from 'react';
import './HeaderOption.css'
import { Avatar } from '@material-ui/core';

function HeaderOption({ Icon, avatar, title }) {
    return (
        <div className="headeroption">
            { Icon && <Icon className="headeroption__icon" /> }
            { avatar && <Avatar className="headeroption__icon"  src={avatar}/> }
            <h3 className="headeroption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption;