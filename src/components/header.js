import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

import pageLinks from "../data/site-pages"
import useSiteMetadata from "../hooks/site-metadata"

const headerLinks = {};
const headerLinksStyle = { textDecoration:"None", fontSize: `1.2rem` }

Object.values(pageLinks).forEach((l) =>
  ("folder" in l) ?
    !(l.folder in headerLinks) ?
      headerLinks[l.folder] = [<Link to={l.url} key={l.url} style={headerLinksStyle}>{l.title}</Link>]
      : headerLinks[l.folder].push(<Link to={l.url} key={l.url} style={headerLinksStyle}>{l.title}</Link>)
    : headerLinks[l.title] = <Link to={l.url} key={l.url} style={headerLinksStyle}>{l.title}</Link>);


const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header>
      <Navbar bg="dark" expand="lg">
        <Container align="center" className="text-align-center">
          <Navbar.Brand href="/" className="text-primary">
            <StaticImage
              src="../images/triquetra.png"
              loading="eager"
              width={30}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            &nbsp;
            {title}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-primary"/>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {Object.keys(headerLinks).map((k) => (
                Array.isArray(headerLinks[k]) ?
                  <NavDropdown menuVariant="dark" title={k} id={"nav-dropdown"+k} key={k}>
                    {headerLinks[k].map((l) =>
                      <NavDropdown.Item eventKey={k+toString(l)} key={k+toString(l)}>{l}</NavDropdown.Item>
                    )}
                  </NavDropdown>
                  : <Nav.Link eventKey={k} key={k}>{headerLinks[k]}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "Home",
}

export default Header
