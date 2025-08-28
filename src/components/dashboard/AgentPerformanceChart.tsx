import React from 'react';
import { TrendingUp, MoreHorizontal } from 'lucide-react';

const performanceData = [
  { time: '00:00', agents: 8247, success: 98.2, throughput: 1250 },
  { time: '04:00', agents: 8156, success: 98.5, throughput: 1180 },
  { time: '08:00', agents: 8293, success: 98.9, throughput: 1420 },
  { time: '12:00', agents: 8401, success: 97.8, throughput: 1680 },
  { time: '16:00', agents: 8352, success: 98.7, throughput: 1590 },
  { time: '20:00', agents: 8247, success: 98.3, throughput: 1340 },
];

export function AgentPerformanceChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Agent Performance Trends</h3>
          <p className="text-sm text-gray-500">Real-time performance metrics across all deployed agents</p>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-500">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Active Agents</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Success Rate</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Throughput (req/min)</span>
          </div>
        </div>
      </div>

      <div className="relative h-64 bg-gray-50 rounded-lg p-4">
        {/* Simulated chart visualization */}
        <div className="absolute inset-0 p-4">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="agentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.05 }} />
              </linearGradient>
            </defs>
            <path
              d="M 0 150 Q 100 140 200 120 T 400 110 T 600 115"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 0 150 Q 100 140 200 120 T 400 110 T 600 115 L 600 200 L 0 200 Z"
              fill="url(#agentGradient)"
            />
          </svg>
        </div>
        
        <div className="absolute top-4 right-4 flex items-center text-sm text-green-600">
          <TrendingUp className="w-4 h-4 mr-1" />
          <span>+8.2% vs last 24h</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-900">98.7%</p>
          <p className="text-xs text-gray-500">Avg Success Rate</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-900">1.4k</p>
          <p className="text-xs text-gray-500">Avg Throughput</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-900">23s</p>
          <p className="text-xs text-gray-500">Avg Response Time</p>
        </div>
      </div>
    </div>
  );
}