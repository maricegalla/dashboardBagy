import React, { useEffect, useState } from 'react';
import { ChartContentContainer } from './style';
import { LineChart, Line, YAxis, Tooltip, CartesianGrid } from 'recharts';
import CustomTooltip from 'src/components/CustomTooltip';
import api from 'src/services/api';

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  const getData = async () => {
    const data = await api.get('/chartData');
    const allData = data.data;
    setChartData(allData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ChartContentContainer>
      <LineChart
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
