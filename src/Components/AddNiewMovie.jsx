import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { handelAdd } from "../Redux/action";
import StarRatingp from "./StarRating";

export const AddNiewMovie = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();

  const handelRating = (x) => setRating(x);

  const handelSubmit = (e) => {
    e.preventDefault();
    const theNiewMovie = {
      id: Math.random(),
      name,
      date,
      image,
      rating,
    };

    dispatch(handelAdd(theNiewMovie));

    setDate("");
    setImage("");
    setName("");
    setRating("");
    closeModal();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}  className="AddNewMovie">Add New Movie</button> */}

      <Button onClick={openModal} variant="primary" className="AddNewMovie">
        Add New Movie
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form className=" FormMovieAdd" onSubmit={handelSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>MovieTitre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter titre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Movie Poster </Form.Label>
            <Form.Control
              type="text"
              placeholder="Movie Poster"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Movie Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Movie Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <StarRatingp rating={rating} handelRating={handelRating} />
          </Form.Group>

          <div className="btnForm">
            {" "}
            <Button variant="primary" type="submit">
              Add
            </Button>
            <Button variant="primary" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
