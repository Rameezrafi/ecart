import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Heart, ShoppingCart } from "react-feather";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CategoriesList from "./CategoriesList";


function Home() {
  //   const [products, setProducts] = useState([]);
  //   const { categoryId } = useParams();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       let apiUrl = "https://api.escuelajs.co/api/v1/products";
  //       if (categoryId) {
  //         apiUrl = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
  //       }
  //       const response = await fetch(apiUrl);
  //       const data = await response.json();
  //       setProducts(data);
  //     };
  //     fetchData();
  //   }, [categoryId]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Row>
        <Col lg={6}>
          <img
            className="w-100"
            style={{ height: "500px" }}
            src="https://i.postimg.cc/4NvzgPDT/insurance-shop-img-removebg.png"
            alt=""
          />
        </Col>
        <Col lg={6}>
          <div className="p-4 mt-5">
            <b className="fs-3 text-center">
              Enjoy Every Movement of Life with Shopy.com{" "}
            </b>
            <p className="fs-4 mt-5">
              A shop is your online storefront where people can browse, explore
              and purchase your products directly on Facebook and Instagram.
              With customisable collections and simple design tools, you can
              showcase featured products, bring your brand to life and make
              shopping seamless for your customers.
            </p>
          </div>
        </Col>
      </Row>
      <CategoriesList></CategoriesList>
      <Row className="mt-2">
        {products.map((product) => (
          <Col key={product.id} lg={3} md={4} sm={6} className="p-5">
            <Link
              to={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                className="text-center"
                id="d"
                style={{ width: "18rem", cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  style={{ height: "300px" }}
                  src={product.images[0]} // Assuming product.images contains the URL of the product image
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <b>${product.price}</b>
                    <br />
                    <p>{product.rating}</p>
                  </Card.Text>
                  <Button
                    // onClick={() => dispatch(addToCart(i))}
                    variant="dark"
                    className="ms-2"
                  >
                    <ShoppingCart size={20}></ShoppingCart>
                  </Button>
                  <Button
                    // onClick={() => dispatch(addToWish(i))}
                    variant="dark"
                    className="ms-4"
                  >
                    <Heart size={20}></Heart>
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
