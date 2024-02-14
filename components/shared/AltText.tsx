import React, { useState, useEffect } from "react";
import { BlockType, useBlock } from "@/hooks/zustandStore";

interface AltTextProps {
  label?: string;
  className: string;
  placeholder: string;
  blockType: BlockType;
  fileIndex: number;
}

export default function AltText({
  label,
  className,
  placeholder,
  blockType,
  fileIndex,
}: AltTextProps) {
  const { boardData, updateAltText } = useBlock();
  const [altText, setAltText] = useState("");

  useEffect(() => {
    const fileData = boardData[blockType]?.files[fileIndex];
    if (fileData) {
      setAltText(fileData.altText);
    }
  }, [boardData, blockType, fileIndex]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAltText = event.target.value;
    setAltText(newAltText);
    updateAltText(blockType, fileIndex, newAltText);
  };

  return (
    <div>
      <label htmlFor="file" className="block font-normal mt-4 py-1.5 pt-4">
        {label}
      </label>

      <input
        type="text"
        placeholder={`${placeholder}`}
        className={`${className}`}
        value={altText}
        onChange={handleChange}
      />
    </div>
  );
}
