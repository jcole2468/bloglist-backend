const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'Test Blog',
    author: 'Jamal Coleman',
    url: 'http://google.com',
    likes: 123,
    id: '6071fe2063150c20a0ac7b9f'
  },
  {
    title: 'blog 2',
    author: 'Myles Coleman',
    url: 'www.amazingskylights.com',
    likes: 220,
    id: '607201130f28d720c96a8ee7'
  },
  {
    title: 'blog 4',
    author: 'Myles',
    url: 'www.amazingskylights.com',
    likes: 220,
    id: '6072100a4eedae2544d0075c'
  }
]
const nonExistingId = async () => {
  const blog = new Blog({ content: 'willremovethissoon', date: new Date() })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb,
  nonExistingId,
  usersInDb
}