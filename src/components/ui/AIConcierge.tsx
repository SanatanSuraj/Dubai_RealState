/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Import Next.js Image component

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  richContent?: {
    type: 'property' | 'map' | 'floorplan' | 'buttons';
    data: any;
  };
}

const AIConcierge = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial greeting message when chat opens
  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      // Simulate AI typing delay
      setIsTyping(true);
      setTimeout(() => {
        const greeting: Message = {
          id: `ai-${Date.now()}`,
          text: "Welcome to Dubai Signature Estates. How can I assist with your property journey today?",
          isUser: false,
          timestamp: new Date(),
        };
        setMessages([greeting]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isChatOpen, messages.length]);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');
    
    // Simulate AI response
    simulateAIResponse(inputValue);
  };
  
  const simulateAIResponse = (userQuery: string) => {
    setIsTyping(true);
    
    // This is where you would integrate with your actual AI backend
    // For now we'll simulate a response based on keywords
    
    setTimeout(() => {
      let aiMessage: Message;
      
      if (userQuery.toLowerCase().includes('palm jumeirah') || userQuery.toLowerCase().includes('villa')) {
        aiMessage = {
          id: `ai-${Date.now()}`,
          text: "I found some exceptional villas at Palm Jumeirah that might interest you. This is one of our signature offerings:",
          isUser: false,
          timestamp: new Date(),
          richContent: {
            type: 'property',
            data: {
              title: 'Signature Palm Jumeirah Villa',
              price: 'AED 28,500,000',
              bedrooms: 5,
              bathrooms: 7,
              area: '10,500 sq.ft',
              location: 'Palm Jumeirah, Frond M',
              image: 'https://via.placeholder.com/500x300?text=Luxury+Palm+Villa'
            }
          }
        };
      } else if (userQuery.toLowerCase().includes('contact') || userQuery.toLowerCase().includes('viewing') || userQuery.toLowerCase().includes('tour')) {
        aiMessage = {
          id: `ai-${Date.now()}`,
          text: "I'd be happy to arrange a viewing for you. Would you prefer a personal tour or a virtual viewing first?",
          isUser: false,
          timestamp: new Date(),
          richContent: {
            type: 'buttons',
            data: {
              options: [
                { label: 'Schedule Personal Tour', value: 'personal' },
                { label: 'Request Virtual Viewing', value: 'virtual' },
                { label: 'Speak to an Advisor', value: 'advisor' }
              ]
            }
          }
        };
      } else if (userQuery.toLowerCase().includes('price') || userQuery.toLowerCase().includes('cost') || userQuery.toLowerCase().includes('budget')) {
        aiMessage = {
          id: `ai-${Date.now()}`,
          text: "Dubai offers luxury properties across various price points. Could you share your budget range so I can recommend suitable options?",
          isUser: false,
          timestamp: new Date()
        };
      } else {
        aiMessage = {
          id: `ai-${Date.now()}`,
          text: "Thank you for your interest in Dubai's premium properties. Would you like me to help you find specific properties, explain the buying process, or connect you with our advisors?",
          isUser: false,
          timestamp: new Date()
        };
      }
      
      setMessages(prevMessages => [...prevMessages, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const toggleVoice = () => {
    setIsVoiceActive(prev => !prev);
    // Here you would integrate with the Web Speech API
    // For now it's just a UI toggle
  };
  
  const handleButtonResponse = (option: string) => {
    // Add the user's choice as a message
    const buttonMessage: Message = {
      id: `user-${Date.now()}`,
      text: option,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, buttonMessage]);
    
    // Then simulate AI response to that choice
    simulateAIResponse(option);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full ${
          isChatOpen ? 'bg-obsidian-black' : 'bg-deep-teal'
        } text-pearl-white shadow-lg flex items-center justify-center z-50 border-2 border-desert-gold focus:outline-none`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-full sm:w-96 h-[80vh] max-h-[600px] bg-pearl-white rounded-xl shadow-2xl overflow-hidden z-50 border border-desert-gold/30 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat Header */}
            <div className="bg-rich-navy p-4 text-pearl-white flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-deep-teal flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-playfair font-medium">Dubai Realty AI</h3>
                  <p className="text-xs text-pearl-white/70">Online | Instant Assistance</p>
                </div>
              </div>
              <div>
                <button 
                  className={`w-8 h-8 rounded-full ${isVoiceActive ? 'bg-desert-gold' : 'bg-deep-teal/50'} flex items-center justify-center transition-colors`}
                  onClick={toggleVoice}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Messages Area */}
            <div className="flex-grow p-4 overflow-y-auto bg-pearl-white/95">
              <div className="space-y-4">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] rounded-xl p-3 ${
                        message.isUser 
                          ? 'bg-deep-teal text-pearl-white rounded-tr-none' 
                          : 'bg-rich-navy/10 text-rich-navy rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      
                      {/* Rich content rendering */}
                      {message.richContent && (
                        <div className="mt-3">
                          {message.richContent.type === 'property' && (
                            <div className="rounded-lg overflow-hidden border border-desert-gold/30">
                              <Image 
                                src={message.richContent.data.image}
                                alt={message.richContent.data.title}
                                className="w-full h-36 object-cover"
                                width={500}
                                height={300}
                              />
                              <div className="p-3 bg-pearl-white">
                                <h4 className="font-lora text-base font-medium">{message.richContent.data.title}</h4>
                                <p className="text-desert-gold text-sm font-medium">{message.richContent.data.price}</p>
                                <div className="flex justify-between text-xs text-rich-navy/70 mt-2">
                                  <span>{message.richContent.data.bedrooms} BD</span>
                                  <span>{message.richContent.data.bathrooms} BA</span>
                                  <span>{message.richContent.data.area}</span>
                                </div>
                                <button className="mt-2 w-full bg-deep-teal text-pearl-white rounded py-1 text-xs">
                                  View Details
                                </button>
                              </div>
                            </div>
                          )}
                          
                          {message.richContent.type === 'buttons' && (
                            <div className="flex flex-col space-y-2 mt-2">
                              {message.richContent.data.options.map((option: any, idx: number) => (
                                <button
                                  key={idx}
                                  className="text-left px-3 py-2 bg-pearl-white rounded border border-deep-teal text-deep-teal text-xs hover:bg-deep-teal hover:text-pearl-white transition-colors"
                                  onClick={() => handleButtonResponse(option.label)}
                                >
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className={`text-xs mt-1 ${message.isUser ? 'text-pearl-white/70' : 'text-rich-navy/50'}`}>
                        {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* AI typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-rich-navy/10 rounded-xl rounded-tl-none p-3 max-w-[85%]">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 bg-deep-teal rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-deep-teal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 bg-deep-teal rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Invisible div for scroll anchoring */}
                <div ref={messagesEndRef}></div>
              </div>
            </div>
            
            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="border-t border-desert-gold/20 p-3 bg-pearl-white flex items-center">
              <input
                type="text"
                placeholder="Type your message here..."
                className="flex-grow h-10 px-3 rounded-l-full border border-r-0 border-rich-navy/20 focus:outline-none focus:border-desert-gold transition-colors bg-transparent"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ref={inputRef}
              />
              <button 
                type="submit"
                className="bg-deep-teal hover:bg-desert-gold transition-colors text-pearl-white rounded-r-full px-4 h-10 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            
            {/* Privacy notice */}
            <div className="text-center bg-pearl-white border-t border-desert-gold/20 py-1.5 px-2">
              <p className="text-[10px] text-rich-navy/50">Your data is secure & encrypted. <a href="/privacy" className="text-deep-teal hover:underline">Privacy Policy</a></p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIConcierge;
