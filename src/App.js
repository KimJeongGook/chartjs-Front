// import React, { useRef, useEffect } from 'react';
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables);
// import Chart from 'chart.js/auto';

import VerticalBarChart from './components/BarChart/VerticalBarChart';
import HorizontalBarChart from './components/BarChart/HorizontalBarChart';
import StackdBarChartwithGroups from './components/BarChart/StackdBarChartWithGroups';
import StackdBarChart from './components/BarChart/StackedBarChart';
import FloatingBarChart from './components/BarChart/FloatingBarChart';
import BarChartBoarderRadius from './components/BarChart/BarChartBoarderRadius';

import LineChart from './components/LineChart';
import Layout from './components/Layout';

function App() {
  const data = [50,40,30,35,40];
  const labels = [2017,2018,2019,2020,2021];
  return (
    <Layout>
      <VerticalBarChart data={data} labels={labels}/>
      <HorizontalBarChart data={data} labels={labels}/>
      <LineChart data={data} labels={labels}/>
      <StackdBarChart data={data} labels={labels}/>
      <StackdBarChartwithGroups data={data} labels={labels}/>
      <FloatingBarChart data={data} labels={labels}/>
      <BarChartBoarderRadius data={data} labels={labels}/>
    </Layout>
  );
} 

export default App;
