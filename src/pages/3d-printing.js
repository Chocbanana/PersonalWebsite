import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Printing = () => (
    <Layout>
      <h1>Hallo Visitor!</h1>
      <br/>
      <br/>
      <p>This site is still <i>under construction </i> {";)"}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export const Head = () => <Seo title="3D Printing" />

export default Printing
