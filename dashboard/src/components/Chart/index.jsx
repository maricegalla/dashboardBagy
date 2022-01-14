import React from 'react';
import { ChartContentContainer } from './style';
import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import CustomTooltip from 'src/components/CustomTooltip'

const data = [
  {
    day: '1',
    Junho: 32,
    Julho: 15,
  },
  {
    day: '2',
    Junho: 34,
    Julho: 22,
  },
  {
    day: '3',
    Junho: 31,
    Julho: 26,
  },
  {
    day: '4',
    Junho: 28,
    Julho: 28,
  },
  {
    day: '5',
    Junho: 26,
    Julho: 29,
  },
  {
    day: '6',
    Junho: 25,
    Julho: 28,
  },
  {
    day: '7',
    Junho: 26,
    Julho: 32,
  },
  {
    day: '8',
    Junho: 31,
    Julho: 44,
  },
  {
    day: '9',
    Junho: 34,
    Julho: 51,
  },
  {
    day: '10',
    Junho: 35,
    Julho: 41,
  },
  {
    day: '11',
    Junho: 31,
    Julho: 26,
  },
  {
    day: '12',
    Junho: 25,
    Julho: 18,
  },
  {
    day: '13',
    Junho: 20,
    Julho: 20,
  },
  {
    day: '14',
    Junho: 18,
    Julho: 26,
  },
  {
    day: '15',
    Junho: 23,
    Julho: 35,
  },
  {
    day: '16',
    Junho: 36,
    Julho: 42,
  },
  {
    day: '17',
    Junho: 42,
    Julho: 46,
  },
  {
    day: '18',
    Junho: 34,
    Julho: 47,
  },
  {
    day: '19',
    Junho: 29,
    Julho: 45,
  },
  {
    day: '20',
    Junho: 36,
    Julho: 38,
  },
];

const Chart = () => {
  return (
    <ChartContentContainer>
      <LineChart width={800} height={360} data={data} margin={{
            top: 30,
            right: -30,
            left: 20,
            bottom: 5,
          }}>
        <YAxis
          orientation="right"
          tick={{ fontSize: '8px', fill: '#9FA2B4'}}
          strokeWidth={1}
          axisLine={false}
          tickCount={7}
          domain={[0, 60]}
          dy={-10}
          dx={-10}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="Julho"
          stroke="#fc3c8d"
          activeDot={{ r: 6 }}
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Junho"
          stroke="#dfe0eb"
          strokeWidth={2}
          dot={false}
          activeDot={false}
        />
        <CartesianGrid vertical={false} />
      </LineChart>
    </ChartContentContainer>
  );
};

export default Chart;
