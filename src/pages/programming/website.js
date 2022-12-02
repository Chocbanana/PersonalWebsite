import * as React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import { LayoutWithTitle } from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"
import { ExternalCard } from "../../components/external-links"

const page = pageLinks["website"]

const SitePage = ({ pageContext }) => (
  <LayoutWithTitle page={page}>

    <Row className="justify-content-center"
      style={{marginTop: "2rem", marginBottom: "2rem"}}>
      <Col md="auto" style={{marginBottom: "15px"}}>
        <ExternalCard {...pageContext.linkPreviewData[0]}/>
      </Col>
      <Col md="auto">
        <ExternalCard {...pageContext.linkPreviewData[1]}/>
      </Col>
    </Row>

    <p>
      A static webite built with bare-bones Gatsby and bootstrap, <b>no template used</b>! This is meant to be a basic website to show off my content in various forms, but is easily customizable to fit different content and to feature various pages in the homepage. Hosted by Github Pages.
    </p>

    <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
  </LayoutWithTitle>
)

export const Head = () => <Seo {...page} />

export default SitePage
