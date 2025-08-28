import React from 'react';
import { Cloud, MoreVertical, Activity, AlertTriangle, CheckCircle } from 'lucide-react';

const deployments = [
  {
    id: 'AGT-2025-001234',
    name: 'Social Media Monitor',
    environment: 'Production',
    status: 'running',
    health: 'healthy',
    replicas: 3,
    cpu_usage: '45%',
    memory_usage: '62%',
    uptime: '5d 12h',
    requests_per_min: 1250,
    last_updated: '2 minutes ago'
  },
  {
    id: 'AGT-2025-001235',
    name: 'Customer Service Bot',
    environment: 'Staging',
    status: 'deploying',
    health: 'unknown',
    replicas: 1,
    cpu_usage: '-',
    memory_usage: '-',
    uptime: '-',
    requests_per_min: 0,
    last_updated: 'Just now'
  },
  {
    id: 'AGT-2025-001236',
    name: 'Data Analysis Pipeline',
    environment: 'Production',
    status: 'running',
    health: 'healthy',
    replicas: 5,
    cpu_usage: '78%',
    memory_usage: '89%',
    uptime: '2d 8h',
    requests_per_min: 2100,
    last_updated: '1 minute ago'
  },
  {
    id: 'AGT-2025-001237',
    name: 'Content Generator',
    environment: 'Development',
    status: 'error',
    health: 'unhealthy',
    replicas: 0,
    cpu_usage: '-',
    memory_usage: '-',
    uptime: '-',
    requests_per_min: 0,
    last_updated: '15 minutes ago'
  }
];

const statusColors = {
  running: 'bg-green-100 text-green-800',
  deploying: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  stopped: 'bg-gray-100 text-gray-800'
};

const healthIcons = {
  healthy: CheckCircle,
  unhealthy: AlertTriangle,
  unknown: Activity
};

const healthColors = {
  healthy: 'text-green-500',
  unhealthy: 'text-red-500',
  unknown: 'text-yellow-500'
};

export function DeploymentGrid() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Active Deployments</h3>
        <p className="text-sm text-gray-500">Monitor and manage deployed agents across environments</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Agent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Resources
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Performance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Uptime
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {deployments.map((deployment) => {
              const HealthIcon = healthIcons[deployment.health as keyof typeof healthIcons];
              const healthColor = healthColors[deployment.health as keyof typeof healthColors];
              
              return (
                <tr key={deployment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Cloud className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{deployment.name}</div>
                        <div className="text-sm text-gray-500">{deployment.id}</div>
                        <div className="text-xs text-gray-400">{deployment.environment}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <HealthIcon className={`w-4 h-4 mr-2 ${healthColor}`} />
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        statusColors[deployment.status as keyof typeof statusColors]
                      }`}>
                        {deployment.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {deployment.replicas} replica{deployment.replicas !== 1 ? 's' : ''}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>CPU: {deployment.cpu_usage}</div>
                    <div>Memory: {deployment.memory_usage}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>{deployment.requests_per_min} req/min</div>
                    <div className="text-xs text-gray-500">Last: {deployment.last_updated}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {deployment.uptime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}