import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import pageLinks from "../data/site-pages"

import { Row, Col } from "react-bootstrap"
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

      <Row align="center" lg>
        <Col>
          <h1>Portfolio</h1>
          <FlickrAlbum
            href="https://www.flickr.com/photos/135898386@N03/albums/72157670372833070"
            imgSrc="https://live.staticflickr.com/5744/21113773841_b7e7e707f7_z.jpg"
            title="Portfolio"
          />
        </Col>
        <Col>
          <h1>Charcoals</h1>
          <FlickrAlbum
            href="https://www.flickr.com/photos/135898386@N03/albums/72157658059168186"
            imgSrc="https://live.staticflickr.com/4446/26284163899_584b31d185.jpg"
            title="Charcoals"
          />
        </Col>
      </Row>
      <Row align="center">
        <Col>
          <h1>Paint</h1>
          <FlickrAlbum
            href="https://www.flickr.com/photos/135898386@N03/albums/72157658054521292"
            imgSrc="https://live.staticflickr.com/620/20455661594_40933b3507.jpg"
            title="Paint"
          />
        </Col>
        <Col>
          <h1>Sketches</h1>
          <FlickrAlbum
            href="https://www.flickr.com/photos/135898386@N03/albums/72157657666322140"
            imgSrc="https://live.staticflickr.com/650/21052157036_ee98fbd582_z.jpg"
            title="Sketches"
          />
        </Col>
      </Row>



      <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
    </Layout>
)

export const Head = () => <Seo title={page.title} />

export default SitePage
