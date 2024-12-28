import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
            linkedIn
            insta
            flickr
            github
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
