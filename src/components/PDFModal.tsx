import React, { useEffect } from 'react';
import { X, ExternalLink, FileText, Download, Highlighter as Highlight } from 'lucide-react';

interface PDFModalProps {
  isOpen: boolean;
  url: string;
  paragraph?: number;
  onClose: () => void;
}

const PDFModal: React.FC<PDFModalProps> = ({ isOpen, url, paragraph, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openInNewTab = () => {
    window.open(url, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] flex flex-col overflow-hidden">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Dani Devi v. Pritam Singh</h3>
              <p className="text-sm text-gray-600">Punjab and Haryana High Court • Motor Vehicle Act Case</p>
            </div>
            {paragraph && (
              <div className="flex items-center space-x-2 bg-yellow-100 border border-yellow-300 px-3 py-2 rounded-lg">
                <Highlight className="w-4 h-4 text-yellow-700" />
                <span className="text-sm font-semibold text-yellow-800">
                  Paragraph {paragraph} Highlighted
                </span>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={openInNewTab}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors bg-blue-100 hover:bg-blue-200 rounded-lg border border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Open PDF</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Enhanced Content - Simulated PDF with highlighted paragraph */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="p-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
              {/* Document Header */}
              <div className="text-center mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Dani Devi and others v. Pritam Singh and another
                </h2>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="font-semibold">Punjab and Haryana High Court</p>
                  <p>FAO No. 4353 of 2012 (O&M) • Decided: 13.09.2022</p>
                  <p>Before: Mr. Harkesh Manuja, J.</p>
                </div>
              </div>

              {/* Document Content */}
              <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="font-semibold text-blue-900 mb-2">Case Summary:</p>
                  <p className="text-blue-800">
                    Motor Vehicles Act, 1988, Section 166 - Compensation - Future prospects for self-employed deceased aged 54-55 years
                  </p>
                </div>

                <p><strong>Para 1:</strong> By way of present appeal, the appellants have questioned the adequacy of compensation awarded by the learned Motor Accident Claims Tribunal, Jind, for short 'the Tribunal', vide its award dated 03.04.2012.</p>
                
                <p><strong>Para 2:</strong> The facts, in brief, are that on 23.06.2011 the deceased (Hawa Singh) was going to his Village Jajanwala from Village Prabhuwala on bicycle, followed by his son Balwinder Singh on a separate bicycle. When the deceased reached near Gupta Brick Kiln, a jeep bearing registration No.HR-31-A-0426 being driven by respondent No.1 in a rash and negligent manner came from behind and struck the bicycle of deceased.</p>
                
                <p><strong>Para 3:</strong> On account of the death of Hawa Singh, his dependants filed claim petition before the learned Tribunal. The Tribunal assessed the annual income of the deceased as Rs.21,600/- and after applying the multiplier of 10, calculated the total dependency.</p>
                
                <p><strong>Para 4:</strong> In the present appeal, the appellants/claimants have sought enhancement of compensation.</p>
                
                <p><strong>Para 5:</strong> Learned counsel for both the parties are ad idem that there is no dispute regarding the annual income as well as deduction. However, learned counsel for the claimants/appellants argues that while assessing the annual income, future prospects should be awarded.</p>
                
                <p><strong>Para 6:</strong> Learned counsel for respondent No.1 submits that compensation awarded by the learned Tribunal is just and fair and therefore, no interference is warranted.</p>
                
                {/* Highlighted Paragraph 7 - The key citation */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-yellow-400 rounded"></div>
                  <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-2 border-yellow-300 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-3">
                      <Highlight className="w-5 h-5 text-yellow-700 mr-2" />
                      <span className="font-bold text-yellow-900">Key Legal Finding - Paragraph 7</span>
                    </div>
                    <p className="font-semibold text-gray-900 leading-relaxed">
                      <strong>Para 7:</strong> Having heard the arguments advanced by learned counsel for both the parties and gone through the paper-book, I am of the considered view that{' '}
                      <mark className="bg-yellow-300 px-2 py-1 rounded font-bold text-gray-900">
                        as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.
                      </mark>
                    </p>
                  </div>
                </div>
                
                <p><strong>Para 8:</strong> Besides this, with respect to the compensation awarded under the other conventional heads as well as multiplier, applying the principles of law laid down by Hon'ble Supreme Court in National Insurance Company Ltd. v. Pranay Sethi and others, the claimants are entitled for enhanced compensation.</p>
                
                <p><strong>Para 9:</strong> In view of the discussions made herein-above, the appellants are entitled for following enhanced compensation as detailed in the judgment.</p>

                {/* Legal Principle Box */}
                <div className="mt-8 p-6 bg-green-50 rounded-xl border-2 border-green-200">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Legal Principle Established
                  </h4>
                  <p className="text-green-800 text-sm leading-relaxed">
                    <strong>Future Prospects for Self-Employed:</strong> Even when the deceased was self-employed and aged 54-55 years, 
                    10% of annual income should be awarded on account of future prospects under Section 166 of the Motor Vehicles Act, 1988.
                  </p>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <strong>Note:</strong> This is a simulated PDF viewer showing Paragraph 7 highlighted. 
                  Click "Open PDF\" above to view the complete document in a new tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFModal;