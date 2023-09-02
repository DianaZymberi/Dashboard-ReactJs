import React from 'react';
import './Widget.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { PersonOutlined } from '@mui/icons-material';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


const Widget = ({ type }) => {

    //temporary
    const amout = 100;
    const diff = 20;
    let data;

    switch(type) {
        case "users":
            data={
                title: "USERS",
                ismoney: false,
                link: "see all users",
                icon: (<PersonOutlined className='icon'/>)
            };
            break;
            case "orders":
                data={
                    title: "ORDERS",
                    ismoney: false,
                    link: "View all orders",
                    icon: (<StarBorderPurple500Icon className='icon' style={{backgroundColor: "lightyellow"}}/>)
                };
                break;
                case "earnings":
                    data={
                        title: "EARNINGS",
                        ismoney: true,
                        link: "View all earnings",
                        icon: (<MonetizationOnIcon className='icon' style={{backgroundColor: '#90eea8'}}/>)
                    };
                    break;
                    case "balance":
                        data={
                            title: "BALANCE",
                            ismoney: true,
                            link: "See the balance",
                            icon: (<AccountBalanceIcon className='icon' style={{backgroundColor: '#ffcccb'}}/>)
                        };
                        break;
            default:
                break;
    }
  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>
            {data.title}
        </span>
        <span className="counter">{data.ismoney && '$'}{amout}</span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage positive"><ArrowUpwardIcon/> {diff}% </div>
        {data.icon}
      </div>
   
    </div>
    
  )
}

export default Widget
