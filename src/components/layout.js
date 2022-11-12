/**
 * The main layout of every page in the site. Still need to incude an SEO component per page file.
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col, Stack} from 'react-bootstrap'
import {FaFlickr, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'

import  "./index.scss"

import Header from "./header"

import BgImage from "../images/bgimg.jpg"




const ftLinksProps = { target: "_blank",
  rel: "noreferrer",
  style: {textDecoration: "none"}
};


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          linkedIn
          twitter
          flickr
          github
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
      <main>
        <Container fluid className="bg-secondary" style={{minHeight: "100vh", backgroundImage: `url(${BgImage})`, }}>
          <Row className="justify-content-md-center">
            <Col md="auto"
              className="bg-secondary"
              style={{boxShadow: "0px 0px 30px 40px var(--bs-secondary)", marginTop: "60px"}}
              >
              {children}
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Container fluid
          className="bg-dark mt-auto align-items-center position-absolute text-light"
          style={{padding:"7px"}}>
          <Row>
            <Col style={{fontSize: `0.75rem`}} className="align-self-end">
              © {new Date().getFullYear()} &middot; Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </Col>
            <Col className="text-end" sm={4}>
              <Row className="justify-content-end">
                <Col className="justify-end">Find me:</Col>
                <Col className="justify-end">
                  <Stack gap={1}>
                    <div>
                    <FaLinkedin/>
                  <a {...ftLinksProps} href={data.site.siteMetadata?.linkedIn || "/#"}>  LinkedIn</a>
                    </div>
                    <div>
                    <FaTwitter/>
                  <a {...ftLinksProps} href={data.site.siteMetadata?.twitter || "/#"}>  Twitter</a>
                    </div>
                  </Stack>
                </Col>
                <Col className="justify-end">
                  <Stack gap={1}>
                    <div>
                    <FaFlickr/>
                <a {...ftLinksProps} href={data.site.siteMetadata?.flickr || "/#"}>  Flickr</a>
                    </div>
                    <div>
                    <FaGithub/>
                <a {...ftLinksProps} href={data.site.siteMetadata?.github || "/#"}>  Github</a>
                    </div>
                  </Stack>
                </Col>
              </Row>
                {/* &emsp; <FaLinkedin/>
                <a {...ftLinksProps} href={data.site.siteMetadata?.linkedIn || "/#"}>  LinkedIn</a>
                &emsp; <FaTwitter/>
                <a {...ftLinksProps} href={data.site.siteMetadata?.twitter || "/#"}>  Twitter</a>
                &emsp; <FaFlickr/>
                <a {...ftLinksProps} href={data.site.siteMetadata?.flickr || "/#"}>  Flickr</a>
                &emsp; <FaGithub/>
                <a {...ftLinksProps} href={data.site.siteMetadata?.github || "/#"}>  Github</a>
                &emsp; */}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
