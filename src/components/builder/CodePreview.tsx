import React, { useState, useEffect } from 'react';
import { Code, Download, Play, ArrowLeft, CheckCircle } from 'lucide-react';

interface Props {
  config: any;
  onConfigChange: (config: any) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function CodePreview({ config, onPrevious }: Props) {
  const [generating, setGenerating] = useState(true);
  const [generatedCode, setGeneratedCode] = useState<any>(null);

  useEffect(() => {
    // Simulate code generation
    const timer = setTimeout(() => {
      setGeneratedCode({
        agent_file: `# Social Media Monitor Agent
import asyncio
import logging
from typing import List, Dict
from agent_framework import BaseAgent, MemorySystem, ToolManager

class SocialMediaMonitorAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="social_media_monitor",
            version="1.0.0"
        )
        self.setup_memory_systems()
        self.setup_tools()
        
    async def execute_task(self, task: Dict) -> Dict:
        """Main task execution loop"""
        try:
            # Monitor social media mentions
            mentions = await self.monitor_mentions()
            
            # Analyze sentiment
            sentiment_data = await self.analyze_sentiment(mentions)
            
            # Generate reports
            report = await self.generate_report(sentiment_data)
            
            return {"status": "success", "report": report}
        except Exception as e:
            logging.error(f"Task execution failed: {e}")
            return {"status": "error", "message": str(e)}`,
        dockerfile: `FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Set environment variables
ENV PYTHONPATH=/app
ENV LOG_LEVEL=INFO

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\
  CMD python -c "import requests; requests.get('http://localhost:8080/health')"

# Run the agent
CMD ["python", "main.py"]`,
        kubernetes: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: social-media-monitor
  namespace: agents
spec:
  replicas: 1
  selector:
    matchLabels:
      app: social-media-monitor
  template:
    metadata:
      labels:
        app: social-media-monitor
    spec:
      containers:
      - name: agent
        image: metaagent/social-media-monitor:latest
        resources:
          requests:
            memory: "2Gi"
            cpu: "1000m"
          limits:
            memory: "4Gi"
            cpu: "2000m"
        env:
        - name: AGENT_CONFIG
          valueFrom:
            configMapKeyRef:
              name: agent-config
              key: config.yaml`,
        stats: {
          total_lines: 847,
          files_generated: 12,
          quality_score: 0.92,
          security_score: 0.89,
          estimated_build_time: '2m 15s'
        }
      });
      setGenerating(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (generating) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Generating Agent Code</h3>
          <p className="text-gray-600">AI is creating production-ready code with optimal architecture...</p>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="space-y-2 text-sm text-blue-800">
              <div>✓ Analyzing architecture requirements</div>
              <div>✓ Generating main agent class</div>
              <div>✓ Creating tool integrations</div>
              <div className="animate-pulse">⏳ Building container configuration...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Generated Agent Code</h2>
        <p className="text-gray-600">Production-ready agent implementation with deployment configurations.</p>
      </div>

      {/* Code Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-blue-50 p-3 rounded-lg text-center">
          <div className="text-lg font-semibold text-blue-600">{generatedCode.stats.total_lines}</div>
          <div className="text-xs text-gray-600">Lines of Code</div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg text-center">
          <div className="text-lg font-semibold text-green-600">{generatedCode.stats.files_generated}</div>
          <div className="text-xs text-gray-600">Files Generated</div>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg text-center">
          <div className="text-lg font-semibold text-purple-600">{Math.round(generatedCode.stats.quality_score * 100)}%</div>
          <div className="text-xs text-gray-600">Quality Score</div>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg text-center">
          <div className="text-lg font-semibold text-orange-600">{Math.round(generatedCode.stats.security_score * 100)}%</div>
          <div className="text-xs text-gray-600">Security Score</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg text-center">
          <div className="text-lg font-semibold text-gray-600">{generatedCode.stats.estimated_build_time}</div>
          <div className="text-xs text-gray-600">Build Time</div>
        </div>
      </div>

      {/* Code Tabs */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <div className="flex space-x-4 text-sm">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
              Agent Code
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              Dockerfile
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              Kubernetes
            </button>
          </div>
        </div>

        <div className="p-4">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{generatedCode.agent_file}</code>
          </pre>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={onPrevious}
          className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </button>

        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Download
          </button>
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            <Play className="w-4 h-4 mr-2" />
            Deploy Agent
          </button>
        </div>
      </div>

      {/* Success Message */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
          <div>
            <h4 className="text-sm font-medium text-green-800">Agent Ready for Deployment</h4>
            <p className="text-sm text-green-700 mt-1">
              Your agent has been successfully generated with production-ready code, containerization, and monitoring setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}