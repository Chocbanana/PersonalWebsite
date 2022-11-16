import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button, Offcanvas } from 'react-bootstrap';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const headingElements = Array.from(
    document.querySelectorAll("h2, h3, h4")
    );
    const newHeadings = []
    headingElements.forEach((h) => {
      const heading = {
        textContent: h.textContent,
        level: Number(h.tagName.substring(1))
      }
      if (h.id === "") h.id = h.textContent.replace(/ /g,"-")
      heading.id = h.id
      newHeadings.push(heading)
    })
    setHeadings(newHeadings)
    console.log(headingElements)
  }, [])

  const toc =
    <ul style={{listStyle: "none"}}>
      {headings.map((h) => (
        <li
          key={h.id}
          style={{ marginLeft: `${2*(h.level - 2)}em`}}
        >
          <a href={`#${h.id}`} style={{textDecoration: "none", color: "green"}}>
            {h.textContent}
          </a>
        </li>
      ))}
    </ul>

  return (
    <>
    <Button variant='primary'
      // Makes the button appear upon small screen
      className="d-lg-none"
      onClick={handleShow}
      style={{position: "fixed"}}
    >
      <GiHamburgerMenu/>
    </Button>

    {/* <Card body
      border="secondary" bg="secondary"
      // Makes the card dissapear upon small screen
      // className="d-none d-lg-block"
      style={{position: "fixed"}}>
      {toc}
    </Card> */}

    <Offcanvas show={show}
      onHide={handleClose}
      responsive="lg"
      placement="top"
      scroll="true"
      style={{backgroundColor: "rgba(var(--bs-secondary-rgb), 0.97)"}}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Table of Contents</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {toc}
      </Offcanvas.Body>
    </Offcanvas>
    </>
  )
}

export default TableOfContents
