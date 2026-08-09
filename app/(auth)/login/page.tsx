'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Email hoặc mật khẩu không đúng')
        setLoading(false)
        return
      }

      router.push('/dashboard')
    } catch (error) {
      setError('Có lỗi xảy ra, vui lòng thử lại')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Bong bóng nền */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble w-64 h-64 top-10 left-10 bubble-float" />
        <div className="bubble w-96 h-96 bottom-20 right-10 bubble-float delay-1000" />
        <div className="bubble w-48 h-48 top-1/2 left-1/2 bubble-float delay-500" />
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <GlassmorphicCard className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">🎮 EduArena</h1>
            <p className="text-white/60 mt-2">Đăng nhập để tiếp tục</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-white/70 text-sm font-medium mb-1.5 block">
                Email
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-white/70 text-sm font-medium mb-1.5 block">
                Mật khẩu
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-500/10 rounded-xl py-2">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              disabled={loading}
            >
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </Button>
          </form>

          <p className="text-center text-white/50 mt-6 text-sm">
            Chưa có tài khoản?{' '}
            <Link href="/register" className="text-purple-400 hover:text-purple-300">
              Đăng ký ngay
            </Link>
          </p>
        </GlassmorphicCard>
      </div>
    </main>
  )
}
