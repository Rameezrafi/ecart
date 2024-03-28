import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { removeWish } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import { ShoppingCart } from "react-feather";

function WishList() {
  const dispatch = useDispatch();

  // Ensure that wishArray is initialized and not undefined
  const wishListArray = useSelector((state) => state.wish.wishlist) || [];

  console.log(wishListArray);

  const handleAddCart = (product) => {
    // add to cart
    dispatch(addToCart(product));

    // remove from wishlist
    dispatch(removeWish(product.id));
  };

  return (
    <div>
      <h2 className="text-center p-4">List of Products In Your Wishlist</h2>
      {wishListArray.length > 0 ? (
        <div className="row">
          {wishListArray.map((i) => (
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
                      onClick={() => dispatch(removeWish(i.id))}
                      className=" text-end"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                    <Button
                      onClick={() => handleAddCart(i)}
                      variant="dark"
                      className="ms-2"
                    >
                      <ShoppingCart size={20}></ShoppingCart>
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
    </div>
  );
}

export default WishList;
