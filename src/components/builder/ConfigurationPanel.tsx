import React, { useState } from 'react';
import { Settings, ArrowRight, ArrowLeft, Cloud, Server, Shield } from 'lucide-react';

interface Props {
  config: any;
  onConfigChange: (config: any) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function ConfigurationPanel({ config, onConfigChange, onNext, onPrevious }: Props) {
  const [configuration, setConfiguration] = useState({
    name: 'Social Media Monitor',
    environment: 'production',
    scaling: 'auto',
    replicas: 1,
    timeout: 300,
    memory_limit: '4Gi',
    cpu_limit: '2000m',
    security_level: 'standard'
  });

  const handleConfigChange = (key: string, value: any) => {
    setConfiguration(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    onConfigChange({ ...config, deployment: configuration });
    onNext();
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Agent Configuration</h2>
        <p className="text-gray-600">Fine-tune deployment settings and runtime parameters for optimal performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Configuration */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Basic Settings
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Agent Name
                </label>
                <input
                  type="text"
                  value={configuration.name}
                  onChange={(e) => handleConfigChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Environment
                </label>
                <select
                  value={configuration.environment}
                  onChange={(e) => handleConfigChange('environment', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="development">Development</option>
                  <option value="staging">Staging</option>
                  <option value="production">Production</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Scaling Strategy
                </label>
                <select
                  value={configuration.scaling}
                  onChange={(e) => handleConfigChange('scaling', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="manual">Manual</option>
                  <option value="auto">Auto Scaling</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Limits */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Server className="w-5 h-5 mr-2" />
              Resource Limits
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Memory Limit
                </label>
                <input
                  type="text"
                  value={configuration.memory_limit}
                  onChange={(e) => handleConfigChange('memory_limit', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="4Gi"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CPU Limit
                </label>
                <input
                  type="text"
                  value={configuration.cpu_limit}
                  onChange={(e) => handleConfigChange('cpu_limit', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="2000m"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Timeout (seconds)
                </label>
                <input
                  type="number"
                  value={configuration.timeout}
                  onChange={(e) => handleConfigChange('timeout', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Security Settings
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Security Level
                </label>
                <select
                  value={configuration.security_level}
                  onChange={(e) => handleConfigChange('security_level', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="minimal">Minimal</option>
                  <option value="standard">Standard</option>
                  <option value="enhanced">Enhanced</option>
                  <option value="maximum">Maximum</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Preview */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-md font-medium text-gray-900 mb-3">Configuration Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Environment:</span>
            <span className="ml-2 font-medium capitalize">{configuration.environment}</span>
          </div>
          <div>
            <span className="text-gray-500">Memory:</span>
            <span className="ml-2 font-medium">{selectedMemory.length} systems</span>
          </div>
          <div>
            <span className="text-gray-500">Tools:</span>
            <span className="ml-2 font-medium">{selectedTools.length} integrations</span>
          </div>
          <div>
            <span className="text-gray-500">Resources:</span>
            <span className="ml-2 font-medium">{configuration.cpu_limit}, {configuration.memory_limit}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <button
          onClick={onPrevious}
          className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </button>
        
        <button
          onClick={handleNext}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Generate Code
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}