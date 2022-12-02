import * as React from "react"
import PropTypes from "prop-types"
import { Alert } from "react-bootstrap"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import { Helmet } from "react-helmet"

const FlickrAlbum = ({href, imgSrc, title, width, height }) => (
  <div>
    <Alert className="my-3 text-center">
      <b>Tap on edge of picture to scroll through album pics</b>
    </Alert>
    <OutboundLink data-flickr-embed="true"
      data-header="true"
      data-footer="true"
      href={href}
      title={title}
    >
      <img src={imgSrc} width={width} height={height} alt={title} style={{minWidth: "200px"}}/>
    </OutboundLink>
    <Helmet>
      <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8">
      </script>
    </Helmet>
  </div>
)

FlickrAlbum.propTypes = {
    href: PropTypes.string,
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  }

  FlickrAlbum.defaultProps = {
    width: "100%",
    height: "100%",
    title: ""
}


export {FlickrAlbum}
