import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
}

export function GlassmorphicCard({ children, className }: GlassmorphicCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden glass rounded-2xl',
        'shadow-[0_8px_32px_rgba(0,0,0,0.12)]',
        'transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)]',
        className
      )}
    >
      {/* Bong bóng trang trí */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
