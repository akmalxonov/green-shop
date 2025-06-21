import { notification } from "antd";

type NotifyType =
  | "login_sucsses"
  | "login_wrong"
  | "wrong_confirm_password"
  | 406
  | "register_sucsses"
  | "product_add"
  | "get_coupon"
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
    }
  };
  return notify;
};
