import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Message';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow src='https://2sj8jt43nx8s3fh0fpaz8wf7-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/picture-413075-f7332f07443c1f22d024ebadfc926932.jpg' title='Tomi Sarjamo' />

            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 information center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StoreFrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='More'/>
        </div>
    )
}

export default Sidebar;
