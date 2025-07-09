import React, { useState, useRef, useEffect } from 'react';
import { Scale, FileText, MessageCircle } from 'lucide-react';
import { Message, Citation, ApiResponse } from '../types';
import MessageBubble from './MessageBubble';
import InputPanel from './InputPanel';
import PDFModal from './PDFModal';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pdfModal, setPdfModal] = useState<{ isOpen: boolean; url: string; paragraph?: number }>({
    isOpen: false,
    url: '',
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulated API call exactly as specified in requirements
  const simulateApiCall = async (query: string): Promise<ApiResponse> => {
    // Simulate API delay for realistic experience
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Exact API response format as specified
    const response: ApiResponse = {
      answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased's annual income should be added as future prospects.",
      citations: [
        {
          text: "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          paragraph: 7
        }
      ]
    };
    
    return response;
  };

  const handleSubmit = async (query: string) => {
    if (!query.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: query,
      timestamp: new Date(),
    };

    // Add loading message
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      content: '',
      timestamp: new Date(),
      loading: true,
    };

    setMessages(prev => [...prev, userMessage, loadingMessage]);
    setIsLoading(true);

    try {
      const response = await simulateApiCall(query);
      
      // Replace loading message with actual response
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response.answer,
        timestamp: new Date(),
        citations: response.citations,
        loading: false,
      };

      setMessages(prev => [...prev.slice(0, -1), assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'I apologize, but I encountered an error processing your request. Please try again.',
        timestamp: new Date(),
        loading: false,
      };

      setMessages(prev => [...prev.slice(0, -1), errorMessage]);
    }

    setIsLoading(false);
  };

  const handleCitationClick = (citation: Citation) => {
    setPdfModal({
      isOpen: true,
      url: citation.link,
      paragraph: citation.paragraph,
    });
  };

  const closePdfModal = () => {
    setPdfModal({ isOpen: false, url: '' });
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 px-6 py-5">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Lexi Legal Assistant</h1>
              <p className="text-sm text-gray-600">AI-powered legal research and analysis</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <MessageCircle className="w-4 h-4" />
            <span>Chat Interface</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.length === 0 && (
            <div className="text-center py-16">
              <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Welcome to Lexi Legal Assistant</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Ask me about legal matters, case law, motor vehicle claims, or any specific legal questions. 
                I'll provide detailed answers with relevant citations from legal documents.
              </p>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 max-w-3xl mx-auto shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <p className="text-sm font-semibold text-blue-800">Sample Legal Query:</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  "In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, 
                  is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 
                  of the Motor Vehicles Act, 1988?"
                </p>
              </div>
            </div>
          )}
          
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              onCitationClick={handleCitationClick}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Panel */}
      <InputPanel onSubmit={handleSubmit} isLoading={isLoading} />

      {/* PDF Modal */}
      <PDFModal
        isOpen={pdfModal.isOpen}
        url={pdfModal.url}
        paragraph={pdfModal.paragraph}
        onClose={closePdfModal}
      />
    </div>
  );
};

export default ChatInterface;