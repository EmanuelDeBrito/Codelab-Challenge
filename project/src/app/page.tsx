import { BlogItem } from "@/components/blog-item"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BlogData } from "@/data/blog-data"

const Page = () => {
    return(
        <div>
            <Header />
            <main className="flex flex-col gap-[80px] py-[80px] max-w-5xl mx-auto">
                <Hero />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {BlogData.map((blog, key) => (
                        <BlogItem 
                            image={blog.image}
                            title={blog.title}
                            key={key}                        
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Page