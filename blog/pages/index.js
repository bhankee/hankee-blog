import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link'

export default function Home({posts}) {
  return (
    <div className="">
      {posts.map((post, index) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>
          <div className="" style={{ maxWidth: '540px' }}>
            <div className="">
              <div className="">
                <div className="">
                  <h5 className="">{post.frontMatter.title}</h5>
                  <p className="">{post.frontMatter.description}</p>
                  <p className="">
                    <small className="">{post.frontMatter.date}</small>
                  </p>
                </div>
              </div>
              <div className="">

              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}


export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
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
