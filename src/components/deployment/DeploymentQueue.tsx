import React from 'react';
import { Clock, Play, Pause, X } from 'lucide-react';

const queueItems = [
  {
    id: 'AGT-2025-001239',
    name: 'Email Assistant Agent',
    environment: 'Production',
    priority: 'high',
    estimated_time: '3m 45s',
    position: 1
  },
  {
    id: 'AGT-2025-001240',
    name: 'Inventory Tracker',
    environment: 'Staging',
    priority: 'medium',
    estimated_time: '2m 20s',
    position: 2
  },
  {
    id: 'AGT-2025-001241',
    name: 'News Aggregator',
    environment: 'Development',
    priority: 'low',
    estimated_time: '1m 55s',
    position: 3
  }
];

const priorityColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-blue-100 text-blue-800'
};

export function DeploymentQueue() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Deployment Queue</h3>
        <div className="flex items-center space-x-2">
          <button className="p-1 text-gray-400 hover:text-green-600">
            <Play className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-yellow-600">
            <Pause className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {queueItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-medium mr-3">
                {item.position}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{item.environment}</span>
                  <span>•</span>
                  <Clock className="w-3 h-3" />
                  <span>{item.estimated_time}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                priorityColors[item.priority as keyof typeof priorityColors]
              }`}>
                {item.priority}
              </span>
              <button className="p-1 text-gray-400 hover:text-red-600">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {queueItems.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <Clock className="w-8 h-8 mx-auto mb-2 text-gray-300" />
          <p>No pending deployments</p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
        Queue processing: 1 deployment every ~2.5 minutes
      </div>
    </div>
  );
}