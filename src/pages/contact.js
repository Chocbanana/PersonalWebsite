import * as React from "react"
import { Link } from "gatsby"
import { Form, Button, Row, Col, ListGroup } from "react-bootstrap"
import { FaFlickr, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import { RiPrinterCloudFill } from 'react-icons/ri'

import { LayoutWithTitle } from "../components/layout"
import Seo from "../components/seo"
import pageLinks from "../data/site-pages"
import useSiteMetadata from "../hooks/site-metadata"

const page = pageLinks["contact"]

const SocialItem = ({href, Icon, title, children}) => (
  <ListGroup.Item as="a"
    target= "_blank"
    rel= "noreferrer"
    style={{textDecoration: "none"}}
    href={href || "/#"}
    >
    <div className="fw-bold"><Icon/> {title}</div>
    {children}
  </ListGroup.Item>
)

const SitePage = () => {
  const { linkedIn, flickr, github, twitter } = useSiteMetadata()

  return (
    <LayoutWithTitle page={page}>

      <p style={{textAlign:"center"}}>You can find me on the following sites:</p>

      <ListGroup horizontal="md" className="justify-content-center text-center my-2">
        <SocialItem href={linkedIn} Icon={FaLinkedin} title="LinkedIn">
          My resume and all my professional doings. Please don't message me on here, too much recruiter spam
        </SocialItem>
        <SocialItem href={flickr} Icon={FaFlickr} title="Flickr">
          All my artwork, along with pictures of my LED projects, in full glorious high-res
        </SocialItem>
        <SocialItem href="https://www.printables.com/social/44101-fractaly/models" Icon={RiPrinterCloudFill} title="3D Printables">
          Where all my 3d designs and prints are hosted, and you can view and download for free!
        </SocialItem>
        <SocialItem href={github} Icon={FaGithub} title="Github">
          My public programming projects. Don't contact here, I probably won't check
        </SocialItem>
        <SocialItem href={twitter} Icon={FaTwitter} title="Twitter">
          My twitter; don't DM me here, I barely check it.
        </SocialItem>
      </ListGroup>

      <p style={{textAlign:"center"}}>But if you'd like to contact me directly you can do so below!</p>

      <Row className="justify-content-md-center" lg>
        <Form action="https://getform.io/f/61a2cab5-6892-4100-93ea-49fb3d6f817f"
          method="POST"
          style={{maxWidth: "1000px"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="Express yourself here"
              name="message" />
          </Form.Group>
          <input type="hidden" name="_gotcha" style={{display: "none !important"}}/>
          <Form.Group>
            <Form.Label>You are?</Form.Label>
            {/* <Form.Select aria-label="Select who you are" name="whoare" multiple rows={6}> */}
            <Form.Check type="radio" name="youare" value="Dreamer" label="A Dreamer" />
            <Form.Check type="radio" name="youare" value="Sceptical" label="Sceptical" />
            <Form.Check type="radio" name="youare" value="Ambitious" label="Ambitious" />
            <Form.Check type="radio" name="youare" value="Fearful" label="Fearful" />
            <Form.Check type="radio" name="youare" value="Determined" label="Determined" />
            {/* </Form.Select> */}
          </Form.Group>

          <Row style={{marginTop: "20px"}}>
            <Col>
              <Button variant="primary" className="text-secondary" type="submit">
                Send email
              </Button>
            </Col>
            <Col className="text-end">
              <Form.Text className="text-muted">
                Powered by {"  "}
                <a href="https://getform.io/" target="_blank" rel="noreferrer">
                  Getform
                </a>
              </Form.Text>
            </Col>
          </Row>
        </Form>
      </Row>

      <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
    </LayoutWithTitle>
  )
}


export const Head = () => <Seo {...page} />

export default SitePage
