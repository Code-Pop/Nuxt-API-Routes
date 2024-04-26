import { createComment } from '@/data/comments'

export default defineEventHandler(async (event) => {
  const { commenter, content } = await readBody(event)
  const postSlug = getRouterParam(event, 'post')!

  const comment = {
    commenter,
    content,
    postId: postSlug
  }

  createComment(comment)
})
