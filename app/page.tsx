import Link from 'next/link'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Bong bóng nền - giữ nguyên */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble w-64 h-64 top-10 left-10 bubble-float" />
        <div className="bubble w-96 h-96 bottom-20 right-10 bubble-float delay-1000" />
        <div className="bubble w-48 h-48 top-1/2 left-1/2 bubble-float delay-500" />
        <div className="bubble w-72 h-72 bottom-40 left-20 bubble-float delay-1500" />
        <div className="bubble w-56 h-56 top-20 right-20 bubble-float delay-700" />
        <div className="bubble w-80 h-80 top-1/3 right-1/4 bubble-float delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6">
        {/* Header */}
        <nav className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold text-white flex items-center gap-2">
            🎮 <span className="text-gradient">EduArena</span>
          </div>
          <div className="flex gap-3">
            {/* Đổi cả 2 nút thành link đến Dashboard */}
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Vào học ngay 🚀
              </Button>
            </Link>
          </div>
        </nav>

        {/* Hero - giữ nguyên nhưng đổi nút */}
        <section className="py-16 md:py-24 text-center">
          <GlassmorphicCard className="max-w-4xl mx-auto p-8 md:p-12">
            <div className="text-6xl md:text-7xl mb-4">🚀</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Học như <span className="text-gradient">chơi game</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Phòng thí nghiệm ảo, đấu trường PvP, hệ thống rank và XP — 
              biến việc học thành cuộc phiêu lưu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Bắt đầu ngay 🚀
                </Button>
              </Link>
            </div>
          </GlassmorphicCard>
        </section>

        {/* Features - giữ nguyên */}
        <section className="py-12 grid md:grid-cols-3 gap-6">
          <GlassmorphicCard className="text-center p-8 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🧪</div>
            <h3 className="text-xl font-semibold text-white mb-2">Phòng thí nghiệm</h3>
            <p className="text-white/70">Vật lý, Hóa học, Sinh học — thí nghiệm tương tác</p>
          </GlassmorphicCard>

          <GlassmorphicCard className="text-center p-8 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">⚔️</div>
            <h3 className="text-xl font-semibold text-white mb-2">Đấu trường PvP</h3>
            <p className="text-white/70">Đấu với bạn bè, leo rank, giành vinh quang</p>
          </GlassmorphicCard>

          <GlassmorphicCard className="text-center p-8 hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-white mb-2">Hệ thống Rank</h3>
            <p className="text-white/70">Từ Đồng đến Huyền Thoại — thể hiện đẳng cấp</p>
          </GlassmorphicCard>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-white/40 text-sm">
          <p>© 2026 EduArena. Made with ❤️ for learning.</p>
        </footer>
      </div>
    </main>
  )
}
