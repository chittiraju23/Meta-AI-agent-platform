import React from 'react';
import { DeploymentGrid } from '../components/deployment/DeploymentGrid';
import { ResourceMonitor } from '../components/deployment/ResourceMonitor';
import { DeploymentQueue } from '../components/deployment/DeploymentQueue';

export function DeploymentCenter() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Deployment Center</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          New Deployment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DeploymentGrid />
        </div>
        <div className="space-y-6">
          <ResourceMonitor />
          <DeploymentQueue />
        </div>
      </div>
    </div>
  );
}