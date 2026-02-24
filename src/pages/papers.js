import * as React from "react"
import { Col, Row, Table } from "react-bootstrap"

import { LayoutWithToc } from "../components/layout"
import Seo from "../components/seo"
import pageLinks from "../data/site-pages"
import { ExternalCard } from "../components/external-links"
import paperData from "../data/my_papers.json"

const defTxt = x => x
const hasContent = value => {
  if (value == null) return false
  if (typeof value === "string") return value.trim() !== ""
  if (Array.isArray(value)) return value.length > 0
  return true
}
const paperKeys = {
  title: ["Title", defTxt],
  creators: ["Authors", x => x.map(x => x.firstName + " " + x.lastName).join(", ")],
  date: ["Date", defTxt],
  publicationTitle: ["Publication", defTxt],
  archive: ["Archive", defTxt],
  DOI: ["DOI", defTxt],
  abstractNote: ["Abstract", defTxt],
  // itemType: ["Type", defTxt],
  tags: ["Tags", x => x.map(x => x.tag).join(", ")],
  url: [
    "Url",
    x => (
      <a target="_blank" rel="noopener noreferrer" href={x}>
        {x}
      </a>
    ),
  ],
}

const PaperTable = ({ item }) => (
  <Table bordered hover striped="columns" variant="dark">
    <tbody>
      {Object.entries(paperKeys)
        .filter(([k]) => hasContent(item[k]))
        .map(([k, v]) => (
          <tr>
            <td>{v[0]}</td>
            <td>{v[1](item[k])}</td>
          </tr>
        ))}
    </tbody>
  </Table>
)

const page = pageLinks["papers"]

const SitePage = ({ pageContext }) => {
  return (
    <LayoutWithToc page={page}>
      <Col>
        <Row>
          <Col>
            <h2 className>My ORCID</h2>
          </Col>
          <Col>
            <ExternalCard {...pageContext.linkPreviewData[0]} />
          </Col>
        </Row>
        <Row>
          <h2>Publications</h2>
          {paperData.items
            .filter(x => x.itemType !== "preprint")
            .map(x => (
              <PaperTable item={x} />
            ))}
        </Row>
        <Row>
          <h2>Preprints</h2>
          {paperData.items
            .filter(x => x.itemType === "preprint")
            .map(x => (
              <PaperTable item={x} />
            ))}
        </Row>
      </Col>

      {/* <p style={{textAlign: "center"}}>
        My thesis from undergrad: Exploring More Biologically-Inspired Recurrent Neural Networks.
        It is not yet complete but will be updated soon, and in the meantime you can view the
        document below.
      </p>
      <p style={{textAlign: "center"}}>
        <b>Abstract:</b> We examine features in the brain that have potential applications in
        artificial neural networks, and then review areas within the machine learning field that
        would benefit from strategies taken from observing the brain. Using the discussed
        intersection of properties between these neural networks, we will later attempt to
        construct an ANN to represent a biological circuit in the mouse visual system.
      </p>

      <iframe title="thesis" src="https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=1SeGrkOLZq3bLLyp_tlT18FL2ny6hf2-J&hl=en&embedded=true" style={{width:"100%", height:"800px"}} frameborder="0"></iframe> */}
    </LayoutWithToc>
  )
}

export const Head = () => <Seo {...page} />

export default SitePage
