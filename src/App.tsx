import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { AgentBuilder } from './pages/AgentBuilder';
import { DeploymentCenter } from './pages/DeploymentCenter';
import { AgentMarketplace } from './pages/AgentMarketplace';
import { AnalyticsCenter } from './pages/AnalyticsCenter';
import { Settings } from './pages/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/builder" element={<AgentBuilder />} />
          <Route path="/deployment" element={<DeploymentCenter />} />
          <Route path="/marketplace" element={<AgentMarketplace />} />
          <Route path="/analytics" element={<AnalyticsCenter />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;