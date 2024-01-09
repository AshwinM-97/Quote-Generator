import React, { useState } from "react";
import "./Box.css";
import { VscCircleLargeFilled } from "react-icons/vsc";
import Modal from "react-bootstrap/Modal";

const Box = ({ input }) => {
  const [color, setColor] = useState("white");
  const [quote, setQuote] = useState(null);
  const [show, setShow] = useState(false);
  const [palete, setPalete] = useState([
    "crimson",
    "beige",
    "orangered",
    "cornflowerblue",
    "cyan",
    "deeppink",
    "gold",
    "lime",
    "mediumspringgreen",
    "orchid",
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    fetch(`https://api.quotable.io/quotes/random?tags=[${input}]`)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };
  return (
    <>
      <div className="box col-10 col-lg-4 mx-auto my-5 d-flex justify-content-around flex-column">
        <h1 className="fs-4 text-center pt-3" style={{ color: `coral` }}>
          {input}
        </h1>
        {quote == null
          ? ""
          : quote.map((data) => {
              return (
                <div className="content" key={data._id}>
                  <h1
                    className="fs-5 text-center px-2 px-lg-5 py-3"
                    style={{ color: `${color}` }}
                  >
                    {data.content}
                  </h1>
                  <p
                    className="fs-5 text-center pt-2"
                    style={{ color: `${color}` }}
                  >
                    -{data.author}
                  </p>
                </div>
              );
            })}

        <div className="d-flex gap-5 justify-content-center align-items-center mt-3 pb-5">
          <div className="btn btn-outline-success " onClick={handleClick}>
            Generate
          </div>
          <VscCircleLargeFilled
            fontSize={30}
            className="circle"
            color={color}
            onClick={handleShow}
          />
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Body className="d-flex align-items-center justify-content-around bg-dark">
          {palete.map((data, index) => (
            <VscCircleLargeFilled
              key={index}
              fontSize={30}
              color={data}
              onClick={() => {
                setColor(data);
                handleClose();
              }}
              className="color"
            />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Box;
