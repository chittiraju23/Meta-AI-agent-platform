import React from 'react';
import { StatsGrid } from '../components/dashboard/StatsGrid';
import { AgentPerformanceChart } from '../components/dashboard/AgentPerformanceChart';
import { DeploymentStatus } from '../components/dashboard/DeploymentStatus';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { SystemHealth } from '../components/dashboard/SystemHealth';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Meta-Agent Control Center</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <StatsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AgentPerformanceChart />
        <SystemHealth />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DeploymentStatus />
        <RecentActivity />
      </div>
    </div>
  );
}