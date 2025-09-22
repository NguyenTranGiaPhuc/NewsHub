"use client"

import type { NewsArticle } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, User } from "lucide-react"

interface ArticleModalProps {
  article: NewsArticle | null
  isOpen: boolean
  onClose: () => void
}

export default function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  if (!article) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary">{article.category}</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {article.createdAt.toLocaleDateString()}
            </div>
          </div>
          <DialogTitle className="text-2xl leading-tight text-balance">{article.title}</DialogTitle>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
            <User className="w-4 h-4" />
            {article.author}
          </div>
        </DialogHeader>
        <div className="mt-6">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{article.description}</p>
          <div className="prose prose-gray max-w-none">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
