import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatXP(xp: number): string {
  if (xp >= 1000) {
    return (xp / 1000).toFixed(1) + 'k'
  }
  return xp.toString()
}

export function getLevelFromXP(xp: number): number {
  // Level 1: 0 XP, Level 2: 100 XP, Level 3: 300 XP, Level 4: 600 XP, ...
  // Công thức: XP cần cho level n = 50 * n * (n - 1)
  let level = 1
  let xpNeeded = 0
  while (xp >= xpNeeded) {
    xpNeeded = 50 * level * (level + 1)
    if (xp >= xpNeeded) {
      level++
    } else {
      break
    }
  }
  return level
}

export function getXPProgress(xp: number): number {
  const level = getLevelFromXP(xp)
  const xpForCurrent = 50 * level * (level - 1)
  const xpForNext = 50 * level * (level + 1)
  const progress = (xp - xpForCurrent) / (xpForNext - xpForCurrent)
  return Math.min(Math.max(progress, 0), 1)
}
