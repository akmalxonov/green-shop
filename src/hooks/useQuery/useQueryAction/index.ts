import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import type { AuthType } from "../../../@types";
import { useDispatch } from "react-redux";
import { setOpenAuthorizationModal } from "../../../redux/modal-slice";
import { notificationApi } from "../../../generic/notificationApi";
import { signInWithGoogle } from "../../../config";
import { getCoupon } from "../../../redux/shopSlice";

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
      console.log(token);
      console.log(user);
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
      console.log(token);
      console.log(user);
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
      console.log(response);
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
      console.log(token);
      console.log(user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(setOpenAuthorizationModal());
      notify("login_sucsses")
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
      console.log(token);
      console.log(user);
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
  return useMutation({
    mutationKey: ["coupon"],
    mutationFn: (coupon_code: string) =>
      axios({ url: "api/features/coupon", params: { coupon_code } }),
    onSuccess(data) {
      console.log(data.data.discount_for);
      dispatch(getCoupon(data.data.discount_for));
      notify("get_coupon")
    },
  });
};
