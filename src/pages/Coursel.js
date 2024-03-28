import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

function Coursel() {
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

  return (
    <div>
      {product ? (
        <div>
          <hr />
          {product &&
            product.images &&
            product.images.length > 0 && ( // Check if product and images exist
              <Carousel>
                {product.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={image}
                      className="d-block w-100"
                      style={{ height: "500px" }}
                      alt={`Product ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Coursel;
