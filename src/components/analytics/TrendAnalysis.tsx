import React from 'react';
import { BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function TrendAnalysis() {
  const trends = [
    {
      metric: 'Agent Creation Rate',
      current: 127,
      previous: 98,
      unit: 'agents/week',
      change: 29.6
    },
    {
      metric: 'Average Goal Achievement',
      current: 94.2,
      previous: 91.8,
      unit: '%',
      change: 2.6
    },
    {
      metric: 'Resource Efficiency', 
      current: 87.5,
      previous: 83.1,
      unit: '%',
      change: 5.3
    },
    {
      metric: 'Failed Deployments',
      current: 2.3,
      previous: 3.8,
      unit: '%',
      change: -39.5
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center mb-6">
        <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">Trend Analysis</h3>
      </div>
      
      <div className="space-y-4">
        {trends.map((trend) => {
          const isPositive = trend.change > 0;
          const isGoodChange = trend.metric === 'Failed Deployments' ? !isPositive : isPositive;
          
          return (
            <div key={trend.metric} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="text-sm font-medium text-gray-900">{trend.metric}</h4>
                <div className="flex items-baseline space-x-2">
                  <span className="text-lg font-semibold text-gray-900">
                    {trend.current}{trend.unit}
                  </span>
                  <span className="text-xs text-gray-500">
                    from {trend.previous}{trend.unit}
                  </span>
                </div>
              </div>
              <div className={`flex items-center ${
                isGoodChange ? 'text-green-600' : 'text-red-600'
              }`}>
                {isPositive ? (
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                )}
                <span className="text-sm font-medium">
                  {Math.abs(trend.change).toFixed(1)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-sm font-medium text-blue-800 mb-2">Trend Summary</h4>
        <p className="text-sm text-blue-700">
          System performance is trending upward with 29% increase in agent creation and significant reduction in deployment failures.
        </p>
      </div>
    </div>
  );
}