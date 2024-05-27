import { useState } from "react";
import "./gemini.css"

const InputBox = ({ sendMessage, loading }) => {
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
            sendMessage(input);
            setInput("");
        }
    };

    return (
        <div className="GeminiInputBox">
            {loading && (
                <span className="geminiTyping text-light">{isTyping && "EduTrax is Typing....."}</span>
            )}
            <input
                disabled={loading}
                type="text"
                className="form-control"
                placeholder="Type a message....."
                value={loading ? "Loading..." : input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};

export default InputBox;
