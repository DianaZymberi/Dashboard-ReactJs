import React from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ListOutlined, ChatBubble } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" name="search" placeholder='search...' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
            <NightlightRoundIcon className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon'/>
          </div>
          <div className="item">
            <ChatBubble className='icon'/>
          </div>
          <div className="item">
            <ListOutlined className='icon'/>
          </div>
          <div className="item">
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="image" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
