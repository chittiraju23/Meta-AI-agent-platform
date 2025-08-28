import React from 'react';
import { SystemSettings } from '../components/settings/SystemSettings';
import { UserManagement } from '../components/settings/UserManagement';
import { IntegrationSettings } from '../components/settings/IntegrationSettings';

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SystemSettings />
        <UserManagement />
      </div>
      
      <IntegrationSettings />
    </div>
  );
}