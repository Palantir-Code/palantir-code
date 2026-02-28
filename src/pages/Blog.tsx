import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const { t } = useTranslation();

  const posts = t("blog.posts", { returnObjects: true }) as Array<{
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: string;
    category: string;
    content: string;
  }>;

  return (
    <Layout>
      <SEO title={`Blog | PALANTIR-CODE`} description={t("blog.heroDesc")} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              {t("blog.badge")}
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("blog.title")}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t("blog.heroDesc")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
                >
                  <Badge variant="secondary" className="w-fit mb-3 text-xs">
                    {post.category}
                  </Badge>
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
