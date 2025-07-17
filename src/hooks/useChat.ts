import { useState } from 'react';
import type { ChatMessage } from '../types/chat';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (msg: ChatMessage) => setMessages((prev) => [...prev, msg]);
  const clearMessages = () => setMessages([]);

  return { messages, addMessage, clearMessages, isTyping, setIsTyping };
} 