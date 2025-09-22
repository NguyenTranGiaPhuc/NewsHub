import type { User } from "./types"
import { mockUsers } from "./data"

// Simple mock authentication
let currentUser: User | null = null

export const getCurrentUser = (): User | null => {
  return currentUser
}

export const login = (email: string, password: string): User | null => {
  // Simple mock login - in real app, this would validate against a database
  const user = mockUsers.find((u) => u.email === email)
  if (user && password === "password") {
    currentUser = user
    return user
  }
  return null
}

export const logout = (): void => {
  currentUser = null
}

export const isReporter = (user: User | null): boolean => {
  return user?.role === "author"
}
