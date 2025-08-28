import React from 'react';
import { TrendingUp, TrendingDown, Bot, Cloud, Activity, AlertTriangle } from 'lucide-react';

const stats = [
  {
    name: 'Active Agents',
    value: '8,247',
    change: '+12%',
    changeType: 'increase',
    icon: Bot,
    description: 'Currently deployed agents'
  },
  {
    name: 'Total Deployments',
    value: '94,573',
    change: '+8%',
    changeType: 'increase',
    icon: Cloud,
    description: 'Successful deployments this month'
  },
  {
    name: 'Success Rate',
    value: '98.7%',
    change: '+0.3%',
    changeType: 'increase',
    icon: Activity,
    description: 'Agent goal achievement rate'
  },
  {
    name: 'Failed Agents',
    value: '127',
    change: '-15%',
    changeType: 'decrease',
    icon: AlertTriangle,
    description: 'Agents requiring intervention'
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div key={item.name} className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
          <dt>
            <div className="absolute bg-blue-500 rounded-md p-3">
              <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
          </dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {item.changeType === 'increase' ? (
                <TrendingUp className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="self-center flex-shrink-0 h-4 w-4 text-red-500" />
              )}
              <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
              {item.change}
            </p>
            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <span className="text-gray-600">{item.description}</span>
              </div>
            </div>
          </dd>
        </div>
      ))}
    </div>
  );
}