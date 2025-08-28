import React, { useState } from 'react';
import { Zap, Target, Brain, ArrowRight } from 'lucide-react';

interface Props {
  config: any;
  onConfigChange: (config: any) => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function GoalAnalyzer({ config, onConfigChange, onNext }: Props) {
  const [goal, setGoal] = useState(config.goal || '');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!goal.trim()) return;
    
    setAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis = {
        complexity_score: 0.7,
        estimated_runtime: 'continuous_with_daily_batch',
        primary_tasks: ['social_media_monitoring', 'sentiment_analysis', 'report_generation'],
        data_sources: ['twitter_api', 'reddit_api', 'news_feeds'],
        resource_requirements: {
          cpu_cores: 2,
          memory_gb: 4,
          storage_gb: 10,
          network_bandwidth: 'moderate'
        },
        recommended_architecture: 'monitoring_and_analysis_agent'
      };
      
      setAnalysis(mockAnalysis);
      onConfigChange({ ...config, goal, analysis: mockAnalysis });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Goal Analysis & Requirements</h2>
        <p className="text-gray-600">Describe what you want your agent to accomplish. Our AI will analyze your requirements and suggest optimal configurations.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Agent Goal Description
          </label>
          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Example: Create an agent that monitors social media for brand mentions and generates daily sentiment reports with actionable insights..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleAnalyze}
            disabled={!goal.trim() || analyzing}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Brain className="w-4 h-4 mr-2" />
            {analyzing ? 'Analyzing...' : 'Analyze Goal'}
          </button>
        </div>

        {analyzing && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-blue-800">AI is analyzing your goal and determining optimal agent architecture...</span>
            </div>
          </div>
        )}

        {analysis && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <div className="flex items-center mb-4">
              <Target className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Analysis Results</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Complexity Assessment</h4>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${analysis.complexity_score * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {Math.round(analysis.complexity_score * 100)}%
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Resource Requirements</h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>CPU: {analysis.resource_requirements.cpu_cores} cores</div>
                  <div>Memory: {analysis.resource_requirements.memory_gb} GB</div>
                  <div>Storage: {analysis.resource_requirements.storage_gb} GB</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Primary Tasks</h4>
                <div className="space-y-1">
                  {analysis.primary_tasks.map((task: string, index: number) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <Zap className="w-3 h-3 text-blue-500 mr-2" />
                      {task.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Data Sources</h4>
                <div className="space-y-1">
                  {analysis.data_sources.map((source: string, index: number) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      {source.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Recommended Architecture</h4>
                  <p className="text-sm text-gray-600 capitalize">
                    {analysis.recommended_architecture.replace(/_/g, ' ')}
                  </p>
                </div>
                <button
                  onClick={onNext}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Design Architecture
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}