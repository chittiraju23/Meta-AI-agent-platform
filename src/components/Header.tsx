import React from 'react';
import { Bell, Search, Filter, Plus } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center flex-1 space-x-4">
          <div className="relative flex-1 max-w-lg">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Search agents, deployments, metrics..."
              className="w-full py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="p-2 text-gray-400 border border-gray-300 rounded-md hover:text-gray-500 hover:bg-gray-50">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Create Agent
          </button>
          <button className="relative p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-50">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
          </button>
        </div>
      </div>
    </header>
  );
}