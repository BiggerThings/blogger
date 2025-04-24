import { prisma } from "./utils/db";

async function getPosts() {
  const items = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
    }
  });

  return items;
}

export default async function Home() {
  const data = await getPosts();
  
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <h1 key={item.title}>{item.title}</h1>
      
        ))}
      </div>
    </div>
  )
}
