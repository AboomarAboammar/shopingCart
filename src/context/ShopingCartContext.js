import {createContext, useContext, useState,useEffect } from "react";
import ShoppingCart from "../componants/ShoppingCart";

const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const ShopingCartContext=createContext({});



const ShopingCartProvider = ({children}) => {
    const [isOpen,setIsOpen] =useState(false);
    
    const [cartItems,setCartItems] =useState(initialCartItems);
    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
      }, [cartItems]);
    const openCart=()=>{
        setIsOpen(true);
    };
    const closeCart=()=>{
        setIsOpen(false);
    };
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      );
    const cartItemsQuantity=(id)=>{
        return cartItems.find((item)=>item.id===id)?.quantity || 0;
    };
    const increaseCartQuantity = (id)=>{
        setCartItems((currIems)=>{
            if(currIems.find((item)=>item.id===id)==null){
                return[...currIems, {id,quantity:1}];
            }else {
                return currIems.map((item)=>{
                    if(item.id===id) {
                        return{...item, quantity:item.quantity+1};
                    }else{return item};
                });
            }
        });
        
    };
    const decreasequantity=(id)=>{
        setCartItems((currIems)=>{
            if(currIems.find((item)=>item.id ===id)?.quantity===1){
                return currIems.filter((item)=>item.id !== id);
            } else {
                return currIems.map((item)=>{
                    if(item.id ===id) {
                        return { ...item, quantity:item.quantity -1};
                    } else{return item;}
                })
            }
        })
    };
    const removeItem=(id)=>{
        setCartItems((currIems)=>currIems.filter((item)=>item.id !==id));
    };
  return (
    <ShopingCartContext.Provider
     value={{
        cartItems,
        increaseCartQuantity,
        decreasequantity,
        removeItem,
        cartItemsQuantity,
        openCart,
        closeCart,
        cartQuantity}}>
           
        {children}
        <ShoppingCart isOpen={isOpen} />
        
      
        </ShopingCartContext.Provider>
    
  );
};


export default ShopingCartProvider;
export const useShopingCart =() => {
    return useContext(ShopingCartContext);
};