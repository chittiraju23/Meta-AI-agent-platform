import React from 'react';
import { TrendingUp, Clock, Target, Zap } from 'lucide-react';

export function PerformanceMetrics() {
  const metrics = [
    {
      name: 'Success Rate',
      value: '98.7%',
      change: '+2.3%',
      trend: 'up',
      icon: Target
    },
    {
      name: 'Avg Response Time',
      value: '1.2s',
      change: '-0.3s',
      trend: 'down',
      icon: Clock
    },
    {
      name: 'Throughput',
      value: '45.2k',
      change: '+12%',
      trend: 'up',
      icon: Zap
    },
    {
      name: 'Error Rate',
      value: '1.3%',
      change: '-0.7%',
      trend: 'down',
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Performance Metrics</h3>
      
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <metric.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{metric.name}</h4>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            </div>
            <div className={`text-right ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <div className="text-sm font-medium">{metric.change}</div>
              <div className="text-xs">vs last period</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-sm font-medium text-blue-800 mb-1">Performance Insight</h4>
        <p className="text-sm text-blue-700">
          Agent performance has improved 12% this week. Consider deploying optimization updates to 3 underperforming agents.
        </p>
      </div>
    </div>
  );
}