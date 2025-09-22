"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, Plus, LogOut, LogIn } from "lucide-react"
import { getCurrentUser, logout, isReporter } from "@/lib/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface HeaderProps {
  onSearch: (query: string) => void
  onUserChange: () => void
  onTopicFilter: (topic: string | null) => void
  selectedTopic: string | null
}

export default function Header({ onSearch, onUserChange, onTopicFilter, selectedTopic }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const user = getCurrentUser()
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleLogout = () => {
    logout()
    onUserChange()
    router.push("/")
  }

  const handleTopicClick = (topic: string) => {
    if (selectedTopic === topic) {
      onTopicFilter(null) // Clear filter if same topic clicked
    } else {
      onTopicFilter(topic)
    }
  }

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <h1 className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                NewsHub
              </h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Button
                variant={selectedTopic === "Technology" ? "default" : "ghost"}
                className="text-muted-foreground hover:text-foreground"
                onClick={() => handleTopicClick("Technology")}
              >
                Technology
              </Button>
              <Button
                variant={selectedTopic === "Business" ? "default" : "ghost"}
                className="text-muted-foreground hover:text-foreground"
                onClick={() => handleTopicClick("Business")}
              >
                Business
              </Button>
              <Button
                variant={selectedTopic === "Sports" ? "default" : "ghost"}
                className="text-muted-foreground hover:text-foreground"
                onClick={() => handleTopicClick("Sports")}
              >
                Sports
              </Button>
              <Button
                variant={selectedTopic === "Entertainment" ? "default" : "ghost"}
                className="text-muted-foreground hover:text-foreground"
                onClick={() => handleTopicClick("Entertainment")}
              >
                Entertainment
              </Button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button type="submit" size="sm">
                Search
              </Button>
            </form>

            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground hidden sm:inline">Welcome, {user.name}</span>
                {isReporter(user) && (
                  <Link href="/write">
                    <Button size="sm" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Write Article
                    </Button>
                  </Link>
                )}
                <Button onClick={handleLogout} variant="outline" size="sm" className="gap-2 bg-transparent">
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <Link href="/login">
                <Button size="sm" className="gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </Link>
            )}

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
