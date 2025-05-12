"use client";

import { useState, useEffect, useRef } from "react";
import { Check, ChevronsUpDown, Globe } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface CountryDropdownProps {
  name: string;
  label: string;
  placeholder: string;
  options: { code: string; name: string }[];
  onChange?: (value: string) => void;
  required?: boolean;
}

const CountryDropdown = ({
  name,
  label,
  placeholder,
  options,
  onChange,
  required
}: CountryDropdownProps) => {
  const { control, setValue } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2">
          <FormLabel className="text-[14px] font-normal text-[#333333]">
            <div className="flex items-center gap-2">
                   <p>

                      {label}
                   </p>
                    {
                      required && (
                          <p className="text-red-500 text-lg">*</p>
                      )
                    }
                    </div>
          </FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "py-4 h-[unset] flex justify-between px-4 rounded-md border border-[#E5E5E5] w-full text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w20/${field.value.toLowerCase()}.png`}
                        width="20"
                        height="15"
                        alt={field.value}
                        className="mr-2"
                      />
                      {options.find((option) => option.code === field.value)
                        ?.name || placeholder}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-textgreen" />
                      {placeholder}
                    </div>
                  )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput
                  placeholder={`Search ${label.toLowerCase()}...`}
                />
                <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
                <CommandGroup className="max-h-64 overflow-y-auto">
                  {options.map((option) => (
                    <CommandItem
                      value={option.name}
                      key={option.code}
                      onSelect={() => {
                        setValue(name, option.code);
                        if (onChange) onChange(option.code);
                        setOpen(false);
                      }}
                    >
                      <img
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        width="20"
                        height="15"
                        alt={option.name}
                        className="mr-2"
                      />
                      {option.name}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          option.code === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CountryDropdown;
