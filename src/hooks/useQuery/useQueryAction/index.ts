import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import type {
  AddressType,
  AuthType,
  idType,
  MakeOrderType,
  CouponResponse,
  AddressResponseType,
  OrderResponseType
} from "../../../@types";
import { useDispatch } from "react-redux";
import { setOpenAuthorizationModal } from "../../../redux/modal-slice";
import { notificationApi } from "../../../generic/notificationApi";
import { signInWithGoogle } from "../../../config";
import { getCoupon } from "../../../redux/shopSlice";
import { getLocal, setLocal } from "../../../generic/local";

export const useLoginMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: { email: string; password: string }) =>
      axios({ url: "api/user/sign-in", method: "POST", body: data }),
    onSuccess: (res: {
      message: string;
      data: { token: string; user: AuthType };
    }) => {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      notify("login_sucsses");
      dispatch(setOpenAuthorizationModal());
    },
    onError: () => {
      notify("login_wrong");
    },
  });
};

export const useRegisterMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: {
      name: string;
      surname: string;
      email: string;
      password: string;
    }) => axios({ url: "api/user/sign-up", method: "POST", body: data }),
    onSuccess: (res: {
      message: string;
      data: { token: string; user: AuthType };
    }) => {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setOpenAuthorizationModal());
    },
    onError: (error: { status: number }) => {
      if (error.status === 406) {
        notify(error.status);
      }
    },
  });
};

export const useRegisterWithGoogleMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();
  return useMutation({
    mutationKey: ["register-google"],
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "api/user/sign-up/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (res: {
      message: string;
      data: { token: string; user: AuthType };
    }) => {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setOpenAuthorizationModal());
      notify("login_sucsses");
    },
    onError: (error: { status: number }) => {
      if (error.status === 406) {
        notify(error.status);
      }
    },
  });
};

export const useLoginWithGoogleMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();
  return useMutation({
    mutationKey: ["login-google"],
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "api/user/sign-in/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },
    onSuccess: (res: {
      message: string;
      data: { token: string; user: AuthType };
    }) => {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      notify("login_sucsses");
      dispatch(setOpenAuthorizationModal());
    },
    onError: () => {
      notify("login_wrong");
    },
  });
};

export const useGetCoupon = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();
  return useMutation<CouponResponse, Error, string>({
    mutationKey: ["coupon"],
    mutationFn: (coupon_code: string) =>
      axios({ url: "api/features/coupon", params: { coupon_code } }),
    onSuccess(data) {
      dispatch(getCoupon(data.data.discount_for));
      notify("get_coupon");
    },
  });
};

export const useAddressMutation = (): UseMutationResult<AddressResponseType, Error, AddressType> => {
  const notify = notificationApi();
  const axios = useAxios();

  return useMutation<AddressResponseType, Error, AddressType>({
    mutationKey: ["add-address"],
    mutationFn: (data: AddressType) =>
      axios({ url: "api/user/address", method: "POST", body: data }),
    onSuccess: (res) => {
      const user = getLocal("user");
      const address = res;

      if (user && address && address?.country) {
        const updatedUser = {
          ...user,
          billing_address: address,
        };
        setLocal("user", updatedUser);
        notify("add_address");
      } else {
        console.warn("❌ billing_address topilmadi yoki bo‘sh:", address);
      }
    },
    onError: () => {
      console.log("❌ Failed to add address");
    },
  });
};

export const useOrderMutation = (): UseMutationResult<OrderResponseType, Error, MakeOrderType> => {
  const notify = notificationApi();
  const axios = useAxios();

  return useMutation<OrderResponseType, Error, MakeOrderType>({
    mutationKey: ["order"],
    mutationFn: (data: MakeOrderType) =>
      axios({ url: "api/order/make-order", method: "POST", body: data }),
    onSuccess: (res) => {
      const user = getLocal("user");
      console.log(res);
      console.log(user);
      notify("add_address");
    },
  });
};

export const useOrderDeleteMutation = (): UseMutationResult<unknown, Error, idType> => {
  const notify = notificationApi();
  const axios = useAxios();

  return useMutation<unknown, Error, idType>({
    mutationKey: ["delete-order"],
    mutationFn: (data: idType) =>
      axios({ url: "api/order/delete-order", method: "DELETE", body: data }),
    onSuccess: () => {
      notify("delete_order");
    },
  });
};
