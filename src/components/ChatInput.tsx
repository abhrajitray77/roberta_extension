import React, { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import query from "../lib/query"; // import the query function
import Res from "./Res";


const ChatInput = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(""); // response state

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    // call the query function with the prompt and model
    const response = await query(input);
    setResponse(response);

  };

  return (
    <div className="">
      <form
        className="mt-2 bg-gray-800 text-gray-400 rounded-lg text-sm p-5 space-x-5 flex"
        onSubmit={sendMessage}
      >
        <input
          type="text"
          className="bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300 focus:outline-none"
          value={prompt}
          onChange={(ch) => {setPrompt(ch.target.value)}}
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          disabled={!prompt}
          className="flex bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
        </button>
      </form>
      <Res response={response} />
    </div>
  );
};

export default ChatInput;
