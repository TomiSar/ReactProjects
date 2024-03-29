import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { LocalHospital, EmojiFlags, People, Message, Storefront, VideoLibrary, Event, Place, ExpandMore } from '@material-ui/icons';
import { useStateValue } from '../../StateProvider';

function Sidebar() {

    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">

            <SidebarRow src={user.photoURL} title={user.displayName} />
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
