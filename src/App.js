// import React, { useRef, useEffect } from 'react';
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables);
// import Chart from 'chart.js/auto';

import VerticalBarChart from './components/VerticalBarChart';
import HorizontalBarChart from './components/HorizontalBarChart';
import LineChart from './components/LineChart';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <VerticalBarChart />
      <HorizontalBarChart />
      <LineChart />
    </Layout>
  );
} 

export default App;
