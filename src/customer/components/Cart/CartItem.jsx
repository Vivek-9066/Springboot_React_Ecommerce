import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id));
  };
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 font-semibold opacity-90">
          <p>{item.product.title}</p>
          <p className="opacity-70 mt-2">
            Size: {item.size} , {item.product.color}
          </p>
          <p className=" opacity-70">Seller: {item.product.brand}</p>

          <div className="flex space-x-4 items-center text-gray-900 mt-4">
            <p className="font-semibold">{item.discountedPrice}</p>
            <p className="opacity-50 line-through">{item.price}</p>
            <p className="text-green-500 font-semibold">
              {item.product.discountPercent}% Off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 p-4">
        <div className="flex items-center space-x-2">
          <IconButton disabled={item.quantity <= 1}>
            <RemoveCircleIcon onClick={() => handleUpdateCartItem(-1)}/>
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton sx={{ color: "#9155fd" }}>
            <AddCircleIcon onClick={() => handleUpdateCartItem(1)}/>
          </IconButton>
        </div>
        <div>
          <Button onClick={handleRemoveCartItem} sx={{ color: "#9155fd" }}>
            remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
