import React from 'react'
import {PortableText} from '@portabletext/react'
import stylesBlog from '../styles/blog.module.css'

const components = {
    marks: {
      link: ({value, children}) => {
        // Read https://css-tricks.com/use-target_blank/
        const { blank, href } = value
        return blank ?
          <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
          : <a href={href}>{children}</a>
      }
    }
  }

const reference = ({posts}=props) => {

  return (
    <div className={stylesBlog.reference}>
    <h2>Reference</h2>
    <PortableText value={posts.reference} components={components} />
    </div>
  )
}

export default reference