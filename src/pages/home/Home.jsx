import React from 'react'
import Charts from '../../components/charts/Charts';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widgets/Widget';
import './Home.scss';
import Table from '../../components/table/Table';
function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type = 'users'/>
            <Widget type = 'orders'/>
            <Widget type = 'earnings'/>
            <Widget type = 'balance'/>

          </div>
          <div className="charts">
             <Featured/>
             <Charts/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default Home
