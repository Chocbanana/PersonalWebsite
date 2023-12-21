import * as React from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import { Card, Row, Col, Image } from "react-bootstrap"

const ExternalLink = ({ href, text }) => (
  <OutboundLink href={href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
    <h4 align="center">{text}</h4>
  </OutboundLink>
)

const ExternalCard = ({ url, title, siteName, description, images, favicons, imgStyle }) => (
  <Card
    style={{
      position: "relative",
      maxWidth: "500px",
    }}
  >
    {siteName ? <Card.Header className="text-center">{siteName}</Card.Header> : ""}
    <Row>
      <Col>
        <Card.Body>
          <Row>
            <Col xs={2} align="center" className="align-self-center">
              <img src={favicons[0]} alt="" width="100%" />
            </Col>
            <Col sm={10}>
              <Card.Title>{title}</Card.Title>
            </Col>
            <Card.Subtitle>{description}</Card.Subtitle>
          </Row>
        </Card.Body>
      </Col>
      {images.length !== 0 ? (
        <Col sm={4} md={4} lg={4}>
          <Image src={images[0]} style={{ width: "100%", height: "100%", ...imgStyle }} alt=""></Image>
        </Col>
      ) : (
        ""
      )}
    </Row>
    <Card.Footer className="text-muted text-center">{url}</Card.Footer>
    <OutboundLink href={url} target="_blank" rel="noreferrer" className="stretched-link"></OutboundLink>
  </Card>
)

ExternalCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  siteName: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  favicons: PropTypes.arrayOf(PropTypes.string),
  imgStyle: PropTypes.object,
}

ExternalCard.defaultProps = {
  url: "",
  title: "",
  siteName: "",
  description: "",
  images: [],
  favicons: [],
  imgStyle: {},
}

export { ExternalLink, ExternalCard }
