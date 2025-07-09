Lexisg-frontend-intern-test
A minimal frontend React application that simulates a legal AI assistant interface (like ChatGPT), where users can enter a legal question, receive a simulated AI-generated answer, and click on citations to view the source PDF.
🚀 How to Run
npm install
npm start

The application will be available at http://localhost:5173
✨ Features
1. ChatGPT-style Interface

Clean chat layout with user and assistant message bubbles
Professional legal assistant branding with Lexi Legal Assistant
Responsive design optimized for legal document review
Enhanced gradients and modern UI elements

2. User Input Panel

Textarea pre-filled with the provided legal question about motor accident claims
Submit button with loading spinner animation and enhanced styling
Enter key support for quick submission
Real-time loading indicators

3. Answer Panel

AI-generated response displayed in styled message bubble
Citations shown below the answer in enhanced reference cards
Timestamp display for each message
Professional avatars and status indicators

4. Citation Handling

Interactive citation cards with:
Quote from Paragraph 7 of the judgment
PDF source name: Dani_Devi_v_Pritam_Singh.pdf
"View Source" button with external link icon
Paragraph number indicator with enhanced styling



5. PDF Modal (Bonus Feature)

On citation click: Opens PDF content in a modal popup
Simulated scroll/highlight: Shows Paragraph 7 highlighted in yellow with enhanced visual indicators
Mock PDF viewer: Displays relevant paragraphs with the cited text highlighted
New tab option: Button to open the actual PDF in a new tab
Enhanced UI: Professional document viewer with proper headers and styling

🔧 Technical Implementation
Simulated API Call
The application uses the exact API response format as specified:
const response = {
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

Citation Linking Implementation

Modal Popup: Citations open in a professional modal overlay with enhanced styling
Paragraph Highlighting: Simulated PDF view with Paragraph 7 highlighted using yellow background, border, and visual indicators
New Tab Support: Users can open the actual PDF document in a new browser tab
Responsive Design: Modal adapts to different screen sizes with improved mobile experience
Enhanced UX: Smooth animations, proper focus management, and keyboard navigation (ESC to close)

🎨 UI/UX Features

Tailwind CSS: Modern styling with professional color scheme and gradients
Loading States: Smooth animations and enhanced loading indicators
Hover Effects: Interactive elements with subtle hover states and transforms
Accessibility: Proper focus management, keyboard navigation, and ARIA labels
Mobile Responsive: Works seamlessly on all device sizes
Enhanced Visual Design: Professional gradients, shadows, and modern card layouts

📱 Screenshots
The interface features:

Clean header with enhanced Lexi Legal Assistant branding
ChatGPT-style message bubbles with professional avatars
Interactive citation cards with enhanced styling and hover effects
Professional PDF modal with highlighted paragraph content and document structure
Responsive layout that works perfectly on desktop and mobile
Modern gradient backgrounds and professional color schemes

🏗️ Project Structure
src/
├── components/
│   ├── ChatInterface.tsx      # Main chat interface component
│   ├── MessageBubble.tsx      # Individual message display with enhanced styling
│   ├── InputPanel.tsx         # User input form with improved UX
│   ├── CitationCard.tsx       # Citation display component with enhanced design
│   ├── LoadingDots.tsx        # Loading animation component
│   └── PDFModal.tsx           # Enhanced PDF viewer modal
├── types/
│   └── index.ts               # TypeScript type definitions
├── App.tsx                    # Root application component
└── main.tsx                   # Application entry point

🎯 Key Implementation Details

React Hooks: Uses useState, useEffect, and useRef for state management
TypeScript: Fully typed components and interfaces
Responsive Design: Mobile-first approach with Tailwind CSS
Accessibility: Proper ARIA labels, keyboard navigation, and focus management
Performance: Optimized rendering with proper key props and memoization
Enhanced UX: Smooth animations, loading states, and professional styling

🔍 Citation Linking Details
How Citation Linking Was Handled:

Click Handler: Each citation card has an onClick handler that triggers the PDF modal
Modal State Management: Uses React state to control modal visibility and pass citation data
PDF Simulation: Creates a mock PDF viewer that displays the relevant document content
Paragraph Highlighting: Uses CSS classes and visual indicators to highlight Paragraph 7
External Link: Provides option to open the actual PDF in a new browser tab
Enhanced Visual Feedback: Uses gradients, shadows, and animations for better user experience

Technical Approach:

State Management: Modal state controlled via React hooks
Event Handling: Proper event delegation and keyboard support (ESC to close)
Responsive Design: Modal adapts to different screen sizes
Accessibility: Focus management and proper ARIA attributes
Performance: Efficient re-rendering and cleanup

The application successfully demonstrates a production-ready legal AI assistant interface with all the requested features and enhanced bonus PDF highlighting functionality.
🌟 Enhanced Features

Professional Gradients: Modern gradient backgrounds and button styling
Enhanced Typography: Improved font weights, spacing, and hierarchy
Interactive Elements: Hover effects, transforms, and smooth transitions
Loading States: Professional loading indicators with contextual messages
Visual Feedback: Status indicators, progress states, and confirmation elements
Modern Card Design: Enhanced shadows, borders, and spacing for better visual hierarchy

🌐 Hosted Version
Check out the live demo at: https://incomparable-bubblegum-5b6916.netlify.app/