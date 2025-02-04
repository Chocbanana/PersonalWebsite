const { getLinkPreview } = require("link-preview-js")

// The key must start with what the page starts with (not very good when I end up having clashing pages, I know....)
const previewLinks = {
  website: ["https://github.com/Chocbanana/PersonalWebsite", "https://github.com/Chocbanana/Chocbanana.github.io"],
  face: ["https://www.prusa3d.com/page/covid-19_379/"],
  brain: ["https://www.instructables.com/How-To-From-MRI-to-3D-Printed-Brain-Lamp/"],
  gent: ["https://github.com/Chocbanana/Gent"],
  art: ["https://www.flickr.com/photos/135898386@N03/albums/"],
  printing: ["https://github.com/Chocbanana/Gent"],
  // printing: ["https://www.printables.com/@Fractaly/models"],
  led: ["https://www.etsy.com/listing/1082658511/paper-thin-led-matrix-diy-tech-component"],
  papers: ["https://orcid.org/0009-0009-1054-0995"],
}

// Query, server/build build time, for data from external website for link previews
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  for (let p in previewLinks) {
    if (page.path.includes("/" + p)) {
      const linkPreviewData = []
      previewLinks[p].map(l => {
        getLinkPreview(l, { followRedirects: "follow", timeout: 10000 }).then(d => linkPreviewData.push(d))
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
exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  // Document is not defined during node.js SSR build
  // AKA using naked Bootstrap breaks things if SSR
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /(?<!react\-)bootstrap/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.ino/,
          type: "asset/source",
        },
        {
          test: /\.cpp/,
          type: "asset/source",
        },
        {
          test: /\.h/,
          type: "asset/source",
        },
        {
          test: /\.bib/,
          type: "asset/source",
        },
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
