import React from 'react';
import { Server, Database, Network, Shield } from 'lucide-react';

const healthMetrics = [
  {
    name: 'Container Orchestration',
    status: 'Healthy',
    value: '99.9%',
    icon: Server,
    color: 'green'
  },
  {
    name: 'Database Cluster',
    status: 'Healthy',
    value: '99.7%',
    icon: Database,
    color: 'green'
  },
  {
    name: 'Network Traffic',
    status: 'Warning',
    value: '89.2%',
    icon: Network,
    color: 'yellow'
  },
  {
    name: 'Security Systems',
    status: 'Healthy',
    value: '100%',
    icon: Shield,
    color: 'green'
  },
];

export function SystemHealth() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900">System Health Overview</h3>
        <p className="text-sm text-gray-500">Infrastructure and service status monitoring</p>
      </div>

      <div className="space-y-4">
        {healthMetrics.map((metric) => (
          <div key={metric.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${
                metric.color === 'green' ? 'bg-green-100' : 
                metric.color === 'yellow' ? 'bg-yellow-100' : 'bg-red-100'
              }`}>
                <metric.icon className={`w-5 h-5 ${
                  metric.color === 'green' ? 'text-green-600' : 
                  metric.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                }`} />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">{metric.name}</h4>
                <p className={`text-sm ${
                  metric.color === 'green' ? 'text-green-600' : 
                  metric.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {metric.status}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">{metric.value}</p>
              <p className="text-xs text-gray-500">Uptime</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Overall System Health</span>
          <span className="font-medium text-green-600">99.6% - Excellent</span>
        </div>
        <div className="mt-2 bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.6%' }}></div>
        </div>
      </div>
    </div>
  );
}