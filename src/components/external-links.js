import * as React from "react"
import PropTypes from "prop-types"

import { Card, Row, Col } from "react-bootstrap"

const ExternalLink = ({href, text}) => (
  <a href={href}
    target="_blank"
    rel="noreferrer"
    style={{textDecoration: "none"}}
  >
    <h4 align="center">{text}</h4>
  </a>
)

const ExternalCard = ({url, title, siteName, description, images, favicons }) => (
  <Card style={{
    position: "relative",
    maxWidth: "400px"
    }}>
    <Card.Header className="text-center">
      {siteName}
    </Card.Header>
    {images.length !== 0 ?
      <Card.Img src={images[0]} alt=""></Card.Img>
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
    <a href={url} target="_blank" rel="noreferrer" className="stretched-link"> </a>
  </Card>

)

ExternalCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  siteName: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  favicons: PropTypes.arrayOf(PropTypes.string)
}

ExternalCard.defaultProps = {
  url: "",
  title: "",
  siteName: "",
  description: "",
  images: [],
  favicons: []
}

export { ExternalLink, ExternalCard }
