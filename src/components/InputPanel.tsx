import React, { useState } from 'react';
import { Send, Loader2, MessageSquare } from 'lucide-react';

interface InputPanelProps {
  onSubmit: (query: string) => void;
  isLoading: boolean;
}

const InputPanel: React.FC<InputPanelProps> = ({ onSubmit, isLoading }) => {
  const [query, setQuery] = useState('In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSubmit(query.trim());
      setQuery('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 px-6 py-6 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex items-end space-x-4">
          <div className="flex-1 relative">
            <div className="flex items-center mb-2">
              <MessageSquare className="w-4 h-4 text-gray-500 mr-2" />
              <label className="text-sm font-medium text-gray-700">
                Ask your legal question
              </label>
            </div>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your legal query here..."
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-200 shadow-sm hover:border-gray-400"
              rows={4}
              disabled={isLoading}
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400">
              Press Enter to submit • Shift+Enter for new line
            </div>
          </div>
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[120px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                <span className="font-medium">Analyzing...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                <span className="font-medium">Submit</span>
              </>
            )}
          </button>
        </form>
        
        {isLoading && (
          <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              <span className="ml-3">Processing your legal query...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputPanel;