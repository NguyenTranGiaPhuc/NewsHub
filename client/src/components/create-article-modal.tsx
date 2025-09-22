"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { NewsArticle, NewsCategory } from "@/lib/types"
import { categories } from "@/lib/data"
import { getCurrentUser } from "@/lib/auth"

interface CreateArticleModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (article: Omit<NewsArticle, "id">) => void
  editingArticle?: NewsArticle | null
}

export default function CreateArticleModal({ isOpen, onClose, onSave, editingArticle }: CreateArticleModalProps) {
  const [title, setTitle] = useState(editingArticle?.title || "")
  const [description, setDescription] = useState(editingArticle?.description || "")
  const [content, setContent] = useState(editingArticle?.content || "")
  const [category, setCategory] = useState<NewsCategory>((editingArticle?.category as NewsCategory) || "Technology")

  const user = getCurrentUser()
  const isEditing = !!editingArticle

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    const articleData: Omit<NewsArticle, "id"> = {
      title,
      description,
      content,
      category,
      author: user.name,
      createdAt: editingArticle?.createdAt || new Date(),
      updatedAt: new Date(),
    }

    onSave(articleData)

    // Reset form
    setTitle("")
    setDescription("")
    setContent("")
    setCategory("Technology")
    onClose()
  }

  const handleClose = () => {
    setTitle(editingArticle?.title || "")
    setDescription(editingArticle?.description || "")
    setContent(editingArticle?.content || "")
    setCategory((editingArticle?.category as NewsCategory) || "Technology")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Article" : "Create New Article"}</DialogTitle>
          <DialogDescription>
            {isEditing ? "Update your article details below." : "Fill in the details to create a new news article."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter article title"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={(value: string) => setCategory(value as NewsCategory)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a brief description of the article"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter the full article content"
              rows={12}
              required
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              {isEditing ? "Update Article" : "Create Article"}
            </Button>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
