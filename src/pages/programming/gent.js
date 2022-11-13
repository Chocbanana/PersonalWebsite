import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"

// import RNUrlPreview from 'react-native-url-preview';

const page = pageLinks["gent"]

//     "https://github.com/Chocbanana/Gent"



const SitePage = () => (
    <Layout>
      <h1 style={{textAlign:"center"}}>{page.title}</h1>
      <h5>{page.description}</h5>
      {/* <RNUrlPreview text={"any text to be parsed , https://www.youtube.com/watch?v=Kmiw4FYTg2U"}/> */}

      <div style={{textAlign:"center"}}><Link to="/">Go back to the homepage</Link></div>
    </Layout>
)

export const Head = () => <Seo title={page.title} />

export default SitePage
