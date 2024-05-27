import { useEffect, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import MDEditor from "@uiw/react-md-editor";
import InputBox from "./InputBox";
import "./gemini.css";

const API_KEY = "AIzaSyAPaXrjEMUr0JbkuLV509LBZO4z7EYvm1E";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Header = () => {
    return (
        <div className="geminiHeader">
            <h2 className="chat-header">
                EduTrax Chatbot
            </h2>
        </div>
    );
};

const ChatWindow = () => {
    const chatContainerRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Auto-scroll to the bottom of the chat container when new messages are added
        chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
    }, [messages]);

    const sendMessage = async (inputText) => {
        if (!inputText) {
            return;
        }

        // Update messages with the user message
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: inputText, sender: "user", timestamp: new Date() },
        ]);

        setLoading(true);

        try {
            const result = await model.generateContent(inputText);
            const text = result.response.text();

            // Check if the response is code before updating messages
            const isCode = text.includes("```");

            // Replace markdown-style bold notation with HTML <strong> tags
            const formattedText = text
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                // Replace asterisks (*) with empty string to remove them
                .replace(/\*/g, "")
                // Replace dot (.) with <br> to start a new line
                .replace(/\.\s/g, ".<br>");

            // Update messages with the AI response
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: formattedText,
                    sender: "ai",
                    timestamp: new Date(),
                    isCode,
                },
            ]);

            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("generateContent error: ", error);
        }
    };

    return (
        <div className={`chat-window`}>
            <Header />
            <div className="geminicontainer" ref={chatContainerRef}>
                <div className="aiwelcom">
                    <p>Welcome to EduTrax Chatbot 🤖<br></br> How can i help you today 😊</p>
                </div>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.sender === "user" ? "user" : "ai"
                            }`}
                    >
                        {message.isCode ? (
                            <MDEditor.Markdown
                                source={message.text}
                                style={{ whiteSpace: "pre-wrap" }}
                            />
                        ) : (
                            <p
                                className="message-text"
                                dangerouslySetInnerHTML={{ __html: message.text }}
                            />
                        )}
                    </div>
                ))}
            </div>
            <InputBox sendMessage={sendMessage} loading={loading} />
        </div>
    );
};

export default ChatWindow;
