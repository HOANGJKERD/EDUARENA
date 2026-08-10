'use client'

import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import Link from 'next/link'

export default function DashboardPage() {
  // Dùng user mặc định, không cần đăng nhập
  const user = {
    name: "Học viên EduArena",
    email: "demo@eduarena.com",
    image: null,
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
          <Link href="/">
            <Button variant="outline" className="text-white/70 hover:text-white">
              ← Về trang chủ
            </Button>
          </Link>
        </div>

        {/* Welcome */}
        <GlassmorphicCard className="p-8 mb-8">
          <div className="flex items-center gap-4">
            <Avatar src={user.image} alt={user.name} size="lg" />
            <div>
              <h2 className="text-2xl font-bold text-white">
                Chào mừng, {user.name}! 👋
              </h2>
              <p className="text-white/60">Bạn đã sẵn sàng học hôm nay chưa?</p>
            </div>
          </div>
        </GlassmorphicCard>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <GlassmorphicCard className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="text-4xl mb-2">📚</div>
            <h3 className="text-white font-semibold">Học ngay</h3>
            <p className="text-white/50 text-sm">Bắt đầu bài học mới</p>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="text-4xl mb-2">🧪</div>
            <h3 className="text-white font-semibold">Phòng Lab</h3>
            <p className="text-white/50 text-sm">Thí nghiệm tương tác</p>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="text-4xl mb-2">⚔️</div>
            <h3 className="text-white font-semibold">Đấu trường</h3>
            <p className="text-white/50 text-sm">PvP cùng bạn bè</p>
          </GlassmorphicCard>
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
