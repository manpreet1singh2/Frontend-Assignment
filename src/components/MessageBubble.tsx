import React from 'react';
import { User, Scale, Clock, CheckCircle } from 'lucide-react';
import { Message } from '../types';
import CitationCard from './CitationCard';
import LoadingDots from './LoadingDots';

interface MessageBubbleProps {
  message: Message;
  onCitationClick: (citation: any) => void;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, onCitationClick }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-8`}>
      <div className={`flex max-w-4xl ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-4`}>
        {/* Enhanced Avatar */}
        <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-4' : 'mr-4'}`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
            message.type === 'user' 
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
              : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 border-2 border-white'
          }`}>
            {message.type === 'user' ? (
              <User className="w-6 h-6" />
            ) : (
              <Scale className="w-6 h-6" />
            )}
          </div>
        </div>

        {/* Message Content */}
        <div className={`flex-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
          {/* Message Header */}
          <div className={`flex items-center mb-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <span className="text-sm font-semibold text-gray-700">
              {message.type === 'user' ? 'You' : 'Lexi Legal Assistant'}
            </span>
            {message.type === 'assistant' && !message.loading && (
              <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
            )}
          </div>

          {/* Message Bubble */}
          <div className={`inline-block px-6 py-4 rounded-2xl shadow-lg max-w-none ${
            message.type === 'user'
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
              : 'bg-white text-gray-900 border border-gray-200'
          }`}>
            {message.loading ? (
              <div className="flex items-center space-x-3">
                <LoadingDots />
                <span className="text-sm text-gray-600">Analyzing legal documents...</span>
              </div>
            ) : (
              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                {message.content}
              </div>
            )}
          </div>

          {/* Timestamp */}
          <div className={`flex items-center mt-3 text-xs text-gray-500 ${
            message.type === 'user' ? 'justify-end' : 'justify-start'
          }`}>
            <Clock className="w-3 h-3 mr-1" />
            {formatTime(message.timestamp)}
          </div>

          {/* Citations */}
          {message.citations && message.citations.length > 0 && (
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                <div className="w-1 h-4 bg-blue-500 rounded mr-2"></div>
                Legal Citations & Sources
              </div>
              {message.citations.map((citation, index) => (
                <CitationCard
                  key={index}
                  citation={citation}
                  onClick={() => onCitationClick(citation)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;