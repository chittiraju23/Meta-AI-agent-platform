import React, { useState } from 'react';
import { Network, Database, Cpu, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

interface Props {
  config: any;
  onConfigChange: (config: any) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const memoryTypes = [
  {
    id: 'vector_db',
    name: 'Vector Database',
    description: 'Semantic search and similarity matching',
    icon: Database,
    recommended: true
  },
  {
    id: 'episodic',
    name: 'Episodic Memory',
    description: 'Task execution history and learning',
    icon: Network,
    recommended: true
  },
  {
    id: 'working',
    name: 'Working Memory',
    description: 'Short-term context and state',
    icon: Cpu,
    recommended: false
  }
];

const toolCategories = [
  {
    id: 'apis',
    name: 'API Integrations',
    tools: ['Twitter API', 'Reddit API', 'News Feeds API', 'Sentiment Analysis API'],
    icon: Network
  },
  {
    id: 'processing',
    name: 'Data Processing',
    tools: ['Text Preprocessor', 'Sentiment Analyzer', 'Entity Extractor', 'Trend Detector'],
    icon: Cpu
  },
  {
    id: 'output',
    name: 'Output Generation',
    tools: ['PDF Generator', 'Chart Creator', 'Email Sender', 'Dashboard API'],
    icon: Zap
  }
];

export function ArchitectureDesigner({ config, onConfigChange, onNext, onPrevious }: Props) {
  const [selectedMemory, setSelectedMemory] = useState<string[]>(['vector_db', 'episodic']);
  const [selectedTools, setSelectedTools] = useState<string[]>([
    'Twitter API', 'Reddit API', 'Sentiment Analysis API', 'PDF Generator'
  ]);

  const handleMemoryChange = (memoryId: string) => {
    setSelectedMemory(prev => 
      prev.includes(memoryId) 
        ? prev.filter(id => id !== memoryId)
        : [...prev, memoryId]
    );
  };

  const handleToolChange = (tool: string) => {
    setSelectedTools(prev =>
      prev.includes(tool)
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  const handleNext = () => {
    onConfigChange({
      ...config,
      memory: selectedMemory,
      tools: selectedTools
    });
    onNext();
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Architecture Design</h2>
        <p className="text-gray-600">Configure your agent's memory systems and tool integrations based on the analyzed requirements.</p>
      </div>

      <div className="space-y-8">
        {/* Memory Systems */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Memory Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {memoryTypes.map((memory) => (
              <div
                key={memory.id}
                className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedMemory.includes(memory.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleMemoryChange(memory.id)}
              >
                {memory.recommended && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-2">
                  <memory.icon className={`w-5 h-5 mr-2 ${
                    selectedMemory.includes(memory.id) ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  <h4 className="font-medium text-gray-900">{memory.name}</h4>
                </div>
                <p className="text-sm text-gray-600">{memory.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tool Selection */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Tool Integration</h3>
          <div className="space-y-6">
            {toolCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <category.icon className="w-5 h-5 text-gray-600 mr-2" />
                  <h4 className="font-medium text-gray-900">{category.name}</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {category.tools.map((tool) => (
                    <label
                      key={tool}
                      className="flex items-center p-3 bg-white border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTools.includes(tool)}
                        onChange={() => handleToolChange(tool)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm text-gray-900">{tool}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
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
            disabled={selectedMemory.length === 0 || selectedTools.length === 0}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Configure Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}