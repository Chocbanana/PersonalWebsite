import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import pageLinks from "../data/site-pages"

import FlickrAlbum from "../components/flickr-album"
import ExternalLink from "../components/external-links"

const page = pageLinks["art"]

const SitePage = () => (
    <Layout>
      <h1 style={{textAlign:"center"}}>{page.title}</h1>
      <h5>{page.description}</h5>

      <p>All my art is hosted on Flickr.</p>

      <ExternalLink
        href="https://www.flickr.com/photos/135898386@N03/albums"
        text="Link to my Flickr"
      />

      <p>Check it out! You can also view selected albums below, after clicking on an album you can use your <b>arrow keys</b> or tap the edges of the album to scroll through images.</p>

      <FlickrAlbum
        href="https://www.flickr.com/photos/135898386@N03/albums/72157658059168186"
        imgSrc="https://live.staticflickr.com/4446/26284163899_584b31d185.jpg"
        title="Charcoals"
      />

      <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
    </Layout>
)

export const Head = () => <Seo title={page.title} />

export default SitePage
