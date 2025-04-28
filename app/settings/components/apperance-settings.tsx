"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Moon, Sun, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark", "system"], {
    required_error: "Please select a theme.",
  }),
  fontSize: z.number().min(12).max(18),
  reduceMotion: z.boolean(),
  reduceTransparency: z.boolean(),
})

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>

export function AppearanceSettings() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Avoid hydration mismatch by only rendering after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      theme: (mounted && theme ? theme : "system") as "light" | "dark" | "system",
      fontSize: 14,
      reduceMotion: false,
      reduceTransparency: false,
    },
    mode: "onChange",
  })

  function onSubmit(data: AppearanceFormValues) {
    toast.success("Appearance settings updated")
    console.log(data)
    setTheme(data.theme)
  }
  
  // Apply font size changes live as the slider moves
  const currentFontSize = form.watch("fontSize")
  useEffect(() => {
    if (mounted) {
      document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}px`)
    }
  }, [currentFontSize, mounted])

  if (!mounted) return null

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize how the application looks and feels
        </p>
      </div>
      <Separator />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Theme</FormLabel>
                <FormDescription>
                  Select the theme for the dashboard.
                </FormDescription>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="grid grid-cols-3 gap-4 pt-2"
                  >
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="light" className="sr-only" />
                        </FormControl>
                        <div className={cn(
                          "flex items-center justify-center rounded-md border-2 border-muted p-4 cursor-pointer",
                          field.value === "light" && "border-primary"
                        )}>
                          <Sun className="h-5 w-5" />
                          <span className="ml-2">Light</span>
                        </div>
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="dark" className="sr-only" />
                        </FormControl>
                        <div className={cn(
                          "flex items-center justify-center rounded-md border-2 border-muted p-4 cursor-pointer",
                          field.value === "dark" && "border-primary"
                        )}>
                          <Moon className="h-5 w-5" />
                          <span className="ml-2">Dark</span>
                        </div>
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="system" className="sr-only" />
                        </FormControl>
                        <div className={cn(
                          "flex items-center justify-center rounded-md border-2 border-muted p-4 cursor-pointer",
                          field.value === "system" && "border-primary"
                        )}>
                          <Monitor className="h-5 w-5" />
                          <span className="ml-2">System</span>
                        </div>
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="fontSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Font Size: {field.value}px</FormLabel>
                <FormControl>
                  <Slider
                    min={12}
                    max={18}
                    step={1}
                    defaultValue={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>
                  Adjust the size of text throughout the application.
                </FormDescription>
              </FormItem>
            )}
          />
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Accessibility</h4>
            
            <FormField
              control={form.control}
              name="reduceMotion"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Reduce Motion</FormLabel>
                    <FormDescription>
                      Minimize animations throughout the interface
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="reduceTransparency"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Reduce Transparency</FormLabel>
                    <FormDescription>
                      Decrease transparent effects for better visibility
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          
          <Button type="submit">Save preferences</Button>
        </form>
      </Form>
    </div>
  )
}