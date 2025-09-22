"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { login } from "@/lib/auth"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const user = login(email, password)
    if (user) {
      onLogin()
      setEmail("")
      setPassword("")
      setError("")
    } else {
      setError("Invalid credentials. Try: john@news.com / password (reporter) or jane@email.com / password (user)")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Login to NewsHub</DialogTitle>
          <DialogDescription>Enter your credentials to access your account.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              Login
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
        <div className="text-xs text-muted-foreground mt-4 p-3 bg-muted rounded">
          <p className="font-medium mb-1">Demo Accounts:</p>
          <p>Author: john@news.com / password</p>
          <p>User: jane@email.com / password</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
