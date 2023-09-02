import React from 'react';
import './charts.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Week 1',
    total: 1000
  },
  {
    name: 'Week 2',
    total: 4000
  },
  {
    name: 'Week 2',
    total: 2000
  },
  {
    name: 'Week 3',
    total: 4000
  },
  {
    name: 'Week 4',
    total: 1000
  },{
    name: 'Week 5',
    total: 2500
  },{
    name: 'Week 6',
    total: 3000
  },
  
];

const Charts = () => {
  return (
    <div className='chart'>
      <div className="title">Last Months Revenue</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray' />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
</ResponsiveContainer>
    </div>
  )
}

export default Charts
