'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Button } from '@/components/ui/Button'

const GRADES = [10, 11, 12]

// Dữ liệu mẫu (sau này lấy từ database)
const SUBJECTS = [
  { id: '1', name: 'Toán', icon: '📐', color: 'from-red-500 to-orange-500' },
  { id: '2', name: 'Vật lý', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
  { id: '3', name: 'Hóa học', icon: '🧪', color: 'from-green-500 to-emerald-500' },
  { id: '4', name: 'Sinh học', icon: '🧬', color: 'from-teal-500 to-green-500' },
  { id: '5', name: 'Lịch sử', icon: '📜', color: 'from-amber-500 to-yellow-500' },
  { id: '6', name: 'Ngữ văn', icon: '📖', color: 'from-pink-500 to-rose-500' },
]

export default function LearnPage() {
  const [selectedGrade, setSelectedGrade] = useState(10)

  return (
    <main className="min-h-screen relative overflow-hidden p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble w-64 h-64 top-10 left-10 bubble-float" />
        <div className="bubble w-96 h-96 bottom-20 right-10 bubble-float delay-1000" />
        <div className="bubble w-48 h-48 top-1/2 left-1/2 bubble-float delay-500" />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">📚 Phòng học</h1>
            <p className="text-white/60">Chọn lớp và bắt đầu học</p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" className="text-white/70 hover:text-white">
              ← Quay lại
            </Button>
          </Link>
        </div>

        {/* Chọn lớp */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {GRADES.map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200
                ${selectedGrade === grade 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
            >
              Lớp {grade}
            </button>
          ))}
        </div>

        {/* Danh sách môn học */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SUBJECTS.map((subject) => (
            <Link key={subject.id} href={`/learn/${selectedGrade}/${subject.id}`}>
              <GlassmorphicCard className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                <div className={`text-4xl mb-3 bg-gradient-to-r ${subject.color} inline-block p-3 rounded-2xl`}>
                  {subject.icon}
                </div>
                <h3 className="text-white font-semibold">{subject.name}</h3>
                <p className="text-white/40 text-sm">Lớp {selectedGrade}</p>
                <div className="mt-3 text-xs text-white/30">📖 0 bài học</div>
              </GlassmorphicCard>
            </Link>
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
          <p className="text-white/40 text-sm">
            🚧 Đang phát triển nội dung cho các môn học...
          </p>
        </div>
      </div>
    </main>
  )
}
