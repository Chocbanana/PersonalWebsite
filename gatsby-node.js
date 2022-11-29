const { getLinkPreview } =  require("link-preview-js");


const previewLinks = {
  website: ["https://github.com/Chocbanana/PersonalWebsite",
    "https://github.com/Chocbanana/Chocbanana.github.io"],
  gent: ["https://github.com/Chocbanana/Gent"],
  art: ["https://www.flickr.com/photos/135898386@N03/albums/"],
  printing: ["https://www.printables.com/social/44101-fractaly/models"],
  led: ["https://www.etsy.com/listing/1082658511/paper-thin-led-matrix-diy-tech-component"]
}

// Query, server/build build time, for data from external website for link previews
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  for (let p in previewLinks) {
    if (page.path.includes("/" + p)) {

      const linkPreviewData = []
      previewLinks[p].map((l) => {
        getLinkPreview(l, {followRedirects: "follow"}).then((d) => (linkPreviewData.push(d)))
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


// Allow loading of raw .ino/.cpp/.h files as text
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.ino/,
          type: 'asset/source',
        },
        {
          test: /\.cpp/,
          type: 'asset/source',
        },
        {
          test: /\.h/,
          type: 'asset/source',
        }
      ],
    },
  })
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

