import * as React from "react"
import { Row, Col, Figure } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import { LayoutWithToc } from "../../components/layout"
import Seo from "../../components/seo"
import pageLinks from "../../data/site-pages"
import { FlickrAlbum } from "../../components/flickr-embed"
import { ExternalCard } from "../../components/external-links"
import { MaterialsUsedBrainLamp } from "../../data/materials-used"

import img1 from "../../images/brain-lamp/slicer_brain_editing.jpg"
import gif1 from "../../images/brain-lamp/brain_open.gif"
const gifstyle = {
  width: "100%",
  minWidth: "150px",
  marginBottom: "15px",
  borderRadius: "30px",
}

const page = pageLinks["brainlamp"]

const SitePage = ({ pageContext }) => (
  <LayoutWithToc page={page}>
    <h2 className="my-3">Inspiration</h2>

    <Row>
      <Col md={4} lg={6}>
        <Figure className="my-2">
          <StaticImage src="https://live.staticflickr.com/65535/52906080484_238fb7f6f9_o.jpg" alt="Brain Lamp" />
          <Figure.Caption>The lamp, lit and unlit</Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <Row>
          <p>
            Ever since I went to the hospital and, on a whim, requested my own MRI files from the brain scan, I
            wondered: since I have a 3D printer, could I 3D print my brain? Well it turns out -- lots have had this
            shower thought and there are plenty tutorials online for that. Now, making mini prints of your brain to use
            as paperweights or whatever is cool and all, but what if we went further and literally lit your brain up
            with inspiration?!
          </p>
          <p>
            Thus was incepted the brain lamp; a smart-led color changing lamp that illuminates your 3D-printed brain
            from the inside. I worked extensively on this project and am happy to share how I got to the beautiful
            finished product, so that anyone with MRIs of their brain and access to a 3D printer can have their actual
            brain as a desk lamp.
          </p>
          <p>
            If you'd like to follow along this story with the actual 3D printable files {"("}So that you can make your
            own version of my brain file!{")"} please check out the Instructables page below, which is this page but
            with links for files and such.
          </p>
        </Row>
        <Row>
          <ExternalCard {...pageContext.linkPreviewData[0]} imgStyle={{ maxHeight: "200px" }} />
        </Row>
      </Col>
    </Row>

    <h2 className="my-3">MRI to Printable Object</h2>

    <Row>
      <Col>
        <p>
          Now, there are many tutorials online for converting an MRI scan to a printable STL, like{" "}
          <a href="https://github.com/miykael/3dprintyourbrain">this one</a> or{" "}
          <a href="https://www.instructables.com/3D-Printing-from-MRI-data-in-5-steps/">this one</a>; however, I found
          that they either didn't have good instructions on how to use the software, or they used software that{" "}
          <a href="https://christine.website/blog/brain-fmri-to-3d-model-2019-08-23/">doesn't work anymore</a>{" "}
          (Freesurfer). But eventually I found a{" "}
          <a href="https://medium.com/@ajarailerons/how-to-3d-print-a-brain-from-mri-scan-7f6f4ddcf4b4">
            working tutorial !
          </a>{" "}
          It uses the software <a href="https://www.slicer.org/">Slicer</a>, and its instructions are pretty much still
          relevant. I still had to make some modifications to get it to work like using a different Slicer plugin and
          some adjustments in the settings (which got updated since the tutorial was posted) but I was eventually able
          to get the STL file from my MRI scans.
        </p>
      </Col>
      <Col md={4}>
        <img src={img1} style={gifstyle} alt="" />
      </Col>
    </Row>

    <h2 className="my-3">Cleaning the Object</h2>

    <Row>
      <Col md={4}>
        <Figure className="my-2">
          <StaticImage
            src="https://live.staticflickr.com/65535/52919679236_d532ca4fb4_o.jpg"
            alt="Brain Lamp"
            style={{ borderRadius: "5%" }}
          />
          <Figure.Caption>
            Cleaned and uncleaned mini printed brains; can't really tell the difference which is good!
          </Figure.Caption>
        </Figure>
      </Col>
      <Col>
        The file is not ready yet! It needs to be cleaned of all the crummy artifacts, be made manifold (for printing),
        and generally made better. The main step was needing to completely remove all artifacts/pieces from inside the
        model, which I did using Meshmixer (you can use any 3D model editing software like Blender or Maya). And now you
        have the first success: a printable model of your brain! Most stop here, but we are going to move on to making
        it even cooler: turning this into a beautiful lamp!
      </Col>
    </Row>

    <h2 className="my-3">Turning Into a Lamp</h2>

    <Row style={{ marginBottom: "1rem" }}>
      <Row>
        <p>There are several steps before we can print, but they are relatively straightforward.</p>
        <ul>
          <li>
            <strong>Enlarge the model:</strong> Enlarging is easy; you just need to make sure that you have a 1 inch min
            clearance around the lamp bulb (so it doesn't overheat and melt). Estimate the lamp base and bulb as
            cylinders in your favorite modeling software; I use Blender (because it's free and I've already invested way
            too much time into learning it), but also it turns out that Prusa Slicer is an amazing modeling and
            post-processing software that can do a lot!
          </li>
          <li>
            <strong>Hollow the model: </strong>Hollowing the model is tricky to nigh-impossible in Blender due to all
            the curves inside the brain, but it is pretty easy to do in Meshmixer. Also, you can do it in Prusa Slicer!
            Just <a href="https://help.prusa3d.com/article/hollowing_117285">put into SLA mode</a> and you can set the
            desired thickness, even smoothing on the inside curves. I recommend a shell thickness o
            <strong>f 2mm</strong> to allow light through, but also ensuring structural integrity.
          </li>
          <li>
            <strong>Make the lamp hole: T</strong>his will be specific to whatever lamp base + light bub you bought.
            Using the lamp base model from enlarging the model, cut that shape out from the brain, giving about 0.3mm
            clearance (you could give more, but it's always better to do less, since you can just file/sand off the
            fit).
          </li>
          <li>
            <strong>Cut in half: </strong>Once again I like Prusa Slicer for this; you just have to use the tool that
            cuts objects in half. It would be much more complicated in Blender, where you have to fill the hole cuts
            manually.
          </li>
          <li>
            <strong>Add magnet holders: </strong>This part is tricky; make little cylinders that have a{" "}
            <strong>10.5mm hole</strong>, and attach them to 4 corners of the brain lamp,{" "}
            <strong>on each brain half,</strong> making sure that they line up between the two halves. We will glue the
            magnets in them after to serve as the way to open and close the lamp (to get at the bulb).
          </li>
        </ul>
        <p>
          I've attached files that will work with the{" "}
          <a href="https://www.amazon.com/dp/B08H836RQF?ref=ppx_yo2ov_dt_b_product_details&amp;th=1">
            specific lamp base
          </a>{" "}
          I bought, which was pretty cheap.
        </p>
      </Row>
      <Row xs={1} sm={2} md={4} xxl={4}>
        <Col>
          <Figure className="my-2">
            <StaticImage
              src="https://live.staticflickr.com/65535/52906080564_c688e06048_o.jpg"
              alt="Brain Lamp"
              style={{ borderRadius: "5%" }}
            />
            <Figure.Caption>The lit lamp in one color cycle</Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className="my-2">
            <StaticImage
              src="https://live.staticflickr.com/65535/52905357482_6a95e33197_o.jpg"
              alt="Brain Lamp"
              style={{ borderRadius: "5%" }}
            />
            <Figure.Caption>Inside of the lamp</Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className="my-2">
            <img src={gif1} style={gifstyle} alt="" />
            <Figure.Caption>The lamp is held together with magnets!</Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className="my-2">
            <StaticImage
              src="https://live.staticflickr.com/65535/52906312715_dd9cbf32f9_o.jpg"
              alt="Brain Lamp"
              style={{ borderRadius: "5%" }}
            />
            <Figure.Caption>Top half in process of being printed; takes the whole plate volume!</Figure.Caption>
          </Figure>
        </Col>
      </Row>

      <Row>
        <p>
          Watch out -- this is a hefty print! Totaling at around 40-60 hrs and more than 500g of filament, it will take
          a long time; not the least because of all the supports. If you could find a way to shorten the print let me
          know!{" "}
        </p>
        <p>Now, all you have to do is </p>
        <ol>
          <li>Glue the magnets into the each half's magnet bases</li>
          <li>Glue the bottom half of the brain to the lamp base</li>
          <li>Screw in the bulb</li>
          <li>Plug in and enjoy!</li>
        </ol>
        <p>
          I hope you had as good a time I did making this, and the end result is a lamp made of your very own brain!{" "}
        </p>
      </Row>
    </Row>
    <h2 className="my-3">Materials Used</h2>
    <div
      style={{
        // maxHeight: "30rem",
        // overflow: "scroll",
        marginBottom: "5rem",
        // display: "inline-block"
      }}
    >
      <MaterialsUsedBrainLamp />
    </div>
    <FlickrAlbum
      href="https://www.flickr.com/photos/135898386@N03/albums/72177720308495566"
      imgSrc="https://live.staticflickr.com/65535/52906080484_c7cf3a8594_z.jpg"
      title="Brain Lamp"
    />
  </LayoutWithToc>
)

export const Head = () => <Seo {...page} />

export default SitePage
