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
            twitter
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
