import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";
import useCart from "../hooks/useCart";
import { FaHeart } from "react-icons/fa";

export default function FavoriteDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState({});
  const { handleAddToCart, handleRemoveFromCart } = useCart();
  const [isLiked, setLiked] = useState(false);

  const handleHeartClick = () => {
    setLiked(!isLiked);
  };
  useEffect(() => {
    let productService = new ProductService();
    productService.getBook(id).then((result) => setProduct(result.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <div>
              <FaHeart
                onClick={handleHeartClick}
                style={{ color:  "red" , cursor: "pointer" , marginRight: "750px", fontSize: '2em'}}
              />
            </div>
            <Image floated="right" size="tiny" src='https://i.dr.com.tr/cache/500x400-0/originals/0000000105599-1.jpg' />
            <Card.Header>Harry Potter</Card.Header>
            <Card.Meta>Yazar :  J. K. Rowling</Card.Meta>
            <Card.Meta>Sayfa Sayısı :  200</Card.Meta>
            <Card.Meta>Fiyat : 165</Card.Meta>

            <Card.Description></Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button onClick={() => handleAddToCart(product)} color="green">
                Sepete Ekle
              </Button>
              <Button
                onClick={() => handleRemoveFromCart(product)}
                color="pink"
              >
                Sepetten Çıkar
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
