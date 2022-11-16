import * as React from "react"
import { Link } from "gatsby"
import { Row, Col, Figure } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"
import { FlickrAlbum } from "../../components/flickr-embed"
import TableOfContents from "../../components/toc"

import gif1 from "../../images/octopus-hat/pattern_bouncy.gif"
import gif2 from "../../images/octopus-hat/pattern_fire_1.gif"
import gif3 from "../../images/octopus-hat/pattern_fire_2.gif"
import gif4 from "../../images/octopus-hat/pattern_glow.gif"

const page = pageLinks["octohat"]

const gifstyle = {
  width: "100%",
  minWidth: "150px",
  marginBottom: "15px"
}

const SitePage = () => {







  return (
    <Layout>
      <h1 style={{textAlign:"center"}}>{page.title}</h1>
      <h5 style={{fontWeight: "lighter"}}>{page.description}</h5>

      <Row>
      <Col>
        <TableOfContents/>
      </Col>
      <Col lg={9} md={11}>
        <h2>Basic overview</h2>
        <Row style={{marginBottom: "1rem"}}>
        <Col sm={6}>
          <StaticImage
            src="https://live.staticflickr.com/65535/52500282434_fcc432bb4a.jpg"
            loading="eager"
            // width="500px"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Octopus hat"
          />
        </Col>
        <Col>
          This hat was a labor of love, and taught me so much about LED programming, electrical wiring, better 3d-modelling, and more! It's made from 3d-printed ball-jointed tentacles that are hollow inside, containing programmable LED strips and a wire to make them positionable. The hat itself is a felt hat, hollowed out to fit the controller and batteries and wiring, with holes for the light-up eyes. It lasts for about 4-6 hours on the built-in batteries alone and cycles through a variety of patterns I programmed in. To learn how I did it and more, read on!
        </Col>
        </Row>

        <h2>Materials used</h2>

        <h3>Lessorns learned about component selection</h3>


        <h2>Modelling the tentacles</h2>

        <h2>Programming the LEDs</h2>

        <h3 style={{textAlign:"center"}}>Some LED patterns</h3>
        <Row style={{marginBottom: "20px"}} md>
          <Col><img src={gif1} style={gifstyle} alt=""/></Col>
          <Col><img src={gif2} style={gifstyle} alt=""/></Col>
          <Col><img src={gif3} style={gifstyle} alt=""/></Col>
          <Col>
            <Figure>
              <img src={gif4} style={gifstyle} alt=""/>
              <Figure.Caption>Rainbow pattern on the version 1 hat</Figure.Caption>
            </Figure>
          </Col>
        </Row>

        <h3>Wiring: SO MUCH soldering</h3>

        <h2>Upgrading to 2.0</h2>


        <h2>Final Assembly!</h2>




        <FlickrAlbum
          href="https://www.flickr.com/photos/135898386@N03/albums/72177720303677871"
          imgSrc="https://live.staticflickr.com/65535/52499510017_6e4aed7298.jpg"
          title="Octopus Hat"
          />

        <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>


      </Col>
      </Row>


    </Layout>
  )
}


export const Head = () => <Seo title={page.title} />

export default SitePage
