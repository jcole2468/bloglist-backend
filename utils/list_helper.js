const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let likeCount = 0
  blogs.forEach(blog => {
    likeCount += blog.likes
  })

  return likeCount
}

const favoriteBlog = (blogs) => {
  let topBlog
  blogs.reduce((acc, cv) => {
    if (acc.likes > cv.likes) {
      topBlog = acc
      return acc
    } else {
      topBlog = cv
      return cv
    }
  })
  return topBlog
}

const mostBlogs = (blogs) => {
  const authors = []
  
}

module.exports = {
  dummy, totalLikes, favoriteBlog
}

