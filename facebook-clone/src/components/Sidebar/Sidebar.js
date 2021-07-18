import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

// Material-UI icons
import { LocalHospital, EmojiFlags, People, Message, Storefront, VideoLibrary, Event, Place, ExpandMore } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow src='https://2sj8jt43nx8s3fh0fpaz8wf7-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/picture-413075-f7332f07443c1f22d024ebadfc926932.jpg' title='Tomi Sarjamo' />
            <SidebarRow Icon={LocalHospital} title='COVID-19 information center'/>
            <SidebarRow Icon={EmojiFlags} title='Pages'/>
            <SidebarRow Icon={People} title='Friends'/>
            <SidebarRow Icon={Message} title='Messenger'/>
            <SidebarRow Icon={Storefront} title='Marketplace'/>
            <SidebarRow Icon={VideoLibrary} title='Videos'/>
            <SidebarRow Icon={Event} title='Events'/>
            <SidebarRow Icon={Place} title='Places'/>
            <SidebarRow Icon={ExpandMore} title='See More'/>
        </div>
    )
}

export default Sidebar;
