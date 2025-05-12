/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Eye, EyeOff, ImageIcon, PencilIcon, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  // options: DropdownOption[];
  loading?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
  showLabel?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  required?: boolean;
  labelClassName?: string;
  variant?: "default" | "outline";
}


const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  icon,
  showLabel = true,
  containerClassName,
  inputClassName,
  labelClassName,
  variant = "default",
  required
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setValue(name, selectedFile)
        // setValue(name, reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const [preview, setPreview] = useState<string | null>(null);
  const handleRemoveFile = () => {
    setFile(null);
    setPreview(null);
    setValue(name, "");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const renderInput = () => {
    const baseClass = "w-full py-[16.4px] pl-[20px] rounded-[8.08px]";
    const defaultClass = "bg-inputGray text-color-1000";
    const outlineClass = "border-[#D9D9D9] border bg-white";
    const variantClass = variant === "outline" ? outlineClass : defaultClass;

    switch (type) {
      case "file":
        return (
          <div className="flex flex-col gap-3 w-full">
          {preview ? (
            <div className="relative w-32 h-32 border border-gray-300 rounded-md overflow-hidden">
              <img
                src={preview}
                alt="Preview"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-1 right-1 flex gap-1">
                <button
                  className="bg-white p-1 rounded-md shadow hover:bg-gray-100"
                  onClick={() => document.getElementById(name)?.click()}
                >
                  <PencilIcon className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  className="bg-white p-1 rounded-md shadow hover:bg-red-100"
                  onClick={handleRemoveFile}
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
          ) : (
            <div
              className="flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer"
              onClick={() => document.getElementById(name)?.click()}
            >
              <ImageIcon className="w-5 h-5 text-gray-500" />
              <p>{file ? file.name : "Upload a file"}</p>
            </div>
          )}
          <input
            type="file"
            id={name}
            {...register(name, { required: `${label} is required` })}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      );

      case "password":
        return (
          <>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id={name}
              {...register(name, { required: `${label} is required` })}
              className={cn(baseClass, variantClass, inputClassName)}
              placeholder={placeholder}
            />
            <div
              className="bg-color-1000 absolute right-0 top-0 p-4 rounded-[8.08px] w-fit cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeOff className="text-primary100" />
              ) : (
                <Eye className="text-primary100" />
              )}
            </div>
          </>
        );
      case "years":
        const currentYear = new Date().getFullYear();
        const years = Array.from(
          { length: currentYear - 1973 },
          (_, i) => 1974 + i
        );
        return (
          <select
            id={name}
            {...register(name, { required: `${label} is required` })}
            className={cn(baseClass, variantClass, inputClassName)}
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <>
            <input
              type={type}
              id={name}
              {...register(name, { required: `${label} is required` })}
              className={cn(baseClass, variantClass, inputClassName)}
              placeholder={placeholder}
            />
            {icon && (
              <div className="bg-color-1000 absolute right-0 top-0 p-4 rounded-[8.08px] w-fit">
                {icon}
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className={cn("w-full flex flex-col space-y-4", containerClassName)}>
      {showLabel && (
          <div className="flex items-center gap-2">
        <label className={cn("text-color-900 ", labelClassName)} htmlFor={name}>
          {label}
        </label>
        {
          required && (
            <div className="text-red-500 text-lg">
              <p>*</p>
            </div>
          )
        }
        </div>
        )}
      {type === "checkbox" ? (
        <div className="cursor-pointer justify-center flex gap-2 items-center  w-full">
          <div className="relative">{renderInput()}</div>
          <p className="text-textgreen  text-right font-medium">
            Agree with Terms and condition
          </p>
        </div>
      ) : (
        <div className="relative">{renderInput()}</div>
      )}
      {errors[name] && typeof errors[name]?.message === "string" && (
        <span className="text-red-500">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default InputField;