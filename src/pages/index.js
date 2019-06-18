import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi akaihuang</h1>
        <p>歡迎來到咖雌比網站</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>

  </div>
)

export default IndexPage
