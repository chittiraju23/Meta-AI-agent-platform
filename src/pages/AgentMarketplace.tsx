import React, { useState } from 'react';
import { Search, Filter, Star, Download, Eye, Tag } from 'lucide-react';

const agents = [
  {
    id: 1,
    name: 'Social Media Sentiment Monitor',
    description: 'Advanced sentiment analysis for social media mentions with real-time alerts',
    category: 'Analytics',
    rating: 4.8,
    downloads: 2847,
    author: 'MetaAgent Team',
    tags: ['sentiment-analysis', 'social-media', 'monitoring'],
    price: 'Free',
    complexity: 'Medium',
    last_updated: '2 days ago'
  },
  {
    id: 2,
    name: 'E-commerce Recommendation Engine',
    description: 'Personalized product recommendations using collaborative filtering',
    category: 'Machine Learning',
    rating: 4.9,
    downloads: 5234,
    author: 'AI Solutions Inc',
    tags: ['recommendation', 'ecommerce', 'ml'],
    price: '$49/month',
    complexity: 'High',
    last_updated: '1 week ago'
  },
  {
    id: 3,
    name: 'Customer Support Chatbot',
    description: 'Intelligent customer service agent with knowledge base integration',
    category: 'Customer Service',
    rating: 4.6,
    downloads: 8923,
    author: 'Support AI',
    tags: ['chatbot', 'customer-service', 'nlp'],
    price: 'Free',
    complexity: 'Low',
    last_updated: '3 days ago'
  },
  {
    id: 4,
    name: 'Data Pipeline Orchestrator',
    description: 'Automated data processing and ETL pipeline management',
    category: 'Data Processing',
    rating: 4.7,
    downloads: 1567,
    author: 'DataFlow Labs',
    tags: ['etl', 'data-pipeline', 'automation'],
    price: '$99/month',
    complexity: 'High',
    last_updated: '5 days ago'
  }
];

const categories = ['All', 'Analytics', 'Machine Learning', 'Customer Service', 'Data Processing', 'Content Generation'];

export function AgentMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Agent Marketplace</h1>
          <p className="text-gray-600">Discover, share, and deploy pre-built agent templates</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Publish Agent
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-100 text-blue-800 border border-blue-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">{agent.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{agent.description}</p>
                <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {agent.category}
                </span>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium text-gray-900">{agent.rating}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Download className="w-4 h-4 mr-1" />
                {agent.downloads.toLocaleString()}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {agent.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>By {agent.author}</span>
              <span>{agent.last_updated}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-gray-900">{agent.price}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  agent.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                  agent.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {agent.complexity}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                  Deploy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAgents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No agents found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}