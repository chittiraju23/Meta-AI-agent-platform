import React from 'react';
import { PerformanceMetrics } from '../components/analytics/PerformanceMetrics';
import { CostAnalysis } from '../components/analytics/CostAnalysis';
import { AgentInsights } from '../components/analytics/AgentInsights';
import { TrendAnalysis } from '../components/analytics/TrendAnalysis';

export function AnalyticsCenter() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Center</h1>
          <p className="text-gray-600">Comprehensive performance insights and optimization recommendations</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceMetrics />
        <CostAnalysis />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AgentInsights />
        <TrendAnalysis />
      </div>
    </div>
  );
}