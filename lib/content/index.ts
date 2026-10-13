import { articlesA } from "./articles-a"
import { articlesB } from "./articles-b"
import { projectsA } from "./projects-a"
import { projectsB } from "./projects-b"
import type { ArticleDetail, ProjectDetail } from "./types"

export type { ArticleDetail, Bi, Lang, ProjectDetail } from "./types"

export const projectDetails: Record<string, ProjectDetail> = { ...projectsA, ...projectsB }
export const articleDetails: Record<string, ArticleDetail> = { ...articlesA, ...articlesB }
