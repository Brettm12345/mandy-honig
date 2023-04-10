import {Blog} from 'contentlayer/generated'
import dayjs from 'dayjs'
import {Calendar, Clock} from 'lucide-react'
import Image from 'next/image'
import {FC} from 'react'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'

dayjs.extend(relativeTime)

interface PostProps {
  blog: Blog
}

export const Post: FC<PostProps> = ({blog}) => (
  <li
    key={blog.slug}
    className="link-box flex-col md:flex-row bg-white dark:bg-gray-100/5 dark:hover:bg-white/10 hover:bg-gray-700/5 shadow-sm hover:shadow-lg transition-all flex space-x-3 rounded-md p-3 border dark:border-gray-800 relative"
  >
    <Image
      className="rounded-md min-w-[120px] mx-auto mb-4"
      alt={blog.title}
      src={blog.image!}
      width={150}
      height={200}
    />
    <article className="flex flex-col justify-between">
      <div className="flex flex-col space-y-1.5">
        <Link
          className="link-overlay text-pink-500 font-semibold dark:text-pink-400 focus:ring-1 focus:ring-offset-2 ring-offset-transparent rounded-md focus:ring-pink-500 focus:dark:ring-pink-400 focus:outline-none"
          href="/posts/[slug]"
          as={`/posts/${blog.slug}`}
          passHref
        >
          <h2>{blog.title}</h2>
        </Link>
        <p className="text-gray-600 dark:text-gray-300  mb-8 text-base">
          {blog.summary}
        </p>
      </div>
      <div className="flex flex-row gap-1 mt-4 flex-wrap">
        <span className="badge">
          <Clock />
          {blog.readingTime.minutes.toFixed(0)} minute read
        </span>
        <span className="badge">
          <Calendar />
          {dayjs(blog.publishedAt).fromNow()}
        </span>
      </div>
    </article>
  </li>
)
