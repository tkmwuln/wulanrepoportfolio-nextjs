export type Lang = "en" | "id"
export type Bi = Record<Lang, string>
export const b = (en: string, id: string): Bi => ({ en, id })

export type ProjectDetail = {
  role: Bi
  duration: Bi
  team: Bi
  overview: Bi[] // 2 paragraphs: context + what the product is
  goals: Bi[] // 3-4 concrete goals
  users: { name: Bi; need: Bi }[] // 3 audience segments
  challenge: Bi // 2-3 sentences
  research: { finding: Bi; detail: Bi }[] // 3-4 insights
  approach: { title: Bi; body: Bi }[] // 5 steps, body 2-3 sentences each
  decisions: { title: Bi; body: Bi }[] // 3 design decisions with trade-offs
  metrics: { value: string; label: Bi }[] // 3-4 headline numbers
  outcomes: Bi[] // 4-5
  learnings: Bi[] // 3
  tools: string[]
}

export type ArticleSection = {
  h: Bi
  p: Bi[] // 2-3 paragraphs
  list?: Bi[] // optional bullet list
  callout?: Bi // optional highlighted takeaway line
}

export type ArticleDetail = {
  sections: ArticleSection[] // 7-8 sections
  takeaways: Bi[] // 4-5
}
