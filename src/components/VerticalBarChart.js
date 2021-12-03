import React, { useRef, useEffect } from 'react';
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables);
import Chart from 'chart.js/auto';

function VerticalBarChart(props) {
  console.log();
  const {data, labels} = props
  const canvasDom = useRef(null);
  useEffect( () => {
    const ctx = canvasDom.current.getContext('2d');
    const VerticalBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            labels: '월별 버스 이용량 통계',
            data: data,
            backgroundColor: 'rgba(255,0,0,0.3)',
          },
          {
            labels: '월별 버스 이용량 통계',
            data: data,
            backgroundColor: 'rgba(0,255,0,0.3)',
          },
          {
            labels: '월별 버스 이용량 통계',
            data: data,
            backgroundColor: 'rgba(0,0,255,0.3)',
          },
        ],
      },
    //   options: {
    //       plugins: {
    //           legend: {
    //               position: "bottom",
    //           },
    //       },
    //   },
    });
    return () => {
        VerticalBarChart.destroy();
    }
  }, []);
//   const style = {
//       backgroundColor: "rgba(255,0,0,0.3)"
//  }
  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
} 

export default VerticalBarChart;
