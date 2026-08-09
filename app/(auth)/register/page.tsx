'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Có lỗi xảy ra')
        setLoading(false)
        return
      }

      router.push('/login?registered=true')
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
            <p className="text-white/60 mt-2">Tạo tài khoản mới</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-white/70 text-sm font-medium mb-1.5 block">
                Tên hiển thị
              </label>
              <Input
                type="text"
                placeholder="Nguyễn Văn A"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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
                minLength={6}
              />
              <p className="text-white/30 text-xs mt-1">Ít nhất 6 ký tự</p>
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
              {loading ? 'Đang đăng ký...' : 'Đăng ký miễn phí'}
            </Button>
          </form>

          <p className="text-center text-white/50 mt-6 text-sm">
            Đã có tài khoản?{' '}
            <Link href="/login" className="text-purple-400 hover:text-purple-300">
              Đăng nhập
            </Link>
          </p>
        </GlassmorphicCard>
      </div>
    </main>
  )
}
