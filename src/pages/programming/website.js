import * as React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"

import { getLinkPreview } from "link-preview-js";
import { ExternalCard } from "../../components/external-links"

const page = pageLinks["website"]

const SitePage = ({ serverData }) => (
  <Layout>
    <h1 style={{textAlign:"center"}}>{page.title}</h1>
    <h5>{page.description}</h5>

    <Row className="justify-content-center"
      style={{marginTop: "2rem", marginBottom: "2rem"}}>
      <Col md="auto">
        <ExternalCard {...serverData.gatsbyrepo}/>
      </Col>
      <Col md="auto">
        <ExternalCard {...serverData.siterepo}/>
      </Col>
    </Row>

    <p>
      A static webite built with bare-bones Gatsby and bootstrap! This is meant to be a basic website to show off my content in various forms, but is easily customizable to fit different content and to feature various pages in the homepage. Hosted by Github Pages.
    </p>

    <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
  </Layout>
)

export const Head = () => <Seo title={page.title} />

export default SitePage

export async function getServerData() {
  const gatsbyrepo = await getLinkPreview("https://github.com/Chocbanana/PersonalWebsite")
  const siterepo = await getLinkPreview("https://github.com/Chocbanana/Chocbanana.github.io")
  return { props: {gatsbyrepo: await gatsbyrepo, siterepo: await siterepo }}
}
