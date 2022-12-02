import * as React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import Layout from "../components/layout"
import Seo from "../components/seo"
import pageLinks from "../data/site-pages"
import { ExternalCard } from "../components/external-links"



const page = pageLinks["printing"]

const SitePage = ({ pageContext }) => (
    <Layout>
      <h1 style={{textAlign:"center"}}>{page.title}</h1>
      <h5>{page.description}</h5>

      <Row style={{marginTop: "2rem", marginBottom: "2rem"}}>
        <Col md={6}
          className="align-self-center">
          <p>All my makes, models, remixes and designs are hosted on Printables.com! You can browse the designs I made on the website, along with select items I've printed and enjoyed. I designed everything using Blender, used PrusaSlicer for slicing the models to print them, and the printer itself I use is a Prusa MK3S {"(a very lovely printer, works so smoothly!)"}</p>
        </Col>
        <Col>
          <ExternalCard {...pageContext.linkPreviewData[0]} />
        </Col>
      </Row>

      <OutboundLink href="https://www.printables.com/social/44101-fractaly/models" target="_blank" rel="noreferrer">
        <StaticImage
          src="../images/printables_site.png"
          loading="eager"
          // width={30}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
      </OutboundLink>

      <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
    </Layout>
)

export const Head = () => <Seo {...page} />

export default SitePage
