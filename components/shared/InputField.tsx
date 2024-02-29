import React from "react";
import { cn } from "@/libs/utils/tw.util";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  labelClassName?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, placeholder, className, type, labelClassName, ...props }, ref) => {
    return (
      <div className="group w-full">
        <label
          htmlFor="file"
          className={cn(
            "block font-normal py-1.5 ",
            labelClassName && `${labelClassName}`
          )}
        >
          {label}
        </label>

        <input
          ref={ref}
          type={type ? type : "text"}
          placeholder={`${placeholder ? placeholder : ""}`}
          className={cn(
            "block w-full placeholder-gray-400/70 rounded-xl border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 group-hover:ring-pink-100  focus:ring-opacity-40 hover:ring-offset-1 hover:ring hover:ring-pink-100 hover:ring-opacity-40 ",
            className && `${className}`
          )}
          {...props}
        />
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
