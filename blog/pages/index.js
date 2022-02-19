import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link'

export default function Home({posts}) {
  return (
    <div className="">
      {posts.map((post, index) => {
        if(post.slug) return (
            <Link href={'/blog/' + post.slug} passHref key={index}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{post.frontMatter.title}</div>
                  <p className="text-gray-700 text-base">
                  {post.frontMatter.description}
                  </p>
                  <small className="">{post.frontMatter.date}</small>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    console.log(filename)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })


  return {
    props: {
      posts
    }
  }
}
