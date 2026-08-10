import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hash } from 'bcryptjs'
import { z } from 'zod'

const registerSchema = z.object({
  name: z.string().min(1, "Tên hiển thị không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
})

export async function POST(req: Request) {
  try {
    // Log để debug
    console.log("🔵 Register API called")
    
    const body = await req.json()
    console.log("🔵 Body:", body)

    // Validate
    const { name, email, password } = registerSchema.parse(body)

    // Kiểm tra email đã tồn tại
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      console.log("🔴 Email already exists:", email)
      return NextResponse.json(
        { error: 'Email đã được sử dụng' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 12)
    console.log("🟢 Password hashed")

    // Tạo user và profile
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        profile: {
          create: {
            username: name.toLowerCase().replace(/\s/g, '_') + Math.floor(Math.random() * 10000),
          },
        },
      },
      include: {
        profile: true,
      },
    })

    console.log("🟢 User created:", user.id)

    return NextResponse.json({
      message: 'Tạo tài khoản thành công',
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name,
        profile: user.profile,
      },
    })
  } catch (error) {
    console.error("🔴 ERROR:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0]?.message || 'Dữ liệu không hợp lệ' },
        { status: 400 }
      )
    }

    // Log chi tiết lỗi
    const errorMessage = error instanceof Error ? error.message : 'Có lỗi xảy ra'
    console.error("🔴 Error message:", errorMessage)
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
