import React from 'react';
import { Settings, Save, RefreshCw } from 'lucide-react';

export function SystemSettings() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center mb-6">
        <Settings className="w-5 h-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">System Configuration</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Default Resource Limits
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="CPU (e.g., 2000m)"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Memory (e.g., 4Gi)"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Auto-scaling Configuration
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Conservative (Scale at 80% CPU)</option>
            <option>Balanced (Scale at 70% CPU)</option>
            <option>Aggressive (Scale at 60% CPU)</option>
          </select>
        </div>

        <div className="flex items-center space-x-3">
          <input type="checkbox" id="auto-optimize" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label htmlFor="auto-optimize" className="text-sm text-gray-900">Enable automatic performance optimization</label>
        </div>

        <div className="flex items-center space-x-3">
          <input type="checkbox" id="security-scanning" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label htmlFor="security-scanning" className="text-sm text-gray-900">Enable security vulnerability scanning</label>
        </div>
      </div>

      <div className="mt-6 flex items-center space-x-3">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
        <button className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}