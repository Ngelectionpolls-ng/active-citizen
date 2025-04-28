"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Upload, X } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  bio: z.string().max(500, { message: "Bio must not exceed 500 characters." }).optional(),
  location: z.string().optional(),
  website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileSettings() {
  const [isUploading, setIsUploading] = useState(false)
  
  // Default values from the dummy user
  const defaultValues: Partial<ProfileFormValues> = {
    name: "Adewale Johnson",
    username: "adewalej",
    bio: "I'm a tech enthusiast passionate about sustainability and community development. I love building impactful projects and supporting causes that bring positive change.",
    location: "Lagos, Nigeria",
    website: "https://adewale.dev",
  }

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    toast.success("Profile updated successfully")
    console.log(data)
  }

  const handleAvatarUpload = () => {
    setIsUploading(true)
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false)
      toast.success("Profile picture updated")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the platform
        </p>
      </div>
      <Separator />
      
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="w-24 h-24 border-2 border-muted">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Profile" />
            <AvatarFallback>
              <User className="w-10 h-10" />
            </AvatarFallback>
          </Avatar>
          
          <div className="flex gap-2 mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleAvatarUpload}
              disabled={isUploading}
              className="text-xs"
            >
              {isUploading ? (
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                  <span>Uploading...</span>
                </div>
              ) : (
                <>
                  <Upload className="mr-1 h-3 w-3" />
                  <span>Change</span>
                </>
              )}
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <X className="mr-1 h-3 w-3" />
              <span>Remove</span>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            JPG, PNG or GIF. 1MB max.
          </p>
        </div>
        
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormDescription>
                      Your unique username that others can use to find you.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Write a short bio about yourself. This will be displayed on your profile.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Lagos, Nigeria" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <Button type="submit">Save changes</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}