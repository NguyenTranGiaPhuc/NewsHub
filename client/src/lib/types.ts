export interface NewsArticle {
  id: string
  title: string
  description: string
  content: string
  category: string
  author: string
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  name: string
  email: string
  role: "author" | "user"
}

export type NewsCategory = "Technology" | "Business" | "Sports" | "Entertainment" | "Politics" | "Health"
