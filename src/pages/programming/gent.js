import * as React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import { LayoutWithTitle } from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"
import { ExternalCard } from "../../components/external-links"


const page = pageLinks["gent"]


const SitePage = ({ pageContext }) => (
  <LayoutWithTitle page={page}>
    <Row className="justify-content-center" style={{marginTop: "2rem", marginBottom: "2rem"}}><Col md="auto"><ExternalCard {...pageContext.linkPreviewData[0]}/></Col></Row>
    <p>
      A library for the easy construction, training, and running of artifical neural networks, with the ability to serialize and load arbitrary network architecture definitions and pre-trained weights. Built on top of pytorch.

      This is very much a work in progress and is being used for currently active research; expect the interface to change drastically!

      Eventually, this library will be "An algorithm for Genetic Evolution of Network Topologies".
    </p>

    <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
  </LayoutWithTitle>
)

export const Head = () => <Seo {...page} />

export default SitePage
