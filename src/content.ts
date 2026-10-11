import { articlesA } from "./content/articles-a"
import { articlesB } from "./content/articles-b"
import { projectsA } from "./content/projects-a"
import { projectsB } from "./content/projects-b"
import type { ArticleDetail, ProjectDetail } from "./content-types"

export type { ArticleDetail, Bi, Lang, ProjectDetail } from "./content-types"

export const projectDetails: Record<string, ProjectDetail> = { ...projectsA, ...projectsB }
export const articleDetails: Record<string, ArticleDetail> = { ...articlesA, ...articlesB }
