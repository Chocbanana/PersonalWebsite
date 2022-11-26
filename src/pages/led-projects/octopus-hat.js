import * as React from "react"
import { } from "gatsby"
import { Row, Col, Figure, Tabs, Tab, Card } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { CodeBlock } from "react-code-blocks"

import { LayoutWithToc } from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"
import { FlickrAlbum } from "../../components/flickr-embed"
import { MaterialsUsed } from "../../data/octopus-hat/materials-used"

import gif1 from "../../images/octopus-hat/pattern_bouncy.gif"
import gif2 from "../../images/octopus-hat/pattern_fire_1.gif"
import gif3 from "../../images/octopus-hat/pattern_fire_2.gif"
import gif4 from "../../images/octopus-hat/pattern_glow.gif"


const page = pageLinks["octohat"]

const gifstyle = {
  width: "100%",
  minWidth: "150px",
  marginBottom: "15px"
}

const extLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer"
}

// Get the raw text of the following code files for LED hat
const codeFilenames = ["OctopusHat.ino",
  "ledStripPatterns.cpp",
  "ledStripPatterns.h",
  "ledUtilities.cpp",
  "ledUtilities.h"
]
const codeFiles = []
codeFilenames.forEach((f) => (codeFiles.push(require("../../data/octopus-hat/" + f))))

const SitePage = () => (

  <LayoutWithToc page={page}>

    <h2 className="my-3">Basic overview</h2>

    <Row style={{marginBottom: "1rem"}}>
      <Col sm={6}>
        <StaticImage
          src="https://live.staticflickr.com/65535/52500282434_fcc432bb4a.jpg"
          alt="Octopus hat"
        />
      </Col>
      <Col>
        <p>This hat was a labor of love, and taught me so much about LED programming, electrical wiring, better 3d-modelling, and more! It's made from 3d-printed ball-jointed tentacles that are hollow inside, containing programmable LED strips and a wire to make them positionable. The hat itself is a felt hat, hollowed out to fit the controller and batteries and wiring, with holes for the light-up eyes. It lasts for about 4-6 hours on the built-in batteries alone and cycles through a variety of patterns I programmed in. To learn how I did it and more, read on!</p>
        <img src={gif2} style={{...gifstyle, maxWidth: "20rem"}} alt=""/>
      </Col>
    </Row>

    <h2 className="my-3">Lessons Learned</h2>

    <ul>
      <li>
        How to wire LED strips, code a microcontroller, and assemble a Li Ion battery pack.
      </li>
      <li>
        How to design and print a large-scale project, meant to work with LEDs.
      </li>
      <li>
        Always check the polarity of connectors (esp JST connectors), and swap as needed. (Apparently pcb/arduino usage is different than rc car ones, whatever)
      </li>
      <li>
        Batteries in PARALLEL add amperage, in SERIES add voltage! Also, connecting a bunch of wires together is ALWAYS in parallel!
      </li>
      <li>
        Use a resistor to emulate amp load (and desired voltage draw).
      </li>
      <li>
        Gel nail polish is BS
      </li>
      <li>
        Painting/general cleanup of 3d printed segments can take longer than expected; the less post-processing needed, the MUCH better.
      </li>
    </ul>


    <h2 className="my-3">Modelling the tentacles</h2>

    <Row style={{marginBottom: "1rem"}} md={1} sm={1} xs={1} xl={2}>
      <Col>
        <p>
          All the modelling was done in Blender. Using pre-existing assets of ball joints from Thingiverse, I twisted and sculpted tentacles to fit with the joints. I hollowed out the tentacles to leave room for the LEDs, while also optimizing how the tentacles looked for best layers when 3D printing. When printing the actual tentacles, I used minimum shell/wall thickness for maximum light output.
        </p>
      </Col>
      <Col>
        <Figure>
          <StaticImage
            src="https://live.staticflickr.com/65535/52513638829_03d05450a3.jpg"
            alt="Octopus hat"
            style={{minWidth: "200px"}}
          />
          <Figure.Caption>Initial sketch of what I wanted the hat to look like</Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <Figure>
          <StaticImage
            src="../../images/octopus-hat/blender.png"
            alt="Octopus hat"
            style={{minWidth: "200px"}}
          />
          <Figure.Caption>Modeling the tentacle ball joints in Blender</Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <Figure>
          <StaticImage
            src="../../images/octopus-hat/slicer.png"
            alt="Octopus hat"
            style={{minWidth: "200px"}}
          />
          <Figure.Caption>Slicer program for previewing a 3D print of a tentacle</Figure.Caption>
        </Figure>
      </Col>
    </Row>

    <h2 className="my-3">Programming the LEDs</h2>

    <p>
      The controller used for this hat is the <a href="https://www.pjrc.com/store/teensy32.html" {...extLinkProps}>Teensy 3.2</a>, with the <a href="https://www.pjrc.com/store/octo28_adaptor.html" {...extLinkProps}>OctoWS2811 Adaptor</a> for handling LEDs. <b>Definitely</b> overkill for a project with barely hundreds of LEDs, instead of thousands, but it's what was first recommended to me so it's what I used! I learned a lot about programming microcontrollers, including how the Arduino framework works and various LED libraries. I didn't use the FastLED library as is usually standard, but rather the very similar <a href="https://www.pjrc.com/teensy/td_libs_OctoWS2811.html" {...extLinkProps}>OctoWS2811 LED Library</a> which is tailor-made for the controller I used. Both the FastLED and OctoWS2811 operate similarly on the Arduino framework for programming a microcontroller, namely that there has to be a <code>{"loop()"}</code> function in the <code>{".ino"}</code> file that is the main entryway into the file.
    </p>
    <p>
      As a programmer I felt confident in my ability to program these LEDs, but there was definitely a lot to learn about the way microcontroller programming works; namely, that though it uses C++ code syntax and file structure, the execution of the code is done differently from standard cpus -- it's single threaded and all code is blocking. Other issues cropped up due to the number of clock cycles and how LED instructions are sent, all of which was very interesting to go through! To see the code for the LED patterns I whipped up, see below; the OctopusHat.ino file is the main entryway with the other files defining patterns that {"(hopefully)"} I get a chance to re-use in future work. <b>I'll upload the project to Github if you ask me to {";)"}</b>
    </p>

    <Card body>
      <Tabs
        defaultActiveKey={codeFilenames[0]}
        id="led-code"
        className="mb-3"
      >
        {codeFilenames.map((f, i) => (
          <Tab key={f} eventKey={f} title={f}>
            <CodeBlock
              text={codeFiles[i]}
              language="cpp"
              // theme={paraisoDark}
              showLineNumbers={true}
              customStyle={{
                height: '30rem',
                overflow: 'scroll',
              }}
              wrapLongLines={true}
              key={f}
            />
          </Tab>
        ))}
      </Tabs>
    </Card>

    <h3  className="my-3">Some LED patterns</h3>

    <Row style={{marginBottom: "20px"}} md>
      <Col><img src={gif1} style={gifstyle} alt=""/></Col>
      <Col><img src={gif2} style={gifstyle} alt=""/></Col>
      <Col><img src={gif3} style={gifstyle} alt=""/></Col>
      <Col>
        <Figure>
          <img src={gif4} style={gifstyle} alt=""/>
          <Figure.Caption>Rainbow pattern on the version 1 hat</Figure.Caption>
        </Figure>
      </Col>
    </Row>

    <h3 className="my-3">Wiring: SO MUCH soldering</h3>

    <Row style={{marginBottom: "1rem"}} md={1} sm={1} xs={1} xl={2}>
      <Col>
        <Figure>
          <StaticImage
            src="https://live.staticflickr.com/65535/52500469085_51ac285465.jpg"
            alt="Octopus hat"
            style={{minWidth: "200px"}}
          />
          <Figure.Caption>
            Internals of the hat, along with the 3d-printed custom cases I made for the microcontroller and battery pack
          </Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <p>
          This was my first time EVER soldering, and man was it a doozy! 8 LED strips, each with Data In, Data Out, Power, and Gnd wires, each going to its own path.... it was a LOT lemme tell yea especially with the shitty $20 soldering beginner's kit I bought from Amazon. But the end result is the beautiful wiring you see here! All solder points are heat-shrink wrap protected or have silicon gel, or both, to protect them.
        </p>
      </Col>
    </Row>


    <h2 className="my-3">Upgrading to 2.0</h2>

    <p>When I initially made the hat, not only did it have the worst wiring {"(not pictured lol)"} but it also had pretty ugly/robotic looking tentacles. When I did version 2.0, I fixed BOTH problems along with adding an internal lithium ion battery pack to go with the ability to run off of an external pack!</p>

    <Row style={{marginBottom: "1rem"}}>
      <Col>
        <Figure>
          <StaticImage
            src="../../images/octopus-hat/v1_a.jpg"
            alt="Octopus hat"
            style={{minWidth: "150px"}}
          />
          <Figure.Caption>Initial Version</Figure.Caption>
        </Figure>
        <Figure>
          <StaticImage
            src="../../images/octopus-hat/v1_b.jpg"
            alt="Octopus hat"
            style={{minWidth: "150px"}}
          />
          <Figure.Caption>Initial Version lit up</Figure.Caption>
        </Figure>
        </Col>
        <Col>
        <Figure>
          <StaticImage
            src="https://live.staticflickr.com/65535/52500470480_16021fbd8c.jpg"
            alt="Octopus hat"
            style={{minWidth: "150px"}}
          />
          <Figure.Caption>Version 2.0</Figure.Caption>
        </Figure>
        <Figure>
          <StaticImage
            src="https://live.staticflickr.com/65535/52500552833_eceaa2c796.jpg"
            alt="Octopus hat"
            style={{minWidth: "150px"}}
          />
          <Figure.Caption>Version 2.0 lit up</Figure.Caption>
        </Figure>
      </Col>
    </Row>

    <h2 className="my-3">Final Assembly and Look!</h2>

    <p>Use the arrow keys to click through the Flickr album</p>
    <FlickrAlbum
      href="https://www.flickr.com/photos/135898386@N03/albums/72177720303677871"
      imgSrc="https://live.staticflickr.com/65535/52499510017_6e4aed7298.jpg"
      title="Octopus Hat"
    />

    <h2 className="my-3">Materials used</h2>

    <div style={{
      maxHeight: "30rem",
      overflow: "scroll",
      marginBottom: "5rem"
      // display: "inline-block"
    }}>
      <MaterialsUsed/>
    </div>

  </LayoutWithToc>
)



export const Head = () => <Seo title={page.title} description={page.description} />

export default SitePage
