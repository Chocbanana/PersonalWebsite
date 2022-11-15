import * as React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import pageLinks from "../data/site-pages"

import FlickrAlbum from "../components/flickr-embed"
import { ExternalCard } from "../components/external-links"


const page = pageLinks["art"]

const SitePage = ({ pageContext }) => (
    <Layout>
      <h1 style={{textAlign:"center"}}>{page.title}</h1>
      <h5>{page.description}</h5>

      <Row style={{marginTop: "2rem", marginBottom: "2rem"}}>
        <Col md={6}
          className="align-self-center">
          <p>All my art is hosted on Flickr.</p>
          <p>Check it out! You can also view selected albums below, after clicking on an album you can use your <b>arrow keys</b> or tap the edges of the album to scroll through images.</p>
        </Col>
        <Col>
          <ExternalCard {...pageContext.linkPreviewData[0]} />
        </Col>
      </Row>



      <Row align="center" lg>
        <Col>
          <h1>Portfolio</h1>
          <FlickrAlbum
            href="https://www.flickr.com/photos/135898386@N03/albums/72157670372833070"
            imgSrc="https://live.staticflickr.com/5793/20890537248_c9df75deab_z.jpg"
            title="Portfolio"
          />
        </Col>
        <Col>
          <h1>Paint</h1>
          <FlickrAlbum
            href="https://www.flickr.com/photos/135898386@N03/albums/72157658054521292"
            imgSrc="https://live.staticflickr.com/620/20455661594_40933b3507.jpg"
            title="Paint"
          />
        </Col>
      </Row>
      <Row align="center">
        <Col>
          <h1>Charcoals</h1>
          <FlickrAlbum
            href="https://www.flickr.com/photos/135898386@N03/albums/72157658059168186"
            imgSrc="https://live.staticflickr.com/4446/26284163899_584b31d185.jpg"
            title="Charcoals"
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
