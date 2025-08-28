import React from 'react';
import { CheckCircle, AlertCircle, Clock, XCircle } from 'lucide-react';

const deployments = [
  {
    id: 'AGT-2025-001234',
    name: 'Social Media Monitor',
    status: 'deployed',
    environment: 'Production',
    created: '2 hours ago',
    success_rate: 98.5
  },
  {
    id: 'AGT-2025-001235', 
    name: 'Customer Service Bot',
    status: 'deploying',
    environment: 'Staging',
    created: '15 minutes ago',
    success_rate: null
  },
  {
    id: 'AGT-2025-001236',
    name: 'Data Analysis Pipeline',
    status: 'healthy',
    environment: 'Production',
    created: '1 day ago',
    success_rate: 99.2
  },
  {
    id: 'AGT-2025-001237',
    name: 'Content Generator',
    status: 'error',
    environment: 'Development',
    created: '3 hours ago',
    success_rate: 45.3
  },
  {
    id: 'AGT-2025-001238',
    name: 'Lead Qualification Agent',
    status: 'deployed',
    environment: 'Production',
    created: '6 hours ago',
    success_rate: 97.8
  }
];

const statusIcons = {
  deployed: CheckCircle,
  deploying: Clock,
  healthy: CheckCircle,
  error: XCircle,
  warning: AlertCircle
};

const statusColors = {
  deployed: 'text-green-500',
  deploying: 'text-yellow-500',
  healthy: 'text-green-500',
  error: 'text-red-500',
  warning: 'text-yellow-500'
};

export function DeploymentStatus() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900">Recent Deployments</h3>
        <p className="text-sm text-gray-500">Latest agent deployments and their status</p>
      </div>

      <div className="space-y-4">
        {deployments.map((deployment) => {
          const StatusIcon = statusIcons[deployment.status as keyof typeof statusIcons];
          const statusColor = statusColors[deployment.status as keyof typeof statusColors];
          
          return (
            <div key={deployment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <StatusIcon className={`w-5 h-5 mr-3 ${statusColor}`} />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{deployment.name}</h4>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{deployment.id}</span>
                    <span>•</span>
                    <span>{deployment.environment}</span>
                    <span>•</span>
                    <span>{deployment.created}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                {deployment.success_rate !== null && (
                  <p className="text-sm font-medium text-gray-900">{deployment.success_rate}%</p>
                )}
                <p className={`text-xs capitalize ${statusColor}`}>
                  {deployment.status}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all deployments →
        </button>
      </div>
    </div>
  );
}