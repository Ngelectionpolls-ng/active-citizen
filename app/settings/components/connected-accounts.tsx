"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { toast } from "sonner"

type ConnectedAccount = {
  id: string
  provider: 'google' | 'twitter' | 'github' | 'facebook'
  connected: boolean
  username?: string
  email?: string
  lastUsed?: string
}

const INITIAL_ACCOUNTS: ConnectedAccount[] = [
  {
    id: "google-1",
    provider: "google",
    connected: true,
    email: "adewalej@example.com",
    lastUsed: "2 days ago"
  },
  {
    id: "twitter-1",
    provider: "twitter",
    connected: true,
    username: "@adewalej",
    lastUsed: "1 week ago"
  },
  {
    id: "github-1",
    provider: "github",
    connected: false
  },
  {
    id: "facebook-1",
    provider: "facebook",
    connected: false
  }
]

export function ConnectedAccounts() {
  const [accounts, setAccounts] = useState<ConnectedAccount[]>(INITIAL_ACCOUNTS)
  const [isConnecting, setIsConnecting] = useState<string | null>(null)
  
  const handleToggleConnection = (accountId: string) => {
    setAccounts(prev => 
      prev.map(account => {
        if (account.id === accountId) {
          // If currently connected, disconnect immediately
          if (account.connected) {
            toast.success(`Disconnected from ${capitalize(account.provider)}`)
            return { ...account, connected: false }
          } 
          // If disconnected, show connecting state
          else {
            setIsConnecting(accountId)
            // Simulate connection process
            setTimeout(() => {
              setAccounts(current => 
                current.map(acc => 
                  acc.id === accountId 
                    ? { 
                        ...acc, 
                        connected: true,
                        lastUsed: "Just now",
                        ...(acc.provider === 'twitter' ? { username: "@adewalej" } : {}),
                        ...(acc.provider === 'google' ? { email: "adewalej@example.com" } : {})
                      } 
                    : acc
                )
              )
              setIsConnecting(null)
              toast.success(`Connected to ${capitalize(account.provider)}`)
            }, 1500)
            return account
          }
        }
        return account
      })
    )
  }
  
  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case 'google':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        )
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.14 9.14 0 01-2.88 1.1 4.48 4.48 0 00-7.64 4.08A12.7 12.7 0 013 2.16a4.48 4.48 0 001.39 5.98A4.41 4.41 0 012 7.5v.05a4.48 4.48 0 003.6 4.4 4.5 4.5 0 01-2 .08 4.48 4.48 0 004.19 3.12A9 9 0 012 19.54 12.66 12.66 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.4 8.4 0 0023 3z" />
          </svg>
        )
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297a12 12 0 00-3.79 23.4c.6.113.82-.26.82-.577v-2.234c-3.34.726-4.042-1.61-4.042-1.61a3.18 3.18 0 00-1.335-1.75c-1.093-.75.084-.735.084-.735a2.52 2.52 0 011.84 1.235 2.55 2.55 0 003.48.997 2.55 2.55 0 01.762-1.61c-2.66-.3-5.467-1.33-5.467-5.93a4.63 4.63 0 011.235-3.22 4.29 4.29 0 01.117-3.175s1.01-.322 3.3 1.23a11.46 11.46 0 016 0c2.29-1.552 3.3-1.23 3.3-1.23.48 1.295.434 2.747.117 3.175a4.63 4.63 0 011.236 3.22c0 4.61-2.807 5.628-5.48 5.922a2.85 2.85 0 01.813 2.22v3.293c0 .32.218.694.825.577A12.004 12.004 0 0012 .297z" />
          </svg>
        )
      case 'facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        )
      default:
        return null
    }
  }
  
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
  
  const getAccountDetails = (account: ConnectedAccount) => {
    if (!account.connected) return "Not connected"
    
    if (account.provider === 'google' && account.email) {
      return (
        <div className="text-sm">
          <p>{account.email}</p>
          <p className="text-xs text-muted-foreground">Last used: {account.lastUsed}</p>
        </div>
      )
    }
    
    if (account.provider === 'twitter' && account.username) {
      return (
        <div className="text-sm">
          <p>{account.username}</p>
          <p className="text-xs text-muted-foreground">Last used: {account.lastUsed}</p>
        </div>
      )
    }
    
    return "Connected"
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Connected Accounts</h3>
        <p className="text-sm text-muted-foreground">
          Connect your accounts to enable single sign-on and additional features
        </p>
      </div>
      <Separator />
      
      <Alert variant="default" className="bg-muted border-primary/20">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Why connect accounts?</AlertTitle>
        <AlertDescription>
          <p className="text-sm mt-2">
            Connecting accounts allows you to:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
            <li>Sign in more easily with accounts you already use</li>
            <li>Share content directly to social platforms</li>
            <li>Import and sync your contacts (with your permission)</li>
          </ul>
        </AlertDescription>
      </Alert>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {accounts.map((account) => (
          <Card key={account.id} className={`${account.connected ? 'border-primary/20' : 'border-muted'}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-full ${getProviderColor(account.provider)}`}>
                    {getProviderIcon(account.provider)}
                  </div>
                  <CardTitle className="text-base">{capitalize(account.provider)}</CardTitle>
                </div>
                <div className={`h-2 w-2 rounded-full ${account.connected ? 'bg-green-500' : 'bg-gray-300'}`} />
              </div>
              <CardDescription className="pt-1">
                {getAccountDetails(account)}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                variant={account.connected ? "outline" : "default"}
                className="w-full"
                onClick={() => handleToggleConnection(account.id)}
                disabled={isConnecting !== null}
              >
                {isConnecting === account.id ? (
                  <div className="flex items-center">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2"></div>
                    Connecting...
                  </div>
                ) : account.connected ? "Disconnect" : "Connect"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="rounded-lg border p-4 mt-8">
        <h4 className="font-medium mb-2">Data Sharing Settings</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Control what information is shared with connected accounts
        </p>
        
        <div className="space-y-4">
          {['Profile information', 'Your posts and activities', 'Email address', 'Friend/contact list'].map((item, i) => (
            <div key={i} className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id={`permission-${i}`}
                  type="checkbox"
                  defaultChecked={i < 2}
                  className="h-4 w-4 rounded border-gray-300"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor={`permission-${i}`} className="font-medium">
                  {item}
                </label>
                <p className="text-muted-foreground">
                  {getPermissionDescription(i)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getProviderColor(provider: string): string {
  switch (provider) {
    case 'google':
      return 'bg-white text-gray-800';
    case 'twitter':
      return 'bg-[#1DA1F2] text-white';
    case 'github':
      return 'bg-[#24292e] text-white';
    case 'facebook':
      return 'bg-[#4267B2] text-white';
    default:
      return 'bg-gray-100';
  }
}

function getPermissionDescription(index: number): string {
  switch (index) {
    case 0:
      return "Share your name, username, and profile photo";
    case 1:
      return "Allow connected services to see your public posts";
    case 2:
      return "Share your email with connected services";
    case 3:
      return "Allow importing contacts from connected services";
    default:
      return "";
  }
}