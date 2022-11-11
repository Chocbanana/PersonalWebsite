import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = () => (
    <Layout>
      <h1>Hallo Visitor!</h1>
      <br/>
      <p>This site is still <i>under construction </i> {";)"}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

export const Head = () => <Seo title="Home" />

export default HomePage
