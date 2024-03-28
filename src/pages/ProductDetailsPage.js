import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { Heart, ShoppingCart } from "react-feather";
import Coursel from "./Coursel";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [productId]);
  console.log(productId);

  return (
    <div>
      {product ? (
        <div className="container mt-4">
          <>
            <h2>Product Details</h2>
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Coursel product={product} />{" "}
                    {/* Pass product data to Coursel component */}
                  </Card.Body>
                  <Card.Text>
                    <h2>{product.title}</h2>
                  </Card.Text>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Description: {product.description}</Card.Title>
                    <Card.Title>Price: ${product.price}</Card.Title>
                    <Button variant="warning" className="ms-2">
                      <ShoppingCart size={20} className="ms-1" /> Add to Cart
                    </Button>
                    <Button variant="secondary" className="ms-3">
                      <Heart size={20} className="ms-1" /> Add to Wishlist
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
