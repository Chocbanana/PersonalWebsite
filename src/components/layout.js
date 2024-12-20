/**
 * The main layout of every page in the site. Still need to incude an SEO component per page file.
 */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, Row, Col, Stack } from "react-bootstrap"
import { FaFlickr, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { ScrollSpy } from "bootstrap"

import "./index.scss"

import Header from "./header"
import TableOfContents from "./toc"
import useSiteMetadata from "../hooks/site-metadata"

import BgImage from "../images/bgimg.png"

const LayoutWithToc = ({ children, page }) => {
  const [scrollspy, setScrollspy] = useState(null)
  const toc = <TableOfContents />

  useEffect(() => {
    if (scrollspy === null) {
      setScrollspy(
        new ScrollSpy(document.getElementById("toc-body"), {
          target: "#toc",
          smoothScroll: true,
        })
      )
    } else {
      scrollspy.refresh()
    }
  }, [scrollspy, children, toc])

  return (
    <LayoutWithTitle page={page}>
      <Row>
        <Col>{toc}</Col>

        <Col
          lg={10}
          md={11}
          tabIndex="0" // Needed for scrollspy?
          id="toc-body"
        >
          {children}
        </Col>
      </Row>

      <div style={{ textAlign: "center" }}>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </LayoutWithTitle>
  )
}

// Parallax scrolling background
const parallaxBgCss = {
  minHeight: "90vh",
  width: "100%",
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  // Turned off to get floating sticky TOC working...
  // overflow: "hidden",
  position: "relative",
  backgroundAttachment: "fixed",
  MoxBackgroundSize: "cover",
  WebkitBackgroundSize: "cover",
  backgroundSize: "cover",
  backgroundPosition: "top center",
}

const LayoutWithTitle = ({ page, children }) => (
  <>
    <Header />
    <main>
      <Container fluid className="bg-secondary" style={parallaxBgCss}>
        {/* Title */}
        <Row className="d-flex p-2">
          <div className="text-center" style={{ height: "100px" }}>
            <h1
              className="display-1 my-2"
              style={{
                color: "white",
                // fontWeight: "bolder",
                textShadow: "2px 2px 4px black, -2px 2px 4px black",
                fontFamily: "myfont5",
              }}
            >
              {page.title}
            </h1>
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <Col
            md="auto"
            lg={10}
            // Fuzzy main content box
            style={{
              boxShadow: "0px 0px 35px 30px var(--bs-secondary)",
              marginBottom: "100px",
              backgroundColor: "rgba(var(--bs-secondary-rgb), 0.95)",
            }}
            className="text-warning"
          >
            <h5 style={{ fontWeight: "lighter", textAlign: "center", marginBottom: "2rem" }}>{page.description}</h5>
            {children}
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </>
)

const Layout = ({ children }) => (
  <>
    <Header />
    <main>
      <Container fluid className="bg-secondary" style={parallaxBgCss}>
        <Row className="justify-content-md-center">
          <Col
            md="auto"
            lg={10}
            // Fuzzy main content box
            style={{
              boxShadow: "0px 0px 35px 30px var(--bs-secondary)",
              marginTop: "100px",
              marginBottom: "100px",
              backgroundColor: "rgba(var(--bs-secondary-rgb), 0.95)",
            }}
          >
            {children}
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </>
)

const ftLinksProps = { target: "_blank", rel: "noreferrer", style: { textDecoration: "none" } }

const Footer = () => {
  const siteMetadata = useSiteMetadata()

  return (
    <footer>
      <Container
        fluid
        className="bg-dark mt-auto align-items-center position-absolute text-light"
        style={{ padding: "7px", minHeight: "5vh" }}
      >
        <Row className="flex-row-reverse">
          <Col className="text-end" sm={4}>
            <Row className="justify-content-end">
              <Col>Find me:</Col>
              <Col>
                <Stack gap={1}>
                  <div>
                    <FaLinkedin />
                    <OutboundLink {...ftLinksProps} href={siteMetadata?.linkedIn || "/#"}>
                      {" "}
                      LinkedIn
                    </OutboundLink>
                  </div>
                  <div>
                    <FaTwitter />
                    <OutboundLink {...ftLinksProps} href={siteMetadata?.twitter || "/#"}>
                      {" "}
                      Twitter
                    </OutboundLink>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Stack gap={1}>
                  <div>
                    <FaFlickr />
                    <OutboundLink {...ftLinksProps} href={siteMetadata?.flickr || "/#"}>
                      {" "}
                      Flickr
                    </OutboundLink>
                  </div>
                  <div>
                    <FaGithub />
                    <OutboundLink {...ftLinksProps} href={siteMetadata?.github || "/#"}>
                      {" "}
                      Github
                    </OutboundLink>
                  </div>
                </Stack>
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col style={{ fontSize: `0.75rem` }} className="align-self-end">
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <OutboundLink href="https://www.gatsbyjs.com">Gatsby</OutboundLink>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { LayoutWithToc, LayoutWithTitle }
export default Layout
