import React from 'react';
import { User, Bot, Settings, AlertTriangle, CheckCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'agent_created',
    message: 'New agent "E-commerce Recommendation Engine" created by Sarah Chen',
    time: '5 minutes ago',
    icon: Bot,
    color: 'text-blue-500'
  },
  {
    id: 2,
    type: 'deployment',
    message: 'Agent AGT-2025-001234 successfully deployed to production',
    time: '12 minutes ago',
    icon: CheckCircle,
    color: 'text-green-500'
  },
  {
    id: 3,
    type: 'alert',
    message: 'Memory usage spike detected in Customer Support cluster',
    time: '28 minutes ago',
    icon: AlertTriangle,
    color: 'text-yellow-500'
  },
  {
    id: 4,
    type: 'configuration',
    message: 'Tool integration updated for Data Processing agents',
    time: '1 hour ago',
    icon: Settings,
    color: 'text-gray-500'
  },
  {
    id: 5,
    type: 'user',
    message: 'Michael Torres joined the platform as Agent Developer',
    time: '2 hours ago',
    icon: User,
    color: 'text-blue-500'
  },
  {
    id: 6,
    type: 'agent_optimized',
    message: 'Auto-optimization improved performance for 24 agents',
    time: '3 hours ago',
    icon: Bot,
    color: 'text-green-500'
  }
];

export function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        <p className="text-sm text-gray-500">Latest system events and notifications</p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`flex-shrink-0 p-1.5 rounded-lg bg-gray-100 ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View activity log →
        </button>
      </div>
    </div>
  );
}