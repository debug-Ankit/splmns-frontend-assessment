"use client";

import React, { useState } from "react";

type TagInputFormProps = {
  onSubmit: (value: string) => void;
};

const TagInputForm: React.FC<TagInputFormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        value={input}
        required
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 shadow"
        placeholder="Your text here"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default TagInputForm;
