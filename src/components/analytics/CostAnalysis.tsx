import React from 'react';
import { DollarSign, TrendingDown, Server, Database } from 'lucide-react';

export function CostAnalysis() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Cost Analysis</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">$2,847</div>
          <div className="text-sm text-gray-600">Monthly Cost</div>
          <div className="text-xs text-green-600 flex items-center justify-center mt-1">
            <TrendingDown className="w-3 h-3 mr-1" />
            -8% vs last month
          </div>
        </div>
        
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Server className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">$0.034</div>
          <div className="text-sm text-gray-600">Cost per Agent Hour</div>
          <div className="text-xs text-blue-600 mt-1">
            Industry leading efficiency
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Server className="w-4 h-4 text-gray-500 mr-3" />
            <span className="text-sm text-gray-900">Compute Resources</span>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">$1,847</div>
            <div className="text-xs text-gray-500">65% of total</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Database className="w-4 h-4 text-gray-500 mr-3" />
            <span className="text-sm text-gray-900">Storage & Memory</span>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">$634</div>
            <div className="text-xs text-gray-500">22% of total</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <TrendingDown className="w-4 h-4 text-gray-500 mr-3" />
            <span className="text-sm text-gray-900">Network & API Calls</span>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">$366</div>
            <div className="text-xs text-gray-500">13% of total</div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="text-sm font-medium text-yellow-800 mb-1">Cost Optimization Opportunity</h4>
        <p className="text-sm text-yellow-700">
          Implementing auto-scaling could reduce costs by an estimated $423/month while maintaining performance.
        </p>
      </div>
    </div>
  );
}