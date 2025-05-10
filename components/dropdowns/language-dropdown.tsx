"use client";

import { Check, Globe2 } from "lucide-react";
import { useState } from "react";
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
import { languages } from "@/utils/languages";
import { cn } from "@/lib/utils";

export function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <img
            src={`https://flagcdn.com/w20/${selectedLanguage.flag.toLowerCase()}.png`}
            width="20"
            height="15"
            alt={selectedLanguage.name}
          />
          <span className="hidden md:inline-block">
            {selectedLanguage.name}
          </span>
          <Globe2 className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.code}
                value={language.name}
                onSelect={() => {
                  setSelectedLanguage(language);
                  setOpen(false);
                }}
              >
                <img
                  src={`https://flagcdn.com/w20/${language.flag.toLowerCase()}.png`}
                  width="20"
                  height="15"
                  alt={language.name}
                  className="mr-2"
                />
                {language.name}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedLanguage.code === language.code
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
  );
}
