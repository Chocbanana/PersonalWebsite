const { getLinkPreview } =  require("link-preview-js");


const previewLinks = {
  website: ["https://github.com/Chocbanana/PersonalWebsite",
    "https://github.com/Chocbanana/Chocbanana.github.io"],
  gent: ["https://github.com/Chocbanana/Gent"],
  art: ["https://www.flickr.com/photos/135898386@N03/albums/"],
  printing: ["https://www.printables.com/social/44101-fractaly/models"]
}

// Query, server/build build time, for data from external website for link previews
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  for (let p in previewLinks) {
    if (page.path.includes("/" + p)) {

      const linkPreviewData = []
      previewLinks[p].map((l) => {
        getLinkPreview(l).then((d) => (linkPreviewData.push(d)))
      })

      deletePage(page)
      createPage({
        ...page,
        context: {
          ...page.context,
          linkPreviewData: linkPreviewData,
        },
      })
    }
  }
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/gatsby/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })

  // const { data } = await graphql(`
  //   {
  //     pages: allSitePage {
  //       nodes {
  //         path
  //       }
  //     }
  //   }
  // `)
// }

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   const comp =require(page.component)
//   console.log("****LOOK HERE*****", comp)
// }

