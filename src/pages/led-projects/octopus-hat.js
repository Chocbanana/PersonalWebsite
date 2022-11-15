import * as React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"
import FlickrAlbum from "../../components/flickr-embed"

import gif1 from "../../images/octopus-hat/pattern_bouncy.gif"
import gif2 from "../../images/octopus-hat/pattern_fire_1.gif"
import gif3 from "../../images/octopus-hat/pattern_fire_2.gif"
import gif4 from "../../images/octopus-hat/pattern_glow.gif"

const page = pageLinks["octohat"]

const gifstyle = {
  width: "100%",
  minWidth: "150px",
  marginBottom: "15px"
}

const SitePage = () => (
    <Layout>
      <h1 style={{textAlign:"center"}}>{page.title}</h1>
      <h5>{page.description}</h5>

      <h1 style={{textAlign:"center"}}>Some example patterns</h1>
      <Row style={{marginBottom: "20px"}} md>
        <Col><img src={gif1} style={gifstyle} alt=""/></Col>
        <Col><img src={gif2} style={gifstyle} alt=""/></Col>
        <Col><img src={gif3} style={gifstyle} alt=""/></Col>
        <Col><img src={gif4} style={gifstyle} alt=""/></Col>
      </Row>

      <FlickrAlbum
        href="https://www.flickr.com/photos/135898386@N03/albums/72177720303677871"
        imgSrc="https://live.staticflickr.com/65535/52499510017_6e4aed7298.jpg"
        title="Octopus Hat"
        />

      <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
    </Layout>
)

export const Head = () => <Seo title={page.title} />

export default SitePage
