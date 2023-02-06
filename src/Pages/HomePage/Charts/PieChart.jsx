import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export function PieChart({credit,debit}) {
    const data = {
        labels: ['Debit', 'Credit'],
        datasets: [
          {
            label: 'Transactions',
            data: [ debit,credit],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(0, 250, 0, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(0, 250, 0, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
  return <Pie data={data} />;
}
