import React from 'react';
import { Check } from 'lucide-react';

export const STEPS = [
  { id: 1, label: 'Evidence', title: 'Capture Evidence' },
  { id: 2, label: 'Describe', title: 'Describe Problem' },
  { id: 3, label: 'AI Analysis', title: 'AI Road Audit' },
  { id: 4, label: 'Details', title: 'Authority & Details' },
  { id: 5, label: 'Review', title: 'Review Report' },
  { id: 6, label: 'Send', title: 'Send & Track' }
];

export const StepIndicator = ({ currentStep, onStepClick }) => {
  return (
    <div className="bg-white border-b border-slate-200 sticky top-[80px] z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Desktop Step Indicator */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-0.5 bg-slate-200 z-0"></div>
          
          {STEPS.map((step) => {
            const isCompleted = currentStep > step.id;
            const isCurrent = currentStep === step.id;
            const isClickable = step.id < currentStep;

            return (
              <div
                key={step.id}
                onClick={() => isClickable && onStepClick && onStepClick(step.id)}
                className={`relative z-10 flex flex-col items-center group ${
                  isClickable ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    isCompleted
                      ? 'bg-emerald-600 text-white shadow-sm ring-4 ring-emerald-100'
                      : isCurrent
                      ? 'bg-blue-600 text-white shadow-md ring-4 ring-blue-100 scale-110'
                      : 'bg-white text-slate-400 border-2 border-slate-300'
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : step.id}
                </div>

                <span
                  className={`mt-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                    isCurrent
                      ? 'text-blue-600 font-extrabold'
                      : isCompleted
                      ? 'text-slate-800'
                      : 'text-slate-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile Compact Step Indicator */}
        <div className="md:hidden flex items-center justify-between text-xs font-bold text-slate-700">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
              {currentStep}
            </span>
            <span>Step {currentStep} of 6: {STEPS[currentStep - 1]?.title}</span>
          </div>
          <div className="w-24 bg-slate-200 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-blue-600 h-full transition-all duration-300"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
};
