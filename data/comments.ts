export interface Comment {
  id: number,
  commenter: string,
  content: string,
  postId: string
}

export interface NewComment {
  commenter: string,
  content: string,
  postId: string
}

export const getCommentsUrl = (postId: string) => (
  `http://localhost:3001/comments?postId=${postId}`
)

export const createComment = (comment: NewComment) => {
  return $fetch('http://localhost:3001/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
}
