import imgGithub from "../images/pagethumbs/github.png"
import artThumb from "../images/pagethumbs/artthumb.jpg"
import printthumb from "../images/pagethumbs/printing.webp"
import paperthumb from "../images/pagethumbs/papers.png"
import octothumb from "../images/pagethumbs/octothumb.jpg"
import glovethumb from "../images/pagethumbs/gloves.jpg"
import facethumb from "../images/pagethumbs/faceshields.jpg"
import brainthumb from "../images/pagethumbs/brainthumb.jpg"
import bestthumb from "../images/pagethumbs/bestagons.jpeg"

const pageLinks = {
  printing: {
    title: "3D Printing",
    url: "/printed/printing-3d",
    folder: "3D Printing",
    image: printthumb,
    description: "My 3D printed projects I designed",
  },
  faceshields: {
    title: "Covid-19 Face Shields",
    url: "/printed/face-shields",
    folder: "3D Printing",
    image: facethumb,
    description: "Face shields I 3D printed and donated to hospitals during Covid-19",
    date: new Date(2022, 2, 4),
  },
  brainlamp: {
    title: "From MRI to Brain Lamp",
    url: "/printed/brain-lamp",
    folder: "3D Printing",
    image: brainthumb,
    description: "Turned an MRI of my brain into a 3D printable object, and then into a hollow smart lamp",
    date: new Date(2023, 11, 21),
  },
  bestagons: {
    title: "The Bestagons",
    url: "/led-projects/bestagons",
    folder: "LED Projects",
    image: bestthumb,
    description: "My dynamic large-scale LED art made of a hexagonal lattice and infinity mirrors",
    date: new Date(2024, 5, 4),
  },
  octohat: {
    title: "LED Octopus Hat",
    url: "/led-projects/octopus-hat",
    folder: "LED Projects",
    image: octothumb,
    description: "A lightup octopus hat I coded, 3D model designed, printed, and made!",
    date: new Date(2022, 10, 26),
  },
  ledgloves: {
    title: "LED Panel Gloves",
    url: "/led-projects/led-gloves",
    folder: "LED Projects",
    image: glovethumb,
    description: "LED panel dance gloves with customizable pattens, images, or text",
    date: new Date(2022, 10, 28),
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
    date: new Date(),
  },
  gent: {
    title: "GENT Library",
    url: "/programming/gent",
    folder: "Programming",
    image: imgGithub,
    description: "A library for the easy construction and training of neural networks",
    date: new Date(2017, 9, 2),
  },
  papers: {
    title: "Research and Papers",
    url: "/papers",
    image: paperthumb,
    description: "Research conducted in AI, and papers I've authored or co-authored",
  },
  contact: {
    title: "Contact Me",
    url: "/contact",
    description: "If you'd like to reach out ;)",
  },
}

export default pageLinks
