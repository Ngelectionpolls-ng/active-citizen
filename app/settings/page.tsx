"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountSettings } from './components/account-settings'
import { AdvancedSettings } from './components/advanced-settings'
import { AppearanceSettings } from './components/apperance-settings'
import { ConnectedAccounts } from './components/connected-accounts'
import { NotificationSettings } from './components/notifications-setting'
import { ProfileSettings } from './components/profile-settings'
import { SecuritySettings } from './components/security-settings'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-2 text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>
      
      <Tabs 
        defaultValue="profile" 
        value={activeTab}
        onValueChange={setActiveTab} 
        className="space-y-6"
      >
        <TabsList className="bg-muted p-1 h-auto flex flex-wrap gap-y-2 justify-start sm:justify-center">
          <TabsTrigger 
            value="profile"
            className="data-[state=active]:bg-black rounded-md px-3 py-2 text-sm"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger 
            value="account"
            className="data-[state=active]:bg-black rounded-md px-3 py-2 text-sm"
          >
            Account
          </TabsTrigger>
          <TabsTrigger 
            value="notifications"
            className="data-[state=active]:bg-black rounded-md px-3 py-2 text-sm"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger 
            value="appearance"
            className="data-[state=active]:bg-black rounded-md px-3 py-2 text-sm"
          >
            Appearance
          </TabsTrigger>
          <TabsTrigger 
            value="security"
            className="data-[state=active]:bg-black rounded-md px-3 py-2 text-sm"
          >
            Security
          </TabsTrigger>
          <TabsTrigger 
            value="connected-accounts"
            className="data-[state=active]:bg-black rounded-md px-3 py-2 text-sm"
          >
            Connected Accounts
          </TabsTrigger>
          <TabsTrigger 
            value="advanced"
            className="data-[state=active]:bg-black rounded-md px-3 py-2 text-sm"
          >
            Advanced
          </TabsTrigger>
        </TabsList>
        
        <div className="bg-card border rounded-lg shadow-sm">
          <TabsContent value="profile" className="p-6 focus:outline-none">
            <ProfileSettings />
          </TabsContent>
          
          <TabsContent value="account" className="p-6 focus:outline-none">
            <AccountSettings />
          </TabsContent>
          
          <TabsContent value="notifications" className="p-6 focus:outline-none">
            <NotificationSettings />
          </TabsContent>
          
          <TabsContent value="appearance" className="p-6 focus:outline-none">
            <AppearanceSettings />
          </TabsContent>
          
          <TabsContent value="security" className="p-6 focus:outline-none">
            <SecuritySettings />
          </TabsContent>
          
          <TabsContent value="connected-accounts" className="p-6 focus:outline-none">
            <ConnectedAccounts />
          </TabsContent>
          
          <TabsContent value="advanced" className="p-6 focus:outline-none">
            <AdvancedSettings />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}