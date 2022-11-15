import * as React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import pageLinks from "../data/site-pages"

import exImg from "../images/pagethumbs/example.png"


const FeaturedCard = ({pageDeets}) => (
<Card
  border="green"
  style={{
    maxWidth: "300px",
    minWidth: "200px",
    position: "relative",
    backgroundColor: "rgba(var(--bs-light-rgb), 0.3)",
    margin: "10px"}}>
  <Card.Img src={("image" in pageDeets) ? pageDeets.image : exImg} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title style={{
      color: "var(--bs-primary)",
      fontWeight: "900",
      fontSize: "xx-large",
      WebkitTextStroke: "1px black"
      }}>
      {pageDeets.title}
    </Card.Title>
  </Card.ImgOverlay>
  <Card.Body>
    <Card.Text>
      {pageDeets.description}
    </Card.Text>
  </Card.Body>
  {/* To make the entire card clickable, also need the position=relative above */}
  <a href={pageDeets.url} className="stretched-link"> </a>
</Card>
)

const HomePage = () => (
    <Layout>
      <Row>
        <Col>
        <h1 className="text-primary">Bhavana</h1>
        <h1 className="text-primary">Jonnalagadda</h1>
        <Row>
          <Col align="center" lg={4}>
            <StaticImage
              src="../images/myfacesquare.jpg"
              loading="eager"
              width={150}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="My face"
              imgStyle={{border: "3px solid var(--bs-info)",
                }}
              style={{margin: "10px", boxShadow: "5px 5px 10px 2px var(--bs-info)"}}
            />
          </Col>
          <Col>
            <h4 style={{fontWeight: "lighter"}}>
              Welcome! This is my website for displaying all my projects and public work:
              3D printing, LED wearables, traditional art, academic
              papers, AI research, and more!
            </h4>
          </Col>
        </Row>
        </Col>
        <Col align="center">
          <h1 style={{color: "var(--bs-primary)"}}>Featured Work</h1>
          <Row style={{marginBottom: "20px"}} md className="">
            <Col><FeaturedCard pageDeets={pageLinks["printing"]}/></Col>
            <Col><FeaturedCard pageDeets={pageLinks["octohat"]}/></Col>
            <Col><FeaturedCard pageDeets={pageLinks["gent"]}/></Col>
            <Col><FeaturedCard pageDeets={pageLinks["papers"]}/></Col>
            <Col><FeaturedCard pageDeets={pageLinks["art"]}/></Col>
            <Col><FeaturedCard pageDeets={pageLinks["ledgloves"]}/></Col>
          </Row>
        </Col>
      </Row>

    </Layout>
  )

export const Head = () => <Seo title="Home" />


// const FeaturedCardOld = ({pageDeets}) => (
//   <div className="link" style={{
//     border: "1px solid var(--bs-info)",
//     borderRadius: "5px",
//     maxWidth: "300px",
//     minWidth: "200px",
//     position: "relative",
//     padding: "15px",
//     margin: "20px",
//     backgroundColor: "rgba(var(--bs-light-rgb), 0.3)"}}>
//     {/* To make the entire card clickable, also need the position=relative above */}
//     <Link to={pageDeets.url}><span style={{
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       top: 0,
//       left: 0,
//       zIndex: 1,
//     }}></span></Link>
//     <h4 align="center">{pageDeets.title}</h4>
//     {("image" in pageDeets) ?
//     <div style={{textAlign: "center"}}>
//     <img
//       src={pageDeets.image}
//       loading="eager"
//       width="90%"
//       height="90%"
//       alt=""
//       style={{marginBottom: "15px", objectFit: "cover"}}
//     />
//     </div>
//     : ""}
//     <p>{pageDeets.description}</p>
//   </div>
// )


export default HomePage
