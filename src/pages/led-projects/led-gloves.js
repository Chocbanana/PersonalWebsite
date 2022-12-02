import * as React from "react"
import { Row, Col, Figure } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import { LayoutWithToc } from "../../components/layout"
import { ExternalCard } from "../../components/external-links"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"
import { FlickrAlbum } from "../../components/flickr-embed"

import textGif from "../../images/led-gloves/text_pattern.gif"
import eyeGif from "../../images/led-gloves/eyes_pattern.gif"
import strobeGif from "../../images/led-gloves/strobe_pattern.gif"

const page = pageLinks["ledgloves"]

const gifstyle = {
  width: "100%",
  minWidth: "150px",
  maxWidth: "500px",
  marginBottom: "15px",
  borderRadius: "30px"
}

const SitePage = ({ pageContext }) => (
  <LayoutWithToc page={page}>

    <h2 className="my-3">Overview</h2>

    <Row>
      <Col>
        I always wanted to have light-up gloves with solid panels, that I could customiize with patterns and would be lightweight to wear -- so I made them myself!
      </Col>
      <Col>
        <img src={textGif} style={gifstyle} alt=""/>
      </Col>
    </Row>

    <h2 className="my-3">The LED Panel</h2>

    <Row xs={1} sm={1} md={2}>
      <Col>
        <ExternalCard {...pageContext.linkPreviewData[0]} imgStyle={{maxHeight: "200px"}}/>
      </Col>
      <Col>
        Normally I would have made the panel myself: buying an LED matrix, cutting it down to size, finding an appropriately small microcontroller with bluetooth/wifi capability, programming it, finding and assembling a small power source, adding a button, and voila! However, I also decided to apply my programmer's mentality to this problem, aka -- if there exists what I need, in the form that I need it, jsut use that instead of making it again. So I did! I found reasonably priced panels that not only were sized perfectly, but also had a great-and-tiny power source, and an app that came with them to control the LEDs to boot! The app allows for using text, images, premade animations, or making your own animations. I was never planning on making an app so that was an upgrade already! Check out the panels, which can be found on Etsy.
      </Col>
    </Row>

    <h3 className="my-3">Some Patterns</h3>

    <Row>
      <Col><img src={textGif} style={gifstyle} alt=""/></Col>
      <Col><img src={eyeGif} style={gifstyle} alt=""/></Col>
      <Col><img src={strobeGif} style={gifstyle} alt=""/></Col>
    </Row>


    <h2 className="my-3">Assembly</h2>

    <Row md={3} xs={1}>
      <Col>I sewed clear vinyl onto some fingerless gloves, scooched the panels into the vinyl, and closed off the pouch with a velcro end {"(so that I could remove the panel if ever needed, for washing the gloves etc)"}. The controller and battery pack are small, so they simply tuck into the glove hand to stay out the way. My hand are still perfectly functional/usable with that! The buttom to turn on the gloves is also easily accessible that way.</Col>
      <Col>
        <StaticImage
          src="https://live.staticflickr.com/65535/52530982185_210136fbcc_b.jpg"
          alt="LED gloves"
          style={{marginBottom: "2rem", }}
        />
      </Col>
      <Col>
        <Figure>
          <StaticImage
            src="https://live.staticflickr.com/65535/52531054178_059ece2e2b_b.jpg"
            alt="LED gloves"
            style={{marginBottom: "2rem"}}
          />
          <Figure.Caption>The velcro seal, with the controller+battery tucked inside the glove</Figure.Caption>
        </Figure>
      </Col>
    </Row>

    <FlickrAlbum
      href="https://www.flickr.com/photos/135898386@N03/albums/72177720304071058"
      imgSrc="https://live.staticflickr.com/65535/52530042492_bea968eea1_c.jpg"
      title="LED Gloves"
    />

  </LayoutWithToc>
)

export const Head = () => <Seo {...page} />

export default SitePage
