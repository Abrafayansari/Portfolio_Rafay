
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Correctly initialize GoogleGenAI using process.env.API_KEY directly as required
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let activeChat: Chat | null = null;

export const initChat = () => {
  activeChat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return activeChat;
};

export const sendMessage = async (message: string) => {
  if (!activeChat) {
    activeChat = initChat();
  }
  
  // Use the .text property from GenerateContentResponse as per guidelines
  const response = await activeChat.sendMessage({ message });
  return response.text;
};
