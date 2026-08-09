'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import Link from 'next/link'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Đang tải...</div>
      </div>
    )
  }

  if (!session?.user) {
    return null
  }

  return (
    <main className="min-h-screen relative overflow-hidden p-6">
      {/* Bong bóng nền */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble w-64 h-64 top-10 left-10 bubble-float" />
        <div className="bubble w-96 h-96 bottom-20 right-10 bubble-float delay-1000" />
        <div className="bubble w-48 h-48 top-1/2 left-1/2 bubble-float delay-500" />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">🏠 Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link href="/profile">
              <Avatar src={session.user.image} alt={session.user.name || 'User'} size="md" />
            </Link>
          </div>
        </div>

        {/* Welcome */}
        <GlassmorphicCard className="p-8 mb-8">
          <div className="flex items-center gap-4">
            <Avatar src={session.user.image} alt={session.user.name || 'User'} size="lg" />
            <div>
              <h2 className="text-2xl font-bold text-white">
                Chào mừng, {session.user.name || 'Học viên'}! 👋
              </h2>
              <p className="text-white/60">Hôm nay bạn sẽ học gì?</p>
            </div>
          </div>
        </GlassmorphicCard>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/learn">
            <GlassmorphicCard className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="text-white font-semibold">Học ngay</h3>
              <p className="text-white/50 text-sm">Bắt đầu bài học mới</p>
            </GlassmorphicCard>
          </Link>

          <Link href="/lab">
            <GlassmorphicCard className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="text-4xl mb-2">🧪</div>
              <h3 className="text-white font-semibold">Phòng Lab</h3>
              <p className="text-white/50 text-sm">Thí nghiệm tương tác</p>
            </GlassmorphicCard>
          </Link>

          <Link href="/arena">
            <GlassmorphicCard className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="text-4xl mb-2">⚔️</div>
              <h3 className="text-white font-semibold">Đấu trường</h3>
              <p className="text-white/50 text-sm">PvP cùng bạn bè</p>
            </GlassmorphicCard>
          </Link>
        </div>

        {/* Coming Soon */}
        <div className="grid md:grid-cols-2 gap-6">
          <GlassmorphicCard className="p-6">
            <h3 className="text-white font-semibold mb-2">📊 Thống kê</h3>
            <p className="text-white/40 text-sm">Đang phát triển...</p>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-6">
            <h3 className="text-white font-semibold mb-2">🏆 Thành tích</h3>
            <p className="text-white/40 text-sm">Đang phát triển...</p>
          </GlassmorphicCard>
        </div>
      </div>
    </main>
  )
}
