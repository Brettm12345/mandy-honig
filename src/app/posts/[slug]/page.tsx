import {notFound} from 'next/navigation'
import {Mdx} from '@/components/Mdx'
import {allBlogs} from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'

export async function generateStaticParams() {
  return allBlogs.map(post => ({
    slug: post.slug,
  }))
}

export const generateMetadata = ({params}: {params: {slug: string}}) => {
  const post = allBlogs.find(post => post.slug === params?.slug)
  if (!post) {
    return {}
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post
  const ogImage = `https://livewellwithmandy.com/${image}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://livewellwithmandy.com/posts/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({params}: {params: {slug: string}}) {
  const post = allBlogs.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <h1 className="font-bold text-3xl">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 text-sm]">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-2 py-1 tracking-tighter">
          {post.publishedAt}
        </div>
        <div className="h-[0.2em] bg-gray-100 dark:bg-gray-800 mx-2" />
        <Avatar>
          <AvatarImage src="images/avatar.jpg" />
          <AvatarFallback>MH</AvatarFallback>
        </Avatar>
      </div>
      <Mdx code={post.body.code} />
    </section>
  )
}
