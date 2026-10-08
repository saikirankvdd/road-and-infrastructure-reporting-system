import React from 'react';
import { 
  AlertOctagon, 
  AlertTriangle, 
  Car, 
  Layers, 
  UserCheck, 
  Droplets, 
  HardHat, 
  Building2, 
  HelpCircle 
} from 'lucide-react';

const iconMap = {
  AlertOctagon,
  AlertTriangle,
  Car,
  Layers,
  UserCheck,
  Droplets,
  HardHat,
  Building2,
  HelpCircle
};

export const IssueCategoryCard = ({ category, isSelected, onClick }) => {
  const IconComponent = iconMap[category.iconName] || AlertOctagon;

  return (
    <div
      onClick={onClick}
      className={`p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
        isSelected
          ? 'bg-blue-500/10 border-blue-500 ring-2 ring-blue-500/20 shadow-md'
          : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-md'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600'
          }`}>
            <IconComponent className="w-5 h-5" />
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
            category.severity === 'Critical' ? 'bg-red-100 text-red-700' :
            category.severity === 'High' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-700'
          }`}>
            {category.severity} Risk
          </span>
        </div>

        <h3 className="font-extrabold text-base text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
          {category.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-3">
          {category.description}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1">
        {category.examples.map((ex, idx) => (
          <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
            • {ex}
          </span>
        ))}
      </div>
    </div>
  );
};
