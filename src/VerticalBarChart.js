import React, { useRef, useEffect } from 'react';
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables);
import Chart from 'chart.js/auto';

function VerticalBarChart() {
  console.log();
  const canvasDom = useRef(null);
  useEffect( () => {
    const ctx = canvasDom.current.getContext('2d');
    const VerticalBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            data: [1, 5]
          }
        ]
      }
    })
    return () => {
        VerticalBarChart.destroy();
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
} 

export default VerticalBarChart;
