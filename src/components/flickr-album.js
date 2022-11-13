import * as React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"

const FlickrAlbum = ({href, imgSrc, title, width, height }) => (
    <div>
      <a data-flickr-embed="true"
        data-header="true"
        data-footer="true"
        href={href}
        title={title}
      >
        <img src={imgSrc} width={width} height={height} alt={title}/>
      </a>
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

export default FlickrAlbum
