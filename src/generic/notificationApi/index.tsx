import { notification } from "antd";

type NotifyType =
  | "login_sucsses"
  | "login_wrong"
  | "wrong_confirm_password"
  | 406
  | "register_sucsses"
  | "product_add"
  | "get_coupon"
  | "add_wishlist"
  | "remove_wishlist"
  | "add_address"
  |  "delete_order"
  | "detete_card";

export const notificationApi = () => {
  const notify = (type: NotifyType) => {
    switch (type) {
      case "login_sucsses":
        return notification.success({ message: "You are logged in !" });
      case "register_sucsses":
        return notification.success({ message: "You are register !" });
      case "product_add":
        return notification.success({ message: "Product added to cart" });
      case "get_coupon":
        return notification.success({ message: "Coupon successfully applied" });
      case "login_wrong":
        return notification.warning({ message: "Password or Login wrong!" });
      case "wrong_confirm_password":
        return notification.error({ message: "Error confirm password wrong!" });
      case 406:
        return notification.error({ message: "Email already exsist" });
      case "detete_card":
        return notification.warning({ message: "Removed from cart !" });
      case "add_wishlist":
        return notification.success({ message: "Product added to wishlist" });
      case "remove_wishlist":
        return notification.warning({ message: "Product removed from wishlist" });
        case "add_address":
        return notification.success({ message: "Address updated successfully" });
        case "delete_order":
        return notification.success({ message: "Deleted from your order" });
    }
  };
  return notify;
};
