import { MoreVertOutlined } from '@mui/icons-material';
import React from 'react';
import './featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowDown } from '@mui/icons-material';
import { KeyboardArrowUp } from '@mui/icons-material';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>  Total Revenue </h1>
        <MoreVertOutlined fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} /> 
        </div>
        <p className='title'> Total sales made today</p>
        <p className="amount">$500</p>
        <p className="desc">Last transactions may not be included, Last transactions may not be included</p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="result negative">
                    <KeyboardArrowDown fontSize='small'/>
                <div className="resultAmount">$20k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="result positive">
                    <KeyboardArrowUp fontSize='small'/>
                <div className="resultAmount">$20k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="result positive">
                    <KeyboardArrowUp fontSize='small'/>
                <div className="resultAmount">$20k</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
