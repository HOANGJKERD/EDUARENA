export interface User {
  id: string
  email: string
  name?: string | null
}

export interface Profile {
  id: string
  userId: string
  username: string
  avatar?: string | null
  xp: number
  level: number
  streak: number
  lastActive: Date
}

export interface Subject {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  color: string
}

export interface LearningProgress {
  id: string
  userId: string
  subjectId: string
  completedLessons: number
  totalLessons: number
  score: number
  lastActivity: Date
}
