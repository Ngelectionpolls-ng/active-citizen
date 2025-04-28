"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { toast } from "sonner"

const accountFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  joinDate: z.string().optional(),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

export function AccountSettings() {
  // Default values from the dummy user
  const defaultValues: Partial<AccountFormValues> = {
    email: "adewalej@example.com",
    joinDate: "Jan 2024",
  }

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: AccountFormValues) {
    toast.success("Account information updated")
    console.log(data)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account email and information
        </p>
      </div>
      <Separator />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is the email address you use to sign in.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="joinDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Member since</FormLabel>
                <FormControl>
                  <Input disabled {...field} />
                </FormControl>
                <FormDescription>
                  The date you joined the platform.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Alert variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Account Deletion</AlertTitle>
            <AlertDescription>
              Deleting your account is permanent and will remove all your data.
              <div className="mt-4">
                <Button variant="destructive" onClick={() => toast.error("Account deletion requires confirmation via email")}>
                  Delete account
                </Button>
              </div>
            </AlertDescription>
          </Alert>
          
          <Button type="submit">Save changes</Button>
        </form>
      </Form>
    </div>
  )
}