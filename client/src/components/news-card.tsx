"use client"

import type React from "react"

import type { NewsArticle } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Edit, Trash2 } from "lucide-react"

interface NewsCardProps {
  article: NewsArticle
  onClick: () => void
  onEdit?: () => void
  onDelete?: () => void
}

export default function NewsCard({ article, onClick, onEdit, onDelete }: NewsCardProps) {
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onEdit?.()
  }

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onDelete?.()
  }

  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200 group" onClick={onClick}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {article.category}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {article.createdAt.toLocaleDateString()}
          </div>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
          {article.title}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">{article.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <User className="w-3 h-3" />
            {article.author}
          </div>

          {(onEdit || onDelete) && (
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {onEdit && (
                <Button variant="ghost" size="sm" onClick={handleEditClick} className="h-7 w-7 p-0 hover:bg-primary/10">
                  <Edit className="w-3 h-3" />
                </Button>
              )}
              {onDelete && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDeleteClick}
                  className="h-7 w-7 p-0 hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
