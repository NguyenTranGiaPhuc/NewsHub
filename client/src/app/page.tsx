"use client"

import { useState, useMemo } from "react"
import type { NewsArticle } from "@/lib/types"
import { mockArticles } from "@/lib/data"
import { getCurrentUser, isReporter } from "@/lib/auth"
import Header from "@/components/header"
import NewsCard from "@/components/news-card"
import ArticleModal from "@/components/article-modal"

export default function HomePage() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [articles, setArticles] = useState<NewsArticle[]>(mockArticles)
  const [userChanged, setUserChanged] = useState(0) // Force re-render when user changes
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  const user = getCurrentUser()

  const filteredArticles = useMemo(() => {
    let filtered = articles

    if (selectedTopic) {
      filtered = filtered.filter((article) => article.category === selectedTopic)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query) ||
          article.author.toLowerCase().includes(query),
      )
    }

    return filtered
  }, [searchQuery, articles, selectedTopic])

  const sortedArticles = useMemo(() => {
    return [...filteredArticles].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }, [filteredArticles])

  const handleDeleteArticle = (articleId: string) => {
    setArticles(articles.filter((article) => article.id !== articleId))
    setSelectedArticle(null)
  }

  const handleUserChange = () => {
    setUserChanged((prev) => prev + 1) // Force re-render
  }

  const handleTopicFilter = (topic: string | null) => {
    setSelectedTopic(topic)
    setSearchQuery("") // Clear search when filtering by topic
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSearch={setSearchQuery}
        onUserChange={handleUserChange}
        onTopicFilter={handleTopicFilter}
        selectedTopic={selectedTopic}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            {selectedTopic
              ? `${selectedTopic} News`
              : searchQuery
                ? `Search Results for "${searchQuery}"`
                : "Latest News"}
          </h2>
          <p className="text-muted-foreground">
            {selectedTopic
              ? `Browse the latest ${selectedTopic.toLowerCase()} articles`
              : searchQuery
                ? `Found ${sortedArticles.length} article${sortedArticles.length !== 1 ? "s" : ""}`
                : "Stay informed with the latest breaking news and updates"}
          </p>
        </div>

        {sortedArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {selectedTopic
                ? "No articles found in this topic."
                : searchQuery
                  ? "No articles found matching your search."
                  : "No articles available."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedArticles.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                onClick={() => setSelectedArticle(article)}
                onEdit={undefined} // Removed edit functionality from cards since it's now page-based
                onDelete={
                  user && isReporter(user) && article.author === user.name
                    ? () => handleDeleteArticle(article.id)
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </main>

      <ArticleModal article={selectedArticle} isOpen={!!selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  )
}
