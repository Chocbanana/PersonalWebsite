import React, { useState, useEffect } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { Button, Offcanvas, ListGroup, ListGroupItem } from "react-bootstrap"

const TableOfContents = () => {
  const [headings, setHeadings] = useState([])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3, h4"))
    const newHeadings = []
    headingElements.forEach(h => {
      const heading = {
        textContent: h.textContent,
        level: Number(h.tagName.substring(1)),
      }
      // Create ids for all headings to link to
      if (h.id === "") h.id = h.textContent.replace(/[\W\d]/g, "-")
      heading.id = h.id
      newHeadings.push(heading)
    })
    setHeadings(newHeadings)
    console.log(headingElements)
  }, [])

  const toc = (
    <ListGroup id="toc">
      {headings.map(h => (
        <ListGroupItem action={true} key={h.id} eventKey={h.id} href={`#${h.id}`} variant="secondary">
          <div style={{ marginLeft: `${2 * (h.level - 2)}em` }}>{h.textContent}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  )

  return (
    <>
      <Button
        variant="primary"
        // Makes the button appear upon small screen
        className="d-xl-none"
        onClick={handleShow}
        style={{ position: "fixed" }}
      >
        <GiHamburgerMenu />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="xl"
        placement="top"
        scroll="true"
        style={{
          backgroundColor: "rgba(var(--bs-secondary-rgb), 0.97)",
          position: "sticky",
          top: 10,
          bottom: 0,
          left: 0,
          alignSelf: "flex-start",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Table of Contents</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{toc}</Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default TableOfContents
