import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

import pageLinks from "../data/site-pages"

const headerLinks = {};
const headerLinksStyle = { textDecoration:"None", fontSize: `1.2rem` }

Object.values(pageLinks).forEach((l) =>
  ("folder" in l) ?
    !(l.folder in headerLinks) ?
      headerLinks[l.folder] = [<Link to={l.url} style={headerLinksStyle}>{l.title}</Link>]
      : headerLinks[l.folder].push(<Link to={l.url} style={headerLinksStyle}>{l.title}</Link>)
    : headerLinks[l.title] = <Link to={l.url} style={headerLinksStyle}>{l.title}</Link>);


const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="dark" expand="lg" style={{borderBottom: "solid var(--bs-light)"}}>
      <Container align="center" className="text-align-center">
        <Navbar.Brand href="/" className="text-primary">
          <StaticImage
            src="../images/triquetra.png"
            loading="eager"
            width={30}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
          &nbsp;
          {/* <Link
            to="/"
            style={{
              fontSize: `var(--font-lg)`,
              textDecoration: `none`,
            }}
          > */}
            {siteTitle}
          {/* </Link> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-primary"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Object.keys(headerLinks).map((k) => (
              Array.isArray(headerLinks[k]) ?
                <NavDropdown menuVariant="dark" title={k} id={"nav-dropdown"+k}>
                  {headerLinks[k].map((l) => <NavDropdown.Item >{l}</NavDropdown.Item>)}
                </NavDropdown>
                : <Nav.Link eventKey={k}>{headerLinks[k]}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "Home",
}

export default Header
