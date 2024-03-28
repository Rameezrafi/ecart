import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { clearCart, removeCart } from "../redux/cartSlice";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Cart() {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const cartArray = useSelector((state) => state.cart);
  console.log(cartArray);

  if (cartArray.length != 0) {
    var total = cartArray.map((i) => i.price).reduce((a, b) => a + b);
  } else {
    var total = 0;
  }
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handlePay = () => {
    dispatch(clearCart());
    setShow(false);
  };
  return (
    <div>
      <h2 className="text-center p-5">Cart Products</h2>
      {cartArray.length > 0 ? (
        <div className="row">
          {cartArray.map((i) => (
            <Col lg={3} md={4} sm={6} className="p-5" key={i.id}>
              <Card className="text-center" id="d" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "300px" }}
                  src={i.image}
                />
                <Card.Body>
                  <Card.Title>
                    <p>
                      {i.title.length > 30
                        ? i.title.slice(0, 30) + ".."
                        : i.title}
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>{i.price} Rs</b> <br />
                    <p>Rating {i.rating.rate}</p>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeCart(i.id))}
                      className=" text-end"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      ) : (
        <h2>Cart is Empty</h2>
      )}
      <div className="text-end">
        <p>Cart Total {total} Rs</p>
      </div>
      <div className="text-center p-5">
        <Button className="btn btn-secondary" onClick={handleShow}>
          Checkout
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pay To Continue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="mb-3"
            >
              <Form.Control type="phone number" placeholder="name@gmail.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingupi" label="upi id">
              <Form.Control type="text" placeholder="enter upi" />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="px-4" variant="info" onClick={handlePay}>
              Pay
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Cart;
