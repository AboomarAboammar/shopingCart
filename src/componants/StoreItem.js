import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShopingCart } from "../context/ShopingCartContext";
import formatCurrency from "./formatCurrency";


const StoreItem = ({ id, name, price,imgUrl}) => {
  
  const {
    increaseCartQuantity,
    decreasequantity,
    removeItem,
    cartItemsQuantity} =useShopingCart();
  const quantaty = cartItemsQuantity(id);
  
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body >
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">
            {name}
          </span>
          <span className="text-muted me-2">
            {formatCurrency(price)}
          </span>

        </Card.Title>
        <div className="mt-auto">
          {quantaty=== 0?(
            <Button className="w-100" onClick={()=>increaseCartQuantity(id)} >ADD TO CARD</Button>
          ):(
            <div className="d-flex align-items-center flex-column" 
            style={{ gap: "0.5rem" }}
          >
            <div className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}>
                  <Button onClick={()=>decreasequantity(id)}> - </Button>
                  <span>{quantaty} IN CARD</span>
                  <Button onClick={()=>increaseCartQuantity(id)}> + </Button>
            </div>
            <Button variant="danger" size="sm" onClick={()=>removeItem(id)} >REMOVE</Button>
          </div>
          )}

        </div>
      </Card.Body>
      
    </Card>
  );
};

export default StoreItem;