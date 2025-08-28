import React, { useState } from 'react';
import { GoalAnalyzer } from '../components/builder/GoalAnalyzer';
import { ArchitectureDesigner } from '../components/builder/ArchitectureDesigner';
import { ConfigurationPanel } from '../components/builder/ConfigurationPanel';
import { CodePreview } from '../components/builder/CodePreview';

export function AgentBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [agentConfig, setAgentConfig] = useState({
    goal: '',
    architecture: null,
    tools: [],
    memory: null,
    deployment: null
  });

  const steps = [
    { id: 1, name: 'Goal Analysis', component: GoalAnalyzer },
    { id: 2, name: 'Architecture Design', component: ArchitectureDesigner },
    { id: 3, name: 'Configuration', component: ConfigurationPanel },
    { id: 4, name: 'Code Generation', component: CodePreview },
  ];

  const CurrentStepComponent = steps.find(step => step.id === currentStep)?.component;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Intelligent Agent Builder</h1>
        <div className="text-sm text-gray-500">
          Step {currentStep} of {steps.length}
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white p-6 rounded-lg shadow">
        <nav className="flex items-center justify-center">
          <ol className="flex items-center space-x-5">
            {steps.map((step, index) => (
              <li key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                      currentStep >= step.id
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-gray-300 text-gray-500'
                    }`}
                  >
                    {step.id}
                  </div>
                  <div className="ml-4 min-w-0 flex flex-col">
                    <span
                      className={`text-sm font-medium ${
                        currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`ml-6 w-16 h-0.5 ${
                      currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Current Step Content */}
      <div className="bg-white rounded-lg shadow">
        {CurrentStepComponent && (
          <CurrentStepComponent 
            config={agentConfig}
            onConfigChange={setAgentConfig}
            onNext={() => setCurrentStep(Math.min(currentStep + 1, steps.length))}
            onPrevious={() => setCurrentStep(Math.max(currentStep - 1, 1))}
            isFirstStep={currentStep === 1}
            isLastStep={currentStep === steps.length}
          />
        )}
      </div>
    </div>
  );
}