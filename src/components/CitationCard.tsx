import React from 'react';
import { ExternalLink, FileText, Quote, Eye } from 'lucide-react';
import { Citation } from '../types';

interface CitationCardProps {
  citation: Citation;
  onClick: () => void;
}

const CitationCard: React.FC<CitationCardProps> = ({ citation, onClick }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 cursor-pointer hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 transition-all duration-300 group shadow-md hover:shadow-lg">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-sm">
          <FileText className="w-5 h-5 text-blue-700" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Quote className="w-4 h-4 text-blue-600" />
              <h4 className="text-sm font-bold text-blue-900">Legal Citation</h4>
            </div>
            <button
              onClick={onClick}
              className="flex items-center space-x-2 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors bg-white hover:bg-blue-50 px-3 py-2 rounded-lg border border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Eye className="w-3 h-3" />
              <span>View Source</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
          
          <blockquote className="text-sm text-blue-900 mb-4 italic leading-relaxed bg-white bg-opacity-50 p-3 rounded-lg border-l-4 border-blue-400">
            "{citation.text}"
          </blockquote>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-xs text-blue-700">
              <div className="flex items-center space-x-1">
                <span className="font-semibold">Source:</span>
                <span className="truncate bg-white px-2 py-1 rounded border">{citation.source}</span>
              </div>
              {citation.paragraph && (
                <div className="bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900 px-3 py-1 rounded-full font-semibold shadow-sm">
                  Paragraph {citation.paragraph}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitationCard;