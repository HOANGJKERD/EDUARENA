'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Button } from '@/components/ui/Button'

// Dữ liệu mẫu (sau này lấy từ database)
const SUBJECT_DATA: Record<string, any> = {
  '1': { name: 'Toán', icon: '📐', color: 'from-red-500 to-orange-500' },
  '2': { name: 'Vật lý', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
  '3': { name: 'Hóa học', icon: '🧪', color: 'from-green-500 to-emerald-500' },
  '4': { name: 'Sinh học', icon: '🧬', color: 'from-teal-500 to-green-500' },
  '5': { name: 'Lịch sử', icon: '📜', color: 'from-amber-500 to-yellow-500' },
  '6': { name: 'Ngữ văn', icon: '📖', color: 'from-pink-500 to-rose-500' },
}

const CHAPTERS = [
  { id: '1', name: 'Chương 1: Kiến thức cơ bản' },
  { id: '2', name: 'Chương 2: Nâng cao' },
  { id: '3', name: 'Chương 3: Ôn tập' },
]

export default function SubjectDetailPage() {
  const params = useParams()
  const grade = params.grade as string
  const subjectId = params.subjectId as string
  const subject = SUBJECT_DATA[subjectId]

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Không tìm thấy môn học</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen relative overflow-hidden p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble w-64 h-64 top-10 left-10 bubble-float" />
        <div className="bubble w-96 h-96 bottom-20 right-10 bubble-float delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{subject.icon}</span>
              <h1 className="text-3xl font-bold text-white">{subject.name}</h1>
            </div>
            <p className="text-white/60">Lớp {grade}</p>
          </div>
          <Link href="/learn">
            <Button variant="outline" className="text-white/70 hover:text-white">
              ← Danh sách
            </Button>
          </Link>
        </div>

        {/* Chương học */}
        <div className="space-y-4">
          {CHAPTERS.map((chapter, index) => (
            <GlassmorphicCard key={chapter.id} className="p-6 hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-white/30 font-mono text-sm">#{index + 1}</span>
                    <h3 className="text-white font-semibold text-lg">{chapter.name}</h3>
                  </div>
                  <p className="text-white/40 text-sm mt-1">0 bài học • 0% hoàn thành</p>
                </div>
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Học ngay →
                </Button>
              </div>
            </GlassmorphicCard>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="flex justify-between text-white/60 text-sm mb-2">
            <span>Tiến độ học tập</span>
            <span>0%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all" />
          </div>
        </div>
      </div>
    </main>
  )
}
