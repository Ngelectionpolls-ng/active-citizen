"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface DropdownOption {
  name: string;
  value: string;
}

interface DropdownProps {
  name: string;
  label: string;
  options: DropdownOption[];
  loading?: boolean;
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange?: (value: string) => void;
}

const CustomDropdown: React.FC<DropdownProps> = ({
  name,
  label,
  options,
  loading = false,
  placeholder = "Select an option",
  containerClassName,
  inputClassName,
  labelClassName,
  onChange,
}) => {
  const { register, setValue, formState: { errors } } = useFormContext();
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    setValue(name, value); // Update the form value in react-hook-form
    onChange?.(value); // Trigger the custom onChange handler
  };

  return (
    <div className={cn("w-full flex flex-col space-y-4", containerClassName)}>
      {label && (
        <label className={cn("text-color-900", labelClassName)} htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative">
        {loading ? (
          <div className="flex items-center justify-center w-full py-3 border rounded bg-gray-100">
            <Loader2 className="animate-spin" /> {/* Replace with your preferred loading indicator */}
          </div>
        ) : (
          <select
            id={name}
            className={cn(
              "w-full py-[16.4px] pl-[20px] rounded-[8.08px] bg-inputGray border-gray-300",
              inputClassName
            )}
            {...register(name, { required: `${label} is required` })}
            onChange={handleChange}
            value={selectedValue}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        )}
      </div>
      {errors[name] && typeof errors[name]?.message === "string" && (
        <span className="text-red-500">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default CustomDropdown;