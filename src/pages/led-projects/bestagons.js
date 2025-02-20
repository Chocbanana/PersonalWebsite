import * as React from "react"
import { Row, Col, Figure } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import { LayoutWithToc } from "../../components/layout"
import { ExternalCard } from "../../components/external-links"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"
import { FlickrAlbum, InstagramPost } from "../../components/embed"

const page = pageLinks["bestagons"]

const gifstyle = {
  width: "100%",
  minWidth: "150px",
  maxWidth: "500px",
  marginBottom: "15px",
  borderRadius: "30px",
}

const SitePage = ({ pageContext }) => (
  <LayoutWithToc page={page}>
    <Row>
      {/* <Col>What it is, features</Col> */}
      <Col>TODO</Col>
      <Col>
        <InstagramPost />
      </Col>
    </Row>
    <Row>
      <Col>
        <ExternalCard
          {...pageContext.linkPreviewData[0]}
          imgStyle={{ maxHeight: "100px" }}
          // cardStyle={{ maxHeight: "200px" }}
        />
      </Col>
      <Col>TODO</Col>
    </Row>
    <h2 className="my-3">The LED Lattice Design</h2>
    <h3 className="my-3">3D Printing the Joints</h3>
    <h2 className="my-3">Controller Programming</h2>
    <Row>Include about the power supply</Row>
    <h3 className="my-3">Audio Reactivity and Remote Control</h3>
    <h3 className="my-3">Designing the Case</h3>
    <h2 className="my-3">Infinity Mirrors</h2>
    <h2 className="my-3">Assistants</h2>
    <FlickrAlbum
      href="https://www.flickr.com/photos/135898386@N03/albums/72177720323960015"
      imgSrc="https://live.staticflickr.com/65535/54340321841_0b88c2ddd7_o.jpg"
      title="The Bestagons"
    />
  </LayoutWithToc>
)

export const Head = () => <Seo {...page} />

export default SitePage
