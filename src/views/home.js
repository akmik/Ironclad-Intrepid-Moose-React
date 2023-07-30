import React from 'react'

import { Helmet } from 'react-helmet'

import BlogPostCard1 from '../components/blog-post-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ironclad Intrepid Moose</title>
        <meta property="og:title" content="Ironclad Intrepid Moose" />
      </Helmet>
      <div className="home-blog">
        <div className="home-container1">
          <BlogPostCard1 rootClassName="rootClassName3"></BlogPostCard1>
        </div>
        <div className="home-container2">
          <BlogPostCard1
            image_src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName2"
          ></BlogPostCard1>
        </div>
        <div className="home-container3">
          <BlogPostCard1
            image_src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName1"
          ></BlogPostCard1>
        </div>
      </div>
    </div>
  )
}

export default Home
