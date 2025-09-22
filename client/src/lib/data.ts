import type { NewsArticle, User, NewsCategory } from "./types"

// Mock data for demonstration
export const mockUsers: User[] = [
  { id: "1", name: "John Reporter", email: "john@news.com", role: "author" },
  { id: "2", name: "Jane Reader", email: "jane@email.com", role: "user" },
]

export const mockArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    description:
      "New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnostics worldwide.",
    content:
      'In a groundbreaking development that could reshape the healthcare landscape, researchers have unveiled an advanced AI system capable of diagnosing complex medical conditions with unprecedented accuracy. The technology, developed over five years of intensive research, combines machine learning algorithms with vast medical databases to provide real-time diagnostic support to healthcare professionals.\n\nThe system has already been tested in over 200 hospitals worldwide, showing remarkable results in early detection of diseases that traditionally required extensive testing and specialist consultation. Dr. Sarah Chen, lead researcher on the project, explains that the AI can analyze medical imaging, patient history, and symptoms simultaneously to provide comprehensive diagnostic recommendations.\n\n"This represents a paradigm shift in how we approach medical diagnosis," Dr. Chen stated during the announcement. "The AI doesn\'t replace doctors but enhances their capabilities, allowing for faster, more accurate diagnoses that can save lives."\n\nThe technology is expected to be particularly beneficial in underserved areas where access to specialist medical care is limited. Initial deployment will begin in major medical centers before expanding to smaller hospitals and clinics throughout the next year.',
    category: "Technology",
    author: "Dr. Michael Thompson",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Global Markets Surge Following Economic Recovery Signals",
    description:
      "International stock markets experience significant gains as economic indicators point toward sustained recovery.",
    content:
      'Financial markets around the world experienced substantial gains today as key economic indicators suggested a stronger-than-expected recovery trajectory. The Dow Jones Industrial Average closed up 2.3%, while international markets in Europe and Asia showed similar positive momentum.\n\nThe surge comes following the release of employment data showing unemployment rates at their lowest levels in over two years. Additionally, consumer spending has increased by 4.2% over the past quarter, indicating renewed confidence in economic stability.\n\n"We\'re seeing a confluence of positive factors that suggest the economic recovery is not only sustainable but accelerating," said Maria Rodriguez, Chief Economist at Global Financial Insights. "The combination of strong employment numbers, increased consumer spending, and corporate earnings growth creates a very optimistic outlook."\n\nTechnology stocks led the rally, with major companies reporting better-than-expected quarterly results. The energy sector also saw significant gains as oil prices stabilized and renewable energy investments continued to attract substantial funding.\n\nAnalysts predict this upward trend could continue through the remainder of the year, though they caution that global economic conditions remain subject to various external factors including geopolitical tensions and supply chain considerations.',
    category: "Business",
    author: "Sarah Williams",
    createdAt: new Date("2024-01-14"),
    updatedAt: new Date("2024-01-14"),
  },
  {
    id: "3",
    title: "Championship Victory Caps Historic Season for Local Team",
    description:
      "After decades of near-misses, the hometown heroes finally claim their first championship title in a thrilling finale.",
    content:
      'In what can only be described as a fairy-tale ending to an extraordinary season, the Metropolitan Lions captured their first championship title in 47 years with a dramatic 28-24 victory over the defending champions. The sold-out stadium erupted as quarterback Jake Morrison threw the game-winning touchdown pass with just 23 seconds remaining on the clock.\n\nThe Lions\' journey to the championship was marked by incredible perseverance and team unity. After starting the season with a disappointing 2-4 record, the team rallied behind new head coach Patricia Davis, who implemented innovative strategies that transformed the team\'s performance.\n\n"This victory belongs to our fans, our city, and everyone who never stopped believing," said Coach Davis during the post-game celebration. "These players showed incredible heart and determination throughout the season."\n\nThe championship game itself was a showcase of athletic excellence, featuring spectacular plays from both teams. Lions running back Carlos Martinez rushed for 187 yards, while the defense made crucial stops in the final quarter to preserve the victory.\n\nThe celebration is expected to continue throughout the week, with a victory parade scheduled for Saturday that city officials estimate could draw over 500,000 attendees. This championship marks not just a sports victory, but a moment of unity and pride for the entire metropolitan area.',
    category: "Sports",
    author: "Mike Johnson",
    createdAt: new Date("2024-01-13"),
    updatedAt: new Date("2024-01-13"),
  },
  {
    id: "4",
    title: "Quantum Computing Breakthrough Promises Faster Processing",
    description:
      "Scientists achieve major milestone in quantum computing that could revolutionize data processing speeds.",
    content:
      "Researchers at the Institute of Advanced Computing have successfully demonstrated a quantum processor capable of performing calculations 1000 times faster than traditional computers. This breakthrough could transform industries from cryptography to drug discovery.",
    category: "Technology",
    author: "Dr. Lisa Chen",
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12"),
  },
  {
    id: "5",
    title: "Startup Raises $50M for Revolutionary Green Energy Solution",
    description: "Clean energy startup secures major funding round to scale innovative solar technology.",
    content:
      "EcoSolar Technologies announced a $50 million Series B funding round led by prominent venture capital firms. The company's breakthrough solar panel technology promises 40% higher efficiency than current market leaders.",
    category: "Business",
    author: "Jennifer Martinez",
    createdAt: new Date("2024-01-11"),
    updatedAt: new Date("2024-01-11"),
  },
  {
    id: "6",
    title: "Olympic Preparations Underway as Athletes Gear Up",
    description: "Athletes from around the world intensify training as the upcoming Olympics approach.",
    content:
      "With just months until the Olympics, athletes are pushing their limits in training facilities worldwide. New records are being set in qualifying events, promising an exciting competition ahead.",
    category: "Sports",
    author: "Tom Anderson",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: "7",
    title: "Hollywood Blockbuster Breaks Opening Weekend Records",
    description: "Latest superhero film shatters box office expectations with record-breaking debut.",
    content:
      "The highly anticipated superhero sequel earned $180 million in its opening weekend, surpassing all previous records. Critics and audiences alike praise the film's innovative special effects and compelling storyline.",
    category: "Entertainment",
    author: "Rachel Green",
    createdAt: new Date("2024-01-09"),
    updatedAt: new Date("2024-01-09"),
  },
  {
    id: "8",
    title: "5G Network Expansion Reaches Rural Communities",
    description: "Major telecommunications companies complete 5G infrastructure rollout to underserved areas.",
    content:
      "The completion of 5G towers in rural regions promises to bridge the digital divide, providing high-speed internet access to previously underserved communities. This expansion is expected to boost local economies and educational opportunities.",
    category: "Technology",
    author: "David Kim",
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-08"),
  },
  {
    id: "9",
    title: "Cryptocurrency Market Shows Signs of Recovery",
    description: "Digital currencies experience significant gains following regulatory clarity announcements.",
    content:
      "Bitcoin and other major cryptocurrencies have seen substantial increases in value after government officials provided clearer regulatory guidelines. Market analysts predict continued growth as institutional adoption increases.",
    category: "Business",
    author: "Alex Thompson",
    createdAt: new Date("2024-01-07"),
    updatedAt: new Date("2024-01-07"),
  },
  {
    id: "10",
    title: "Tennis Championship Delivers Thrilling Matches",
    description: "International tennis tournament features unexpected upsets and spectacular performances.",
    content:
      "The annual championship has been full of surprises, with several unseeded players advancing to later rounds. Fans have been treated to exceptional tennis as players compete for the prestigious title.",
    category: "Sports",
    author: "Emma Wilson",
    createdAt: new Date("2024-01-06"),
    updatedAt: new Date("2024-01-06"),
  },
  {
    id: "11",
    title: "Streaming Wars Heat Up with New Platform Launch",
    description: "Tech giant enters streaming market with exclusive content and competitive pricing.",
    content:
      "The launch of StreamMax has intensified competition in the streaming industry. With exclusive shows and movies, plus a lower price point than competitors, the platform aims to capture significant market share.",
    category: "Entertainment",
    author: "Chris Davis",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
  },
  {
    id: "12",
    title: "Autonomous Vehicles Begin Public Testing Phase",
    description: "Self-driving cars hit public roads in controlled testing program across major cities.",
    content:
      "After years of development, autonomous vehicles are now being tested on public roads in select cities. The program includes safety drivers and extensive monitoring to ensure public safety while gathering real-world data.",
    category: "Technology",
    author: "Maria Rodriguez",
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04"),
  },
  {
    id: "13",
    title: "E-commerce Giant Reports Record Holiday Sales",
    description: "Online retail platform sees unprecedented growth during holiday shopping season.",
    content:
      "The company reported a 35% increase in holiday sales compared to the previous year, driven by improved logistics and expanded product offerings. Small business partners also benefited from the platform's growth.",
    category: "Business",
    author: "Kevin Lee",
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
  },
  {
    id: "14",
    title: "Soccer World Cup Qualifiers Produce Stunning Results",
    description: "Unexpected outcomes in qualifying matches shake up predictions for upcoming tournament.",
    content:
      "Several traditional powerhouses struggled in qualifying rounds while emerging teams secured their spots for the World Cup. The tournament promises to be one of the most competitive in recent history.",
    category: "Sports",
    author: "Sofia Martinez",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
  },
  {
    id: "15",
    title: "Music Festival Announces Star-Studded Lineup",
    description: "Annual music festival reveals impressive roster of artists across multiple genres.",
    content:
      "The three-day festival will feature over 100 artists, including chart-topping headliners and emerging talent. Organizers expect record attendance as music fans prepare for the summer's biggest event.",
    category: "Entertainment",
    author: "Jake Miller",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "16",
    title: "Cloud Computing Security Gets Major Upgrade",
    description: "New encryption standards promise enhanced protection for cloud-based data storage.",
    content:
      "Industry leaders have collaborated to develop advanced encryption protocols that will significantly improve cloud security. The new standards are expected to be adopted across major cloud platforms within the next year.",
    category: "Technology",
    author: "Dr. Amanda Foster",
    createdAt: new Date("2023-12-31"),
    updatedAt: new Date("2023-12-31"),
  },
  {
    id: "17",
    title: "Retail Chain Expands with Sustainable Store Concept",
    description: "Major retailer opens eco-friendly stores powered entirely by renewable energy.",
    content:
      "The new store format features solar panels, energy-efficient lighting, and sustainable materials throughout. The company plans to convert 200 existing locations to this green format over the next two years.",
    category: "Business",
    author: "Nicole Brown",
    createdAt: new Date("2023-12-30"),
    updatedAt: new Date("2023-12-30"),
  },
  {
    id: "18",
    title: "Award Season Kicks Off with Surprise Nominations",
    description: "Film and television awards announce nominees with several unexpected inclusions.",
    content:
      "This year's nominations feature a diverse mix of established stars and newcomers. Independent films and streaming content received significant recognition, reflecting the changing landscape of entertainment.",
    category: "Entertainment",
    author: "Ryan Taylor",
    createdAt: new Date("2023-12-29"),
    updatedAt: new Date("2023-12-29"),
  },
]

export const categories: NewsCategory[] = ["Technology", "Business", "Sports", "Entertainment", "Politics", "Health"]

export const addArticle = (articleData: Omit<NewsArticle, "id">) => {
  const newArticle: NewsArticle = {
    ...articleData,
    id: Date.now().toString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  // In a real app, this would save to a database
  // For now, we'll just add it to the mock data
  mockArticles.unshift(newArticle)

  return newArticle
}
