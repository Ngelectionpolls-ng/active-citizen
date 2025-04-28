"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Shield, Check, X } from "lucide-react"
import { toast } from "sonner"

const passwordFormSchema = z.object({
  currentPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  newPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
}).refine((data) => data.currentPassword !== data.newPassword, {
  message: "New password must be different from current password",
  path: ["newPassword"],
})

const securityFormSchema = z.object({
  twoFactorAuth: z.boolean(),
  sessionTimeout: z.boolean(),
  loginNotifications: z.boolean(),
})

type PasswordFormValues = z.infer<typeof passwordFormSchema>
type SecurityFormValues = z.infer<typeof securityFormSchema>

export function SecuritySettings() {
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [isEnabling2FA, setIsEnabling2FA] = useState(false)
  
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  })
  
  const securityForm = useForm<SecurityFormValues>({
    resolver: zodResolver(securityFormSchema),
    defaultValues: {
      twoFactorAuth: false,
      sessionTimeout: false,
      loginNotifications: true,
    },
    mode: "onChange",
  })

  function onPasswordSubmit(data: PasswordFormValues) {
    toast.success("Password changed successfully")
    console.log(data)
    setShowChangePassword(false)
    passwordForm.reset()
  }
  
  function onSecuritySubmit(data: SecurityFormValues) {
    toast.success("Security settings updated")
    console.log(data)
  }
  
  function handleToggle2FA(checked: boolean) {
    if (checked) {
      setIsEnabling2FA(true)
    } else {
      securityForm.setValue("twoFactorAuth", false)
      toast.success("Two-factor authentication disabled")
    }
  }
  
  function confirm2FAEnable() {
    securityForm.setValue("twoFactorAuth", true)
    setIsEnabling2FA(false)
    toast.success("Two-factor authentication enabled")
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Security</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account security and authentication settings
        </p>
      </div>
      <Separator />
      
      <div className="space-y-4">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h4 className="font-medium">Password</h4>
            <p className="text-sm text-muted-foreground">
              Change your password regularly to keep your account secure
            </p>
          </div>
          <Button variant="outline" onClick={() => setShowChangePassword(true)}>
            Change password
          </Button>
        </div>
        
        <Dialog open={showChangePassword} onOpenChange={setShowChangePassword}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Change password</DialogTitle>
              <DialogDescription>
                Enter your current password and a new password to update your login credentials.
              </DialogDescription>
            </DialogHeader>
            <Form {...passwordForm}>
              <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                <FormField
                  control={passwordForm.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={passwordForm.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                      <PasswordStrengthIndicator password={field.value} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={passwordForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        
        <Dialog open={isEnabling2FA} onOpenChange={setIsEnabling2FA}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Enable Two-Factor Authentication</DialogTitle>
              <DialogDescription>
                Scan the QR code with your authenticator app to enable 2FA.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center py-4">
              {/* Placeholder for QR code */}
              <div className="w-48 h-48 bg-gray-200 flex items-center justify-center border">
                <p className="text-xs text-gray-500">QR Code Placeholder</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm">
                Enter the 6-digit verification code from your authenticator app:
              </p>
              <div className="flex space-x-2 justify-center">
                {[...Array(6)].map((_, i) => (
                  <Input 
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-10 text-center"
                  />
                ))}
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEnabling2FA(false)}>
                Cancel
              </Button>
              <Button onClick={confirm2FAEnable}>
                Verify and Enable
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Separator />
      
      <Form {...securityForm}>
        <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)} className="space-y-8">
          <div className="space-y-4">
            <FormField
              control={securityForm.control}
              name="twoFactorAuth"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <FormLabel className="text-base">Two-Factor Authentication</FormLabel>
                      <Shield className="ml-2 h-4 w-4 text-muted-foreground" />
                    </div>
                    <FormDescription>
                      Add an extra layer of security to your account
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={handleToggle2FA}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={securityForm.control}
              name="sessionTimeout"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Automatic Session Logout</FormLabel>
                    <FormDescription>
                      Automatically log out after 1 hour of inactivity
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
              control={securityForm.control}
              name="loginNotifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Login Notifications</FormLabel>
                    <FormDescription>
                      Receive email alerts for new sign-ins to your account
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
          
          <Alert variant="default" className="bg-muted border-primary/20">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Security Recommendations</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                <li>Use a strong, unique password</li>
                <li>Enable two-factor authentication</li>
                <li>Check your recent login activity regularly</li>
                <li>Keep your recovery email updated</li>
              </ul>
            </AlertDescription>
          </Alert>
          
          <Button type="submit">Save changes</Button>
        </form>
      </Form>
    </div>
  )
}

function PasswordStrengthIndicator({ password }: { password: string }) {
  if (!password) return null
  
  const getStrength = (password: string): number => {
    let strength = 0
    if (password.length >= 8) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1
    return strength
  }
  
  const strength = getStrength(password)
  const strengthText = [
    "Weak", "Fair", "Good", "Strong"
  ][strength - 1] || ""
  
  const strengthColors = [
    "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"
  ]
  
  return (
    <div className="space-y-2">
      <div className="flex h-2 w-full gap-1">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`h-full w-1/4 rounded-sm ${
              level <= strength ? strengthColors[strength - 1] : "bg-muted"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs">
        <span>{strengthText}</span>
        <div className="space-x-2">
          {strength >= 1 ? <Check className="inline h-3 w-3 text-green-500" /> : <X className="inline h-3 w-3 text-red-500" />}
          <span>Min. 8 characters</span>
          
          {/[A-Z]/.test(password) ? <Check className="inline h-3 w-3 text-green-500" /> : <X className="inline h-3 w-3 text-red-500" />}
          <span>Uppercase</span>
          
          {/[0-9]/.test(password) ? <Check className="inline h-3 w-3 text-green-500" /> : <X className="inline h-3 w-3 text-red-500" />}
          <span>Number</span>
          
          {/[^A-Za-z0-9]/.test(password) ? <Check className="inline h-3 w-3 text-green-500" /> : <X className="inline h-3 w-3 text-red-500" />}
          <span>Symbol</span>
        </div>
      </div>
    </div>
  )
}