import React from 'react';
import { Plug, CheckCircle, AlertCircle, Settings } from 'lucide-react';

const integrations = [
  {
    name: 'Kubernetes Cluster',
    description: 'Container orchestration and deployment',
    status: 'connected',
    endpoint: 'k8s.metaagent.internal',
    last_sync: '2 minutes ago'
  },
  {
    name: 'Docker Registry',
    description: 'Container image storage and management', 
    status: 'connected',
    endpoint: 'registry.metaagent.ai',
    last_sync: '5 minutes ago'
  },
  {
    name: 'Vector Database',
    description: 'Semantic search and memory storage',
    status: 'connected',
    endpoint: 'vector-db.metaagent.internal',
    last_sync: '1 minute ago'
  },
  {
    name: 'Monitoring Stack',
    description: 'Prometheus and Grafana monitoring',
    status: 'warning',
    endpoint: 'monitoring.metaagent.ai',
    last_sync: '15 minutes ago'
  }
];

export function IntegrationSettings() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center mb-6">
        <Plug className="w-5 h-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">System Integrations</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {integrations.map((integration) => (
          <div key={integration.name} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-sm font-medium text-gray-900">{integration.name}</h4>
                <p className="text-xs text-gray-600">{integration.description}</p>
              </div>
              <div className="flex items-center">
                {integration.status === 'connected' ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                )}
              </div>
            </div>
            
            <div className="space-y-2 text-xs text-gray-500">
              <div>Endpoint: {integration.endpoint}</div>
              <div>Last sync: {integration.last_sync}</div>
            </div>
            
            <div className="mt-3 flex items-center justify-between">
              <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                integration.status === 'connected' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {integration.status}
              </span>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}