import React from "react"
import { Link } from "gatsby"

const BlogIndex = () => {
    return (
      <div>
          <ul>
              <Link to="/about">About</Link>
          </ul>
          <h1>Gatsby Blog Site</h1>
      </div>
    )
}

export default BlogIndex
