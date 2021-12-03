// import React, { useRef, useEffect } from 'react';
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables);
// import Chart from 'chart.js/auto';

import VerticalBarChart from './VerticalBarChart';
import HorizontalBarChart from './HorizontalBarChart';
import LineChart from './LineChart';

function App() {
  return (
    <div>
      <VerticalBarChart />
      <HorizontalBarChart />
      <LineChart />
    </div>
  );
} 

export default App;
