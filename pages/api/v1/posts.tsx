import { getPosts } from "lib/posts"
import { NextApiHandler } from "next"

const Posts: NextApiHandler = async (request, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  const posts = await getPosts()
  response.write(JSON.stringify(posts))
  response.end()
}

export default Posts