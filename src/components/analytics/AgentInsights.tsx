import React from 'react';
import { Bot, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const insights = [
  {
    agent: 'Social Media Monitor',
    type: 'optimization',
    message: 'Performance improved 15% after memory optimization',
    impact: 'high',
    time: '2 hours ago',
    icon: TrendingUp,
    color: 'green'
  },
  {
    agent: 'Customer Service Bot',
    type: 'warning',
    message: 'Response time increasing, consider scaling',
    impact: 'medium',
    time: '4 hours ago',
    icon: AlertTriangle,
    color: 'yellow'
  },
  {
    agent: 'Data Pipeline',
    type: 'success',
    message: 'Successfully processed 1M records without errors',
    impact: 'high',
    time: '6 hours ago',
    icon: CheckCircle,
    color: 'green'
  },
  {
    agent: 'Content Generator',
    type: 'alert',
    message: 'API rate limit exceeded, switching to backup provider',
    impact: 'low',
    time: '8 hours ago',
    icon: Bot,
    color: 'blue'
  }
];

export function AgentInsights() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Agent Insights</h3>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className={`p-2 rounded-lg ${
              insight.color === 'green' ? 'bg-green-100' :
              insight.color === 'yellow' ? 'bg-yellow-100' :
              insight.color === 'blue' ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              <insight.icon className={`w-4 h-4 ${
                insight.color === 'green' ? 'text-green-600' :
                insight.color === 'yellow' ? 'text-yellow-600' :
                insight.color === 'blue' ? 'text-blue-600' : 'text-gray-600'
              }`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-medium text-gray-900">{insight.agent}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  insight.impact === 'high' ? 'bg-red-100 text-red-700' :
                  insight.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {insight.impact} impact
                </span>
              </div>
              <p className="text-sm text-gray-600">{insight.message}</p>
              <p className="text-xs text-gray-400 mt-1">{insight.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}