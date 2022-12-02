import * as React from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import { Card, Row, Col } from "react-bootstrap"

const ExternalLink = ({href, text}) => (
  <OutboundLink href={href}
    target="_blank"
    rel="noreferrer"
    style={{textDecoration: "none"}}
  >
    <h4 align="center">{text}</h4>
  </OutboundLink>
)

const ExternalCard = ({url, title, siteName, description, images, favicons, imgStyle }) => (
  <Card style={{
    position: "relative",
    maxWidth: "400px"
    }}>
    <Card.Header className="text-center">
      {siteName}
    </Card.Header>
    {images.length !== 0 ?
      <Card.Img src={images[0]} style={imgStyle} alt=""></Card.Img>
      : ""}
    <Card.Body>
      <Row>
        <Col align="center" className="align-self-center">
          <img src={favicons[0]} alt=""/>
        </Col>
        <Col sm={9}>
          <Card.Title>{title}</Card.Title>
        </Col>
      </Row>
      <Card.Subtitle>{description}</Card.Subtitle>
    </Card.Body>
    <Card.Footer className="text-muted text-center">{url}</Card.Footer>
    <OutboundLink href={url} target="_blank" rel="noreferrer" className="stretched-link">
    </OutboundLink>
  </Card>

)

ExternalCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  siteName: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  favicons: PropTypes.arrayOf(PropTypes.string),
  imgStyle: PropTypes.object
}

ExternalCard.defaultProps = {
  url: "",
  title: "",
  siteName: "",
  description: "",
  images: [],
  favicons: [],
  imgStyle: {}
}

export { ExternalLink, ExternalCard }
