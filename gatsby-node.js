exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/gatsby/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  // const { data } = await graphql(`
  //   {
  //     pages: allSitePage {
  //       nodes {
  //         path
  //       }
  //     }
  //   }
  // `)
}

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   const comp =require(page.component)
//   console.log("****LOOK HERE*****", comp)
// }
