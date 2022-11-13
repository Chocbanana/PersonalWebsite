import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"

import ExternalLink from "../../components/external-links"

const page = pageLinks["website"]

const SitePage = () => (
  <Layout>
    <h1 style={{textAlign:"center"}}>{page.title}</h1>
    <h5>{page.description}</h5>

    <ExternalLink
      href="https://github.com/Chocbanana/PersonalWebsite"
      text="Link to the website Github repo"
    />
    <ExternalLink
      href="https://github.com/Chocbanana/Chocbanana.github.io"
      text="Link to the hosting Github Pages Github repo"
    />
    <p>
      A static webite built with bare-bones Gatsby and bootstrap! This is meant to be a basic website to show off my content in various forms, but is easily customizable to fit different content and to feature various pages in the homepage. Hosted by Github Pages.
    </p>

    <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
  </Layout>
)

export const Head = () => <Seo title={page.title} />

export default SitePage
