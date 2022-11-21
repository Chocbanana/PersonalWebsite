import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Form, Button, Row, Col, ListGroup } from "react-bootstrap"
import { FaFlickr, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import { RiPrinterCloudFill } from 'react-icons/ri'

import Layout from "../components/layout"
import Seo from "../components/seo"
import pageLinks from "../data/site-pages"

const page = pageLinks["contact"]

const socialLinksProps = {
  target: "_blank",
  rel: "noreferrer",
  style: {textDecoration: "none"}
};

const SitePage = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          linkedIn
          twitter
          flickr
          github
        }
      }
    }
  `)

  return (
    <Layout>
      <h1 style={{textAlign:"center"}}>{page.title}</h1>
      <h5 style={{textAlign:"center"}}>{page.description}</h5>

      <p style={{textAlign:"center"}}>You can find me on the following sites:</p>
      <ListGroup horizontal="md" className="justify-content-center text-center">
        <ListGroup.Item as="a" {...socialLinksProps} href={data.site.siteMetadata?.linkedIn || "/#"}>
          <FaLinkedin/> LinkedIn
        </ListGroup.Item>
        <ListGroup.Item as="a" {...socialLinksProps} href={data.site.siteMetadata?.flickr || "/#"}>
          <FaFlickr/> Flickr
        </ListGroup.Item>
        <ListGroup.Item as="a" {...socialLinksProps} href="https://www.printables.com/social/44101-fractaly/models">
          <RiPrinterCloudFill/> 3D Printables
        </ListGroup.Item>
        <ListGroup.Item as="a" {...socialLinksProps} href={data.site.siteMetadata?.github || "/#"}>
          <FaGithub/> Github
        </ListGroup.Item>
        <ListGroup.Item as="a" {...socialLinksProps} href={data.site.siteMetadata?.twitter || "/#"}>
          <FaTwitter/> Twitter
        </ListGroup.Item>
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
    </Layout>
  )
}


export const Head = () => <Seo title={page.title} />

export default SitePage
