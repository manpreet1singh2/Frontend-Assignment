export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  citations?: Citation[];
  loading?: boolean;
}

export interface Citation {
  text: string;
  source: string;
  link: string;
  paragraph?: number;
}

export interface ApiResponse {
  answer: string;
  citations: Citation[];
}