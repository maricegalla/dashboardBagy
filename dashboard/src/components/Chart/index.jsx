import React, { useContext } from 'react';
import { ChartContentContainer } from './style';
import { AreaChart, Area, YAxis, Tooltip, CartesianGrid } from 'recharts';
import CustomTooltip from 'src/components/CustomTooltip';
import Context from 'src/context/context';

const Chart = () => {
  const { chartData } = useContext(Context);

  return (
    <ChartContentContainer>
      <AreaChart
        width={800}
        height={360}
        data={chartData}
        margin={{
          top: 30,
          right: -30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="july" x1="0" y1="0" x2="1" y2="0">
            <stop offset="1.47%" stopColor="#37f3ff" stopOpacity={1} />
            <stop offset="96.74%" stopColor="#3751FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis
          orientation="right"
          tick={{ fontSize: '8px', fill: '#9FA2B4' }}
          strokeWidth={1}
          axisLine={false}
          tickCount={7}
          domain={[0, 60]}
          dy={-10}
          dx={-10}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="Junho"
          stroke="#dfe0eb"
          strokeWidth={2}
          dot={false}
          activeDot={false}
          fill={'#fff'}
        />
        <Area
          type="monotone"
          dataKey="Julho"
          stroke="#fc3c8d"
          activeDot={{ r: 6 }}
          strokeWidth={2}
          dot={false}
          fill="url(#july)"
          fillOpacity={0.1}
        />
        <CartesianGrid vertical={false} />
      </AreaChart>
    </ChartContentContainer>
  );
};

export default Chart;
