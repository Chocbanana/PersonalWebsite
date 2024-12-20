import * as React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import pageLinks from "../data/site-pages"

import exImg from "../images/pagethumbs/example.png"

const FeaturedCard = ({ pageDeets }) => (
  <Card
    // border="warning"
    className="my-3"
    style={{
      maxWidth: "300px",
      // minWidth: "200px",
      position: "relative",
      backgroundColor: "rgba(var(--bs-light-rgb), 0.6)",
      // backgroundColor: "var(--bs-light)",
    }}
  >
    <Card.Img src={"image" in pageDeets ? pageDeets.image : exImg} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title
        style={{
          color: "var(--bs-secondary)",
          fontWeight: "bolder",
          fontSize: "xx-large",
          textShadow: "1px 1px 3px black, 1px -1px 3px black, -1px 1px 3px black, -1px -1px 3px black",
        }}
      >
        {pageDeets.title}
      </Card.Title>
    </Card.ImgOverlay>
    <Card.Body>
      <Card.Text>{pageDeets.description}</Card.Text>
    </Card.Body>
    {/* To make the entire card clickable, also need the position=relative above */}
    <a href={pageDeets.url} className="stretched-link">
      {" "}
    </a>
  </Card>
)

const HomeHeader = ({ children }) => (
  <h1
    className="text-info display-1 my-3"
    style={{
      fontFamily: "myfont5",
      // textShadow: "6px 6px 5px black",
      // textShadow: "4px 4px 10px #54c44e",
      // Tried to get gradient working....it didnt work....
      // background: "radial-gradient(circle, #004311, #54c44e)",
      // WebkitBackgroundClip: "text",
      // backgroundClip: "text",
      // color: "transparent",
    }}
  >
    {children}
  </h1>
)

const HomePage = () => (
  <Layout>
    <Row xs={1} sm={2}>
      <Col>
        {/* <HomeHeader>Bhavana</HomeHeader>
        <HomeHeader>Jonnalagadda</HomeHeader> */}
        <HomeHeader>BHAVANA JONNALAGADDA</HomeHeader>
        <Row>
          <Col align="center" lg={4}>
            <StaticImage
              src="../images/myfacesquare.jpg"
              loading="eager"
              width={150}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="My face"
              imgStyle={{ border: "3px solid var(--bs-info)" }}
              style={{
                margin: "10px",
                boxShadow: "5px 5px 10px 2px var(--bs-info)",
              }}
            />
          </Col>
          <Col>
            <h4 style={{ fontWeight: "lighter" }}>
              Welcome! This is my website for displaying all my projects and public work: 3D printing, LED wearables,
              traditional art, academic papers, AI research, and more!
            </h4>
          </Col>
        </Row>
      </Col>
      <Col align="center">
        <HomeHeader>Featured Work</HomeHeader>
        <Row style={{ marginBottom: "20px" }} xs={1} sm={1} xl={2} xxl={3}>
          <Col>
            <FeaturedCard pageDeets={pageLinks["faceshields"]} />
          </Col>
          <Col>
            <FeaturedCard pageDeets={pageLinks["brainlamp"]} />
          </Col>
          <Col>
            <FeaturedCard pageDeets={pageLinks["octohat"]} />
          </Col>
          <Col>
            <FeaturedCard pageDeets={pageLinks["printing"]} />
          </Col>
          <Col>
            <FeaturedCard pageDeets={pageLinks["papers"]} />
          </Col>
          <Col>
            <FeaturedCard pageDeets={pageLinks["art"]} />
          </Col>
          <Col>
            <FeaturedCard pageDeets={pageLinks["ledgloves"]} />
          </Col>
          <Col>
            <FeaturedCard pageDeets={pageLinks["gent"]} />
          </Col>
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
