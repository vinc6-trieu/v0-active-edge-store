import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">TS</span>
            </div>
            <span className="text-lg font-bold">TechStudio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#overview" className="text-sm font-medium hover:text-primary transition-colors">
              Tổng Quan
            </Link>
            <Link href="#process" className="text-sm font-medium hover:text-primary transition-colors">
              Quy Trình
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-primary transition-colors">
              Sản Phẩm
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Liên Hệ
            </Link>
          </nav>

          <Button asChild className="hidden md:flex">
            <Link href="#contact">Bắt Đầu</Link>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
