"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"

const allProducts = [
  {
    name: "Áo Khoác Chạy Bộ AeroTech",
    category: "Đồ Ngoài Trời",
    price: "5.990.000₫",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Quần Short Tập Luyện ProFit",
    category: "Đồ Thể Thao",
    price: "2.190.000₫",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Áo Khoác Mùa Đông Summit",
    category: "Đồ Ngoài Trời",
    price: "9.790.000₫",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Áo Thun Tập Luyện DryFit",
    category: "Đồ Thể Thao",
    price: "1.490.000₫",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Quần Yoga FlexCore",
    category: "Đồ Thể Thao",
    price: "2.790.000₫",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Áo Khoác Gió UltraLight",
    category: "Đồ Ngoài Trời",
    price: "3.990.000₫",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Áo Nỉ Thể Thao TechFleece",
    category: "Đồ Thể Thao",
    price: "3.490.000₫",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Giày Chạy Bộ SpeedMax",
    category: "Giày Dép",
    price: "4.990.000₫",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Áo Khoác Leo Núi Alpine",
    category: "Đồ Ngoài Trời",
    price: "12.990.000₫",
    image: "/placeholder.svg?height=400&width=400",
  },
]

const allBlogPosts = [
  {
    title: "Khoa Học Đằng Sau Vải Thấm Hút Ẩm",
    excerpt:
      "Khám phá cách kỹ thuật dệt tiên tiến giữ cho vận động viên khô ráo và thoải mái trong quá trình tập luyện cường độ cao.",
    date: "28 Thg 12, 2025",
    image: "/placeholder.svg?height=300&width=500",
    slug: "kho-hoc-vai-tham-hut-am",
  },
  {
    title: "Vật Liệu Bền Vững Trong Đồ Thể Thao",
    excerpt: "Khám phá những đổi mới thân thiện với môi trường mà không ảnh hưởng đến hiệu suất hay độ bền.",
    date: "25 Thg 12, 2025",
    image: "/placeholder.svg?height=300&width=500",
    slug: "vat-lieu-ben-vung",
  },
  {
    title: "Tập Luyện Mùa Đông: Trang Phục Hiệu Suất",
    excerpt:
      "Các tính năng thiết yếu của đồ ngoài trời kỹ thuật dành cho vận động viên và người đam mê hoạt động ngoài trời trong thời tiết lạnh.",
    date: "20 Thg 12, 2025",
    image: "/placeholder.svg?height=300&width=500",
    slug: "tap-luyen-mua-dong",
  },
  {
    title: "Công Nghệ Chống Thấm Nước Thế Hệ Mới",
    excerpt: "Tìm hiểu về màng chống thấm tiên tiến giữ cho bạn khô ráo mà không làm giảm khả năng thoát hơi ẩm.",
    date: "15 Thg 12, 2025",
    image: "/placeholder.svg?height=300&width=500",
    slug: "cong-nghe-chong-tham",
  },
  {
    title: "Thiết Kế Ergonomic Cho Hiệu Suất Tối Ưu",
    excerpt: "Cách thiết kế dựa trên sinh học học tối ưu hóa chuyển động và giảm mệt mỏi trong hoạt động thể thao.",
    date: "10 Thg 12, 2025",
    image: "/placeholder.svg?height=300&width=500",
    slug: "thiet-ke-ergonomic",
  },
  {
    title: "Vật Liệu Tái Chế: Tương Lai Của Thể Thao",
    excerpt: "Khám phá cách chúng tôi biến rác thải thành sản phẩm thể thao hiệu suất cao.",
    date: "5 Thg 12, 2025",
    image: "/placeholder.svg?height=300&width=500",
    slug: "vat-lieu-tai-che",
  },
]

export default function HomePage() {
  const [productDisplayCount, setProductDisplayCount] = useState(6)
  const [blogDisplayCount, setBlogDisplayCount] = useState(3)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleLoadMoreProducts = () => {
    setProductDisplayCount((prev) => Math.min(prev + 3, allProducts.length))
  }

  const handleLoadMoreBlogs = () => {
    setBlogDisplayCount((prev) => Math.min(prev + 3, allBlogPosts.length))
  }

  const visibleProducts = allProducts.slice(0, productDisplayCount)
  const hasMoreProducts = productDisplayCount < allProducts.length

  const visibleBlogs = allBlogPosts.slice(0, blogDisplayCount)
  const hasMoreBlogs = blogDisplayCount < allBlogPosts.length

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=700&width=1920"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-secondary-foreground">
            Kỹ Thuật Hiệu Suất
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto mb-8 text-pretty">
            Đổi mới kỹ thuật kết hợp thiết kế tiên tiến. Chúng tôi tạo ra đồ thể thao vượt qua giới hạn hiệu suất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" onClick={() => scrollToSection("products")}>
              Khám Phá Sản Phẩm
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground border-secondary-foreground/20"
              onClick={() => scrollToSection("overview")}
            >
              Tìm Hiểu Thêm
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Chúng Tôi Là Ai</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                TechStudio là studio kỹ thuật tiên phong chuyên về đồ thể thao, đồ ngoài trời và trang phục hiệu suất
                cao. Được thành lập trên nguyên tắc rằng sự đổi mới thúc đẩy sự xuất sắc, chúng tôi kết hợp khoa học vật
                liệu tiên tiến với kỹ thuật sản xuất hiện đại.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Đội ngũ kỹ sư, nhà thiết kế và vận động viên của chúng tôi cùng nhau tạo ra những sản phẩm nâng cao hiệu
                suất, tối đa hóa sự thoải mái và chịu đựng được những điều kiện khắc nghiệt nhất.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Năm Kinh Nghiệm</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                  <div className="text-sm text-muted-foreground">Sản Phẩm Bán Ra</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Hài Lòng</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=500&width=600" alt="Studio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section id="process" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Quy Trình Của Chúng Tôi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Từ ý tưởng đến sáng tạo, mọi sản phẩm trải qua quá trình phát triển nghiêm ngặt để đảm bảo hiệu suất đỉnh
              cao.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Nghiên Cứu & Thiết Kế",
                description:
                  "Phân tích nhu cầu vận động viên và phát triển giải pháp đổi mới thông qua mô hình CAD tiên tiến và nghiên cứu vật liệu.",
              },
              {
                step: "02",
                title: "Tạo Mẫu",
                description:
                  "Tạo mẫu thử nghiệm chức năng bằng kỹ thuật sản xuất hiện đại và thử nghiệm vật liệu trong điều kiện khắc nghiệt.",
              },
              {
                step: "03",
                title: "Thử Nghiệm",
                description:
                  "Thử nghiệm thực địa nghiêm ngặt với các vận động viên chuyên nghiệp để xác thực các chỉ số hiệu suất và tiêu chuẩn độ bền.",
              },
              {
                step: "04",
                title: "Sản Xuất",
                description:
                  "Sản xuất chính xác với kiểm soát chất lượng ở mọi giai đoạn để đảm bảo sự xuất sắc nhất quán.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sản Phẩm Nổi Bật</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Khám phá những đổi mới mới nhất của chúng tôi về đồ thể thao kỹ thuật và trang phục hiệu suất cao.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visibleProducts.map((product, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="text-2xl font-bold text-primary">{product.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {hasMoreProducts && (
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" onClick={handleLoadMoreProducts}>
                Xem Thêm Sản Phẩm
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Tin Tức Mới Nhất</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Cập nhật những điều mới nhất về đổi mới đồ thể thao kỹ thuật và công nghệ hiệu suất.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visibleBlogs.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all h-full">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-3">{post.date}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {hasMoreBlogs && (
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" onClick={handleLoadMoreBlogs}>
                Xem Thêm Bài Viết
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Liên Hệ Với Chúng Tôi</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Có câu hỏi về sản phẩm của chúng tôi hoặc muốn hợp tác với chúng tôi? Chúng tôi rất mong được nghe từ
                bạn.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Họ Tên
                      </label>
                      <Input id="name" placeholder="Tên của bạn" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="email@cua-ban.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Tiêu Đề
                    </label>
                    <Input id="subject" placeholder="Nội dung về gì?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Tin Nhắn
                    </label>
                    <Textarea id="message" placeholder="Cho chúng tôi biết thêm..." rows={6} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Gửi Tin Nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
