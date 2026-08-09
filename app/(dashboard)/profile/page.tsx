'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { signOut } from 'next-auth/react'

export default function ProfilePage() {
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble w-64 h-64 top-10 left-10 bubble-float" />
        <div className="bubble w-96 h-96 bottom-20 right-10 bubble-float delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto max-w-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">👤 Hồ sơ</h1>
          <Button
            variant="outline"
            onClick={() => router.push('/dashboard')}
            className="text-white/70 hover:text-white"
          >
            ← Quay lại
          </Button>
        </div>

        <GlassmorphicCard className="p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <Avatar
              src={session.user.image}
              alt={session.user.name || 'User'}
              size="lg"
              className="mb-4"
            />
            <h2 className="text-2xl font-bold text-white">
              {session.user.name || 'Học viên'}
            </h2>
            <p className="text-white/50">{session.user.email}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
              <span className="text-white/70">📧 Email</span>
              <span className="text-white">{session.user.email}</span>
            </div>

            <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
              <span className="text-white/70">⭐ XP</span>
              <span className="text-white font-semibold">0 XP</span>
            </div>

            <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
              <span className="text-white/70">🎯 Level</span>
              <span className="text-white font-semibold">1</span>
            </div>

            <div className="flex justify-between items-center p-4 rounded-xl bg-white/5">
              <span className="text-white/70">🔥 Streak</span>
              <span className="text-white font-semibold">0 ngày</span>
            </div>
          </div>

          <div className="mt-8">
            <Button
              variant="outline"
              onClick={() => signOut()}
              className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10"
            >
              Đăng xuất
            </Button>
          </div>
        </GlassmorphicCard>
      </div>
    </main>
  )
}
