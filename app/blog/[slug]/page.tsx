import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Article Header */}
      <article className="flex-1">
        <div className="relative h-[400px] md:h-[500px] flex items-end overflow-hidden bg-secondary">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=500&width=1920"
              alt="Article hero"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4 text-secondary-foreground/80">
                <span className="text-sm font-medium">28 Thg 12, 2025</span>
                <span className="text-sm">•</span>
                <span className="text-sm font-medium">8 phút đọc</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-4 text-secondary-foreground">
                Khoa Học Đằng Sau Vải Thấm Hút Ẩm
              </h1>
              <p className="text-xl text-secondary-foreground/90 text-pretty">
                Khám phá cách kỹ thuật dệt tiên tiến giữ cho vận động viên khô ráo và thoải mái trong những buổi tập
                luyện cường độ cao nhất.
              </p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground leading-relaxed mb-8">
                Trong thế giới đồ thể thao hiệu suất cao, quản lý độ ẩm không chỉ là một tính năng—đó là một yêu cầu cơ
                bản. Hiểu được khoa học đằng sau vải thấm hút ẩm sẽ giải thích tại sao đồ thể thao hiện đại trở nên hiệu
                quả trong việc giữ cho vận động viên thoải mái và hoạt động ở mức cao nhất.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Cách Thấm Hút Ẩm Hoạt Động</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vải thấm hút ẩm hoạt động dựa trên nguyên lý gọi là tác dụng mao dẫn. Không giống như vải cotton truyền
                thống hấp thụ độ ẩm và giữ nó sát với da, vải kỹ thuật được thiết kế với các sợi tổng hợp kéo độ ẩm ra
                khỏi cơ thể và lan rộng nó trên một bề mặt lớn hơn nơi nó có thể bay hơi nhanh hơn.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chìa khóa nằm ở cấu trúc sợi. Vải hiệu suất hiện đại sử dụng vật liệu kỵ nước (đẩy nước) như polyester
                hoặc nylon được dệt thành các mẫu cụ thể. Những mẫu này tạo ra các kênh vi mô kéo mồ hôi ra khỏi da của
                bạn thông qua tác dụng mao dẫn—hiện tượng tương tự cho phép nước leo lên khăn giấy.
              </p>

              <div className="my-12 rounded-lg overflow-hidden">
                <img src="/placeholder.svg?height=400&width=800" alt="Fabric structure diagram" className="w-full" />
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Công Nghệ Đằng Sau Vải</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tại TechStudio, chúng tôi đã đưa quản lý độ ẩm lên một tầm cao mới. Công nghệ vải độc quyền của chúng
                tôi kết hợp:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Cấu trúc nhiều lớp:</strong> Các lớp khác nhau với các đặc tính kỵ
                  nước khác nhau hoạt động cùng nhau để vận chuyển độ ẩm một cách hiệu quả
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Hình học sợi được thiết kế:</strong> Các hình dạng mặt cắt ngang
                  tối đa hóa diện tích bề mặt và tăng cường hiệu suất thấm hút
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Xử lý hoàn thiện tiên tiến:</strong> Các xử lý hóa học tăng cường
                  khả năng chống nước mà không làm giảm khả năng thoáng khí
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Hiệu Suất Thực Tế</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Thử nghiệm trong phòng thí nghiệm là rất quan trọng, nhưng thử nghiệm thực sự đến từ các vận động viên
                trong hành động. Chúng tôi đã tiến hành các nghiên cứu thực địa rộng rãi với các vận động viên chạy bộ,
                đạp xe và leo núi chuyên nghiệp. Kết quả liên tục cho thấy rằng quản lý độ ẩm phù hợp có thể cải thiện
                sự thoải mái lên đến 40% và giúp duy trì nhiệt độ cơ thể tối ưu trong hoạt động thể chất cường độ cao.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Một vận động viên marathon đã nhận xét, "Sự khác biệt là ngày và đêm. Với vật liệu truyền thống, tôi sẽ
                hoàn thành một đợt chạy dài cảm thấy nặng nề và ướt đẫm. Với trang phục thấm hút ẩm của TechStudio, tôi
                vẫn nhẹ và khô ráo ngay cả sau hai giờ chạy."
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 my-12 rounded">
                <p className="text-lg font-semibold mb-2 text-accent-foreground">Điểm Chính</p>
                <p className="text-muted-foreground leading-relaxed">
                  Thấm hút ẩm không chỉ về sự thoải mái—mà còn về hiệu suất. Bằng cách giữ cho da của bạn khô ráo, những
                  loại vải này giúp điều chỉnh nhiệt độ cơ thể, giảm ma sát và cho phép bạn tập trung hoàn toàn vào hoạt
                  động của mình.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Chăm Sóc Trang Phục Kỹ Thuật Của Bạn</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Để duy trì các đặc tính thấm hút ẩm của trang phục của bạn, việc chăm sóc đúng cách là rất quan trọng.
                Luôn giặt vải kỹ thuật bằng nước lạnh với chất tẩy rửa nhẹ, tránh chất làm mềm vải (có thể làm tắc các
                sợi) và phơi khô khi có thể. Những bước đơn giản này sẽ đảm bảo trang phục hiệu suất của bạn tiếp tục
                hoạt động tốt nhất trong nhiều năm tới.
              </p>
            </div>

            {/* Author Info */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  NL
                </div>
                <div>
                  <div className="font-semibold text-lg">TS. Nguyễn Lan</div>
                  <div className="text-sm text-muted-foreground">Kỹ Sư Vật Liệu Trưởng tại TechStudio</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Bài Viết Liên Quan</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Vật Liệu Bền Vững Trong Đồ Thể Thao",
                  excerpt: "Khám phá những đổi mới thân thiện với môi trường mà không ảnh hưởng đến hiệu suất.",
                  date: "25 Thg 12, 2025",
                  image: "/placeholder.svg?height=300&width=500",
                  slug: "vat-lieu-ben-vung",
                },
                {
                  title: "Tập Luyện Mùa Đông: Trang Phục Hiệu Suất",
                  excerpt:
                    "Các tính năng thiết yếu của đồ ngoài trời kỹ thuật dành cho vận động viên trong thời tiết lạnh.",
                  date: "20 Thg 12, 2025",
                  image: "/placeholder.svg?height=300&width=500",
                  slug: "tap-luyen-mua-dong",
                },
              ].map((post, index) => (
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

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/#blog">Xem Tất Cả Bài Viết</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}
