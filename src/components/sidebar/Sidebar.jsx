import React from 'react';
import './Sidebar.scss';
import Dashboard from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className='logo'> Admin Dashboard </span>
        </div>
        <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
            <Dashboard className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
            <GroupIcon className='icon'/>
                <span>Users</span>
            </li>
            <li>
            <ProductionQuantityLimitsIcon className='icon'/>
                <span>Products</span>
            </li>
            <li>
            <StarBorderPurple500Icon className='icon'/>
                <span>Orders</span>
            </li>
            <li>
            <LocalShippingIcon className='icon'/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
            <QueryStatsIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
            <NotificationsIcon className='icon'/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
            <SystemSecurityUpdateGoodIcon className='icon'/>
                <span>System Health</span>
            </li>
            <li>
            <PsychologyAltIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
            <SettingsIcon className='icon'/>
                <span>Settigns</span>
            </li>
            <p className="title">USER</p>
            <li>
            <AccountBoxIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
            <LogoutIcon className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
              </div>
    </div>
  )
}

export default Sidebar
