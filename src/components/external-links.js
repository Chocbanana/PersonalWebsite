import * as React from "react"
import PropTypes from "prop-types"

const ExternalLink = ({href, text}) => (
  <a href={href}
    target="_blank"
    rel="noreferrer"
    style={{textDecoration: "none"}}
  >
    <h4 align="center">{text}</h4>
  </a>
)

export default ExternalLink
