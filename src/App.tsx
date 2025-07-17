import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { ChatContainer } from './components/Chat/ChatContainer';
import { InputArea } from './components/Input/InputArea';
import { useToolSelection } from './hooks/useToolSelection';
import { useChat } from './hooks/useChat';
import type { ToolMode } from './types/tool';
import type { ChatMessage } from './types/chat';

const STATIC_RESPONSES: Record<ToolMode, string> = {
  knowledge: 'This is a static response from the Knowledge Base tool.',
  internet: 'This is a static response from the Internet tool.',
  hybrid: 'This is a static response from the Hybrid tool.',
};

const App: React.FC = () => {
  const { selectedTool, setSelectedTool } = useToolSelection();
  const { messages, addMessage, isTyping, setIsTyping } = useChat();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setIsLoading(true);
    const userMsg: ChatMessage = {
      id: Date.now() + '-user',
      type: 'user',
      content: input,
      timestamp: new Date(),
    };
    addMessage(userMsg);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: Date.now() + '-ai',
        type: 'assistant',
        content: STATIC_RESPONSES[selectedTool],
        timestamp: new Date(),
      };
      addMessage(aiMsg);
      setIsTyping(false);
      setIsLoading(false);
    }, 900);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header selectedTool={selectedTool} onToolChange={setSelectedTool} />
      <ChatContainer messages={messages} isTyping={isTyping} />
      <InputArea
        value={input}
        onChange={setInput}
        onSubmit={handleSend}
        isLoading={isLoading}
        selectedTool={selectedTool}
        onToolChange={setSelectedTool}
      />
    </div>
  );
};

export default App;
