import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import pageLinks from "../data/site-pages"

const page = pageLinks["papers"]

const SitePage = () => {
  return (
    <Layout>
      <h1 style={{textAlign:"center"}}>{page.title}</h1>
      <h5>{page.description}</h5>

      <p style={{textAlign: "center"}}>
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

      <iframe title="thesis" src="https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=1SeGrkOLZq3bLLyp_tlT18FL2ny6hf2-J&hl=en&embedded=true" style={{width:"100%", height:"800px"}} frameborder="0"></iframe>

      <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
    </Layout>
  )
}

export const Head = () => <Seo title={page.title} />

export default SitePage
