import React, {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react'
import Image from 'next/image'
import {useMDXComponent} from 'next-contentlayer/hooks'

interface RoundedImageProps {
  src: string
  alt: string
}
function RoundedImage(props: RoundedImageProps) {
  return <Image className="rounded-lg" {...props} />
}

const components = {
  Image: RoundedImage,
}

interface MdxProps {
  code: string
}

export function Mdx({code}: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={components} />
    </article>
  )
}
