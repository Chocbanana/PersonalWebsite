import * as React from "react"
import { Link } from "gatsby"
import { Row, Col, Figure } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import { LayoutWithTitle } from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"
import { ExternalCard } from "../../components/external-links"



const page = pageLinks["faceshields"]

const SitePage = ({ pageContext }) => (
  <LayoutWithTitle page={page}>

    <Row style={{marginTop: "2rem", marginBottom: "2rem"}}>
      <Col md={6}
        className="align-self-center">
        <p>Covid-19 was definitely a hard time, and to alleviate some of the frustation of uselessness I felt during it, I decided to put my 3D printer to good use! Buying a bunch of plastic filament, elastic, and transparency film, I printed and sent over 300+ functioning face shields for use by various hospitals. </p>
      </Col>
      <Col>
        <StaticImage
          src="https://live.staticflickr.com/65535/52632404509_0835050394_o.png"
          alt="Face shields"
          style={{marginBottom: "2rem"}}
        />
      </Col>
    </Row>

    <h2 className="my-3">Recipients</h2>

    <Row xs={1} sm={1} md={2}>
      <Col>
        <StaticImage
            src="https://live.staticflickr.com/65535/52632404604_6ec7bac97e_o.jpg"
            alt="Face shields"
            style={{marginBottom: "2rem", borderRadius: "2%"}}
          />
      </Col>
      <Col>
        I sent sterilized and prepackaged face shields to the following organizations and hospitals:
        <ul>
          <li>SUNY Downstate University</li>
          <li>NYCMakesPPE</li>
          <li>Nassau University Medical Center</li>
          <li>Montefiore New Rochelle Hospital</li>
          <li>St. John{"’"}s hospital</li>
        </ul>
        In total it was over 300 face shields sent out!
      </Col>
    </Row>


    <h2 className="my-3">Models Used</h2>

    <p className="my-3">
      The original model used was <OutboundLink href="https://www.prusa3d.com/page/covid-19_379/" target="_blank" rel="noreferrer">this one</OutboundLink>, designed by Prusa Printers (the brand of my 3D printer). Worked great but ultimately used too much filament, along with being inefficient design and needed elastic to stay on the head, which was just extra material needed. I updated to this <OutboundLink href="https://www.printables.com/model/28352-manta-ray-face-shield-v6-prusa-3dverkstan-remix" target="_blank" rel="noreferrer">more efficient design</OutboundLink>, which stacked well when printing and used less filament, along with staying on the head just from tension.
    </p>

    <Row xs={1} sm={1} md={3}>
      <Col>
        <ExternalCard {...pageContext.linkPreviewData[0]} />
      </Col>
      <Col>
        <Figure className="my-3">
          <StaticImage
            src="https://live.staticflickr.com/65535/52632149901_f1f4a8fbfb_o.jpg"
            alt="Face shields"
            style={{borderRadius: "5%"}}
          />
          <Figure.Caption>The original Prusa style face shields, that require elastic</Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <Figure className="my-2">
          <StaticImage
            src="https://live.staticflickr.com/65535/52632590525_a432b13e4d_o.jpg"
            alt="Face shields"
            style={{borderRadius: "5%"}}
          />
          <Figure.Caption>The updated compact face shield</Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <Figure className="my-2">
          <StaticImage
            src="https://live.staticflickr.com/65535/52632149816_d131560eef_o.jpg"
            alt="Face shields"
            style={{borderRadius: "5%"}}
          />
          <Figure.Caption>Some of the filament used</Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <Figure className="my-2">
          <StaticImage
            src="https://live.staticflickr.com/65535/52631635552_2299496707_o.jpg"
            alt="Face shields"
            style={{borderRadius: "5%"}}
          />
          <Figure.Caption>Elastic used for the original face shield design</Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <Figure className="my-2">
          <StaticImage
            src="https://live.staticflickr.com/65535/52631635567_5fc8cf660c_o.jpg"
            alt="Face shields"
            style={{borderRadius: "5%"}}
          />
          <Figure.Caption>My 3D printer setup</Figure.Caption>
        </Figure>
      </Col>
    </Row>


    <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
  </LayoutWithTitle>
)

export const Head = () => <Seo {...page} />

export default SitePage
