"use client";

import { Check, DollarSign } from "lucide-react";
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
import { currencies } from "@/utils/currencies";
import { cn } from "@/lib/utils";

export function CurrencyDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-gray-100/50 transition-colors">
          <div className="w-5 h-5 relative flex items-center">
            <img
              src={`https://flagcdn.com/w20/${selectedCurrency.flag.toLowerCase()}.png`}
              width="20"
              height="15"
              alt={selectedCurrency.name}
              className="object-cover rounded-sm"
            />
          </div>
          <span className="hidden md:inline-block text-sm font-medium">
            {selectedCurrency.symbol}
          </span>
          <DollarSign className="h-4 w-4 text-gray-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandEmpty>No currency found.</CommandEmpty>
          <CommandGroup>
            {currencies.map((currency) => (
              <CommandItem
                key={currency.code}
                value={currency.name}
                onSelect={() => {
                  setSelectedCurrency(currency);
                  setOpen(false);
                }}
              >
                <img
                  src={`https://flagcdn.com/w20/${currency.flag.toLowerCase()}.png`}
                  width="20"
                  height="15"
                  alt={currency.name}
                  className="mr-2"
                />
                {currency.name} ({currency.symbol})
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedCurrency.code === currency.code
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