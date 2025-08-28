import React from 'react';
import { Cpu, HardDrive, Activity } from 'lucide-react';

export function ResourceMonitor() {
  const resources = [
    {
      name: 'CPU Usage',
      current: 68,
      limit: 100,
      unit: '%',
      icon: Cpu,
      color: 'blue'
    },
    {
      name: 'Memory Usage', 
      current: 45.2,
      limit: 64,
      unit: 'GB',
      icon: Activity,
      color: 'green'
    },
    {
      name: 'Storage',
      current: 234,
      limit: 500,
      unit: 'GB', 
      icon: HardDrive,
      color: 'purple'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Cluster Resources</h3>
      
      <div className="space-y-4">
        {resources.map((resource) => {
          const percentage = (resource.current / resource.limit) * 100;
          const isHigh = percentage > 80;
          
          return (
            <div key={resource.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <resource.icon className={`w-4 h-4 mr-2 text-${resource.color}-500`} />
                  <span className="text-sm font-medium text-gray-700">{resource.name}</span>
                </div>
                <span className="text-sm text-gray-900">
                  {resource.current}{resource.unit} / {resource.limit}{resource.unit}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    isHigh ? 'bg-red-500' : `bg-${resource.color}-500`
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
              
              <div className="text-xs text-gray-500">
                {Math.round(percentage)}% utilization
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Auto-scaling enabled • Next check in 2 minutes
        </div>
      </div>
    </div>
  );
}