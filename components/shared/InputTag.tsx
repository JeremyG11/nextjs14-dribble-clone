import { FaX } from "react-icons/fa6";
import React, { useState } from "react";

function TagsInput() {
  const allSuggestions = [
    "ui",
    "ux",
    "graphic design",
    "illustration",
    "branding",
    "logo",
    "typography",
    "animation",
    "motion design",
    "3d",
    "app",
  ];

  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>(allSuggestions);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input && tags.length < 20) {
      setTags([...tags, input]);
      setInput("");
    }
  };

  const handleDelete = (index: number) => {
    const newTags = [...tags];
    const removedTag = newTags.splice(index, 1)[0];

    setTags(newTags);

    if (allSuggestions.includes(removedTag)) {
      setSuggestions((prev) => [...prev, removedTag]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (tags.length < 20) {
      setTags([...tags, suggestion]);
      setSuggestions(suggestions.filter((s) => s !== suggestion));
    }
  };

  return (
    <div className="space-y-2">
      <h2>
        Tags<span className="text-gray-500 text-sm">(maximimum 20)</span>
      </h2>
      <div className="flex flex-wrap gap-y-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white p-2.5 text-gray-700 hover:border-pink-300 hover:outline-none hover:ring hover:ring-pink-200 hover:ring-opacity-40">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="mx-0.5 flex items-center justify-center px-1.5 py-0.5 bg-gray-300 rounded"
          >
            <p className="text-sm px-1 text-black"> {tag}</p>
            <button
              onClick={() => handleDelete(index)}
              className="ml-1 w-4 h-4 rounded-full p-0 flex items-center justify-center text-sm transition-all duration-175 ease-out hover:bg-black hover:text-gray-200 hover:p-0.5 "
            >
              <FaX className="text-[8px]" />
            </button>
          </div>
        ))}
        <input
          type="text"
          value={input}
          disabled={tags.length >= 20}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length > 0 ? "" : "Add tags..."}
          className="m-1 h-5 outline-none w-auto min-w-16 placeholder:text-sm"
          style={{ width: `${input.length + 1}ch` }}
        />
      </div>

      <div className="flex flex-wrap items-center">
        {suggestions.length > 0 && <p className="text-sm">Suggested:</p>}
        {suggestions.map((suggestion, index) => (
          <p
            key={index}
            className="m-1 text-sm leading-3 text-gray-500 cursor-pointer"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion},
          </p>
        ))}
      </div>
    </div>
  );
}

export default TagsInput;
