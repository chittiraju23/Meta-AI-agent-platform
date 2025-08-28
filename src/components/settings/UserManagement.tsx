import React from 'react';
import { Users, UserPlus, Crown, Shield } from 'lucide-react';

const users = [
  {
    name: 'Sarah Chen',
    email: 'sarah.chen@metaagent.ai',
    role: 'Admin',
    status: 'Active',
    last_login: '2 hours ago'
  },
  {
    name: 'Michael Torres',
    email: 'michael.torres@metaagent.ai', 
    role: 'Developer',
    status: 'Active',
    last_login: '1 day ago'
  },
  {
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@metaagent.ai',
    role: 'Analyst',
    status: 'Inactive',
    last_login: '1 week ago'
  }
];

export function UserManagement() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Users className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">User Management</h3>
        </div>
        <button className="flex items-center px-3 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
          <UserPlus className="w-4 h-4 mr-2" />
          Add User
        </button>
      </div>

      <div className="space-y-3">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">{user.name}</span>
                  {user.role === 'Admin' && <Crown className="w-3 h-3 text-yellow-500 ml-1" />}
                  {user.role === 'Developer' && <Shield className="w-3 h-3 text-blue-500 ml-1" />}
                </div>
                <div className="text-xs text-gray-500">{user.email}</div>
                <div className="text-xs text-gray-400">Last login: {user.last_login}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {user.status}
              </span>
              <span className="text-xs text-gray-500">{user.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}