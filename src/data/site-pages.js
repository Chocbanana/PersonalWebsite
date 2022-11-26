import imgGithub from "../images/pagethumbs/github.png"
import artThumb from "../images/pagethumbs/artthumb.jpg"
import printthumb from "../images/pagethumbs/printing.webp"
import paperthumb from "../images/pagethumbs/papers.png"
import octothumb from "../images/pagethumbs/octothumb.jpg"


const pageLinks = {
  printing: {
    title: "3D Printing",
    url: "/printing-3d",
    image: printthumb,
    description: "My 3D printed projects I designed",
  },
  octohat: {
    title: "LED Octopus Hat",
    url: "/led-projects/octopus-hat",
    folder: "LED Projects",
    image: octothumb,
    description: "A lightup octopus hat I coded, 3D model designed, printed, and made!"
  },
  ledgloves: {
    title: "LED Panel Gloves",
    url: "/led-projects/led-gloves",
    folder: "LED Projects",
    description: "LED panel dance gloves with customizable pattens, images, or text"
  },
  art: {
    title: "Art",
    url: "/art",
    image: artThumb,
    description: "Digital, traditional, charcoal, ceramic, crafting",
  },
  website: {
    title: "This Website",
    url: "/programming/website",
    folder: "Programming",
    image: imgGithub,
    description: "The code for this website, written in the Gatsby framework",
  },
  gent: {
    title: "GENT Library",
    url: "/programming/gent",
    folder: "Programming",
    image: imgGithub,
    description: "A library for the easy construction and training of neural networks",
  },
  papers: {
    title: "Papers",
    url: "/papers",
    image: paperthumb,
    description: "Papers I've authored or co-authored",
  },
  contact: {
    title: "Contact Me",
    url: "/contact",
    description: "If you'd like to reach out ;)",
  },

  // gatsby2: {
  //   title: "Page 2",
  //   folder: "Gatsby",
  //   url: "/gatsby/page-2",
  //   description: "A simple example of linking to another page within a Gatsby site",
  // },
  // gatsbytsx: { title: "TypeScript",
  //   url: "/gatsby/using-typescript",
  //   folder: "Gatsby",
  // },
  // gatsbyssr: { title: "Server Side Rendering",
  //   url: "/gatsby/using-ssr",
  //   folder: "Gatsby",
  // },
  // gatsbydsg: { title: "Deferred Static Generation",
  //   url: "/gatsby/using-dsg",
  //   folder: "Gatsby",
  // },
}

export default pageLinks
