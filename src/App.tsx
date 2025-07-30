import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import SignIn from './components/Common/SignIn';
import { Header } from './components/Header/Header';
import { ChatContainer } from './components/Chat/ChatContainer';
import { InputArea } from './components/Input/InputArea';
import { useToolSelection } from './hooks/useToolSelection';
import { useChat } from './hooks/useChat';
import type { ChatMessage } from './types/chat';

// ProtectedRoute component
const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem('auth_token');
  return token ? <Outlet /> : <Navigate to="/signin" replace />;
};

const ChatApp: React.FC = () => {
  const { selectedTool, setSelectedTool } = useToolSelection();
  const { messages, addMessage, isTyping, setIsTyping } = useChat();
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSend = async () => {
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
    try {
      const token = localStorage.getItem('auth_token');
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ question: input, tool: selectedTool }),
      });
      if (!res.ok) throw new Error('Failed to get response');
      const data = await res.json();
      // Only show the 'answer' field from the response, formatted nicely
      const aiMsg: ChatMessage = {
        id: Date.now() + '-ai',
        type: 'assistant',
        content: data.answer || (typeof data === 'string' ? data : JSON.stringify(data)),
        timestamp: new Date(),
      };
      addMessage(aiMsg);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Error getting response';
      const aiMsg: ChatMessage = {
        id: Date.now() + '-ai',
        type: 'assistant',
        content: errorMsg,
        timestamp: new Date(),
      };
      addMessage(aiMsg);
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
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

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<ChatApp />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
