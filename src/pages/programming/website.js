import * as React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"
import { ExternalCard } from "../../components/external-links"

const page = pageLinks["website"]

const SitePage = ({ pageContext }) => (
  <Layout>
    <h1 style={{textAlign:"center"}}>{page.title}</h1>
    <h5>{page.description}</h5>

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
      A static webite built with bare-bones Gatsby and bootstrap! This is meant to be a basic website to show off my content in various forms, but is easily customizable to fit different content and to feature various pages in the homepage. Hosted by Github Pages.
    </p>

    <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
  </Layout>
)

export const Head = () => <Seo title={page.title} description={page.description} />

export default SitePage
