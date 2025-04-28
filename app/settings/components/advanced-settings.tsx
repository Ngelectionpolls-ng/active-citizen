"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Download, AlertTriangle, RefreshCw } from "lucide-react"
import { toast } from "sonner"

const advancedFormSchema = z.object({
  dataRetention: z.enum(["30days", "90days", "1year", "forever"], {
    required_error: "Please select a data retention period.",
  }),
  activityTracking: z.boolean({
    required_error: "Activity tracking is required.",
  }),
  autoDeleteData: z.boolean({
    required_error: "Auto-delete data is required.",
  }),
  syncFrequency: z.enum(["realtime", "hourly", "daily", "weekly"], {
    required_error: "Please select a sync frequency.",
  }),
  cacheStrategy: z.enum(["aggressive", "balanced", "minimal"], {
    required_error: "Please select a cache strategy.",
  }),
})

type AdvancedFormValues = z.infer<typeof advancedFormSchema>

export function AdvancedSettings() {
  const form = useForm<AdvancedFormValues>({
    resolver: zodResolver(advancedFormSchema),
    defaultValues: {
      dataRetention: "1year",
      activityTracking: true,
      autoDeleteData: false,
      syncFrequency: "daily",
      cacheStrategy: "balanced",
    },
    mode: "onChange",
  })

  function onSubmit(data: AdvancedFormValues) {
    toast.success("Advanced settings updated")
    console.log(data)
  }
  
  function handleExportData() {
    toast.success("Your data export is being prepared")
    // In a real app, this would trigger a data export process
  }
  
  function handleRefreshCache() {
    toast("Refreshing application cache...", {
      duration: 3000,
    })
    
    // Simulate refreshing
    setTimeout(() => {
      toast.success("Application cache refreshed", {
        description: "All caches have been cleared and rebuilt",
      })
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Advanced Settings</h3>
        <p className="text-sm text-muted-foreground">
          Configure system behavior, data management, and performance settings
        </p>
      </div>
      <Separator />
      
      <Tabs defaultValue="data" className="space-y-6">
        <TabsList className="bg-muted/60 p-1 h-auto flex">
          <TabsTrigger 
            value="data"
            className="data-[state=active]:bg-background rounded-md px-3 py-2 text-sm"
          >
            Data Management
          </TabsTrigger>
          <TabsTrigger 
            value="performance"
            className="data-[state=active]:bg-background rounded-md px-3 py-2 text-sm"
          >
            Performance
          </TabsTrigger>
          <TabsTrigger 
            value="export"
            className="data-[state=active]:bg-background rounded-md px-3 py-2 text-sm"
          >
            Export & Import
          </TabsTrigger>
        </TabsList>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <TabsContent value="data" className="space-y-6 focus:outline-none">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="dataRetention"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data Retention Period</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full sm:w-[240px]">
                            <SelectValue placeholder="Select a period" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="30days">30 days</SelectItem>
                          <SelectItem value="90days">90 days</SelectItem>
                          <SelectItem value="1year">1 year</SelectItem>
                          <SelectItem value="forever">Forever</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        How long your activity data is stored before being automatically anonymized
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="activityTracking"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Activity Tracking</FormLabel>
                        <FormDescription>
                          Track your interactions and activity for better recommendations
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
                  name="autoDeleteData"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Auto-Delete Inactive Data</FormLabel>
                        <FormDescription>
                          Automatically remove data from campaigns you haven't interacted with
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
            </TabsContent>
            
            <TabsContent value="performance" className="space-y-6 focus:outline-none">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="syncFrequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sync Frequency</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="realtime" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Real-time (higher data usage)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="hourly" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Hourly
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="daily" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Daily (recommended)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="weekly" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Weekly (lowest data usage)
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormDescription>
                        How often your data should sync with our servers
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cacheStrategy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cache Strategy</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full sm:w-[240px]">
                            <SelectValue placeholder="Select a strategy" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="aggressive">Aggressive (best performance)</SelectItem>
                          <SelectItem value="balanced">Balanced (recommended)</SelectItem>
                          <SelectItem value="minimal">Minimal (lowest memory usage)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Controls how aggressively the app caches data for offline use
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium">Application Cache</h4>
                    <p className="text-xs text-muted-foreground">Clear and refresh the application cache</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleRefreshCache}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh Cache
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="export" className="space-y-6 focus:outline-none">
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="text-sm font-medium mb-2">Export Your Data</h4>
                  <p className="text-xs text-muted-foreground mb-4">
                    Download all your personal data in a portable format
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="export-profile"
                          type="checkbox"
                          defaultChecked={true}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="export-profile" className="font-medium">
                          Profile Information
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="export-campaigns"
                          type="checkbox"
                          defaultChecked={true}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="export-campaigns" className="font-medium">
                          Campaign Data
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="export-activity"
                          type="checkbox"
                          defaultChecked={true}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="export-activity" className="font-medium">
                          Activity History
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={handleExportData}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                </div>
                
                <Alert variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Data Reset</AlertTitle>
                  <AlertDescription>
                    <p className="mt-2 text-sm">
                      This will permanently erase all your data and reset your account to its default state. This action cannot be undone.
                    </p>
                    <Button 
                      variant="destructive" 
                      className="mt-4"
                      onClick={() => toast.error("Data reset requires email confirmation")}
                    >
                      Reset All Data
                    </Button>
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>
            
            <Button type="submit">Save all settings</Button>
          </form>
        </Form>
      </Tabs>
    </div>
  )
}