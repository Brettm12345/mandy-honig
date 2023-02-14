import { Calendar } from "lucide-react";

import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { Post } from "@/components/Post";

export const metadata = {
  description: "A blog for health, fitness and sobriety advice.",
  openGraph: {
    title: "Mandy Honig",
    description: "A blog for health, fitness and sobriety advice.",
    url: "https://mandy.vercel.app",
    siteName: "Mandy Honig",
    locale: "en-US",
    type: "website",
  },
};
export default function Home() {
  return (
    <div>
      <ul className="space-y-6">
        {allBlogs.map((blog) => (
          <Post key={blog.slug} blog={blog} />
        ))}
      </ul>
    </div>
  );
}
