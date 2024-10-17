import {
  loaduser,
  errors,
  logout,
  setloadingfalse,
  setloading,
  setshops,
  setpageloading,
  setpageloadingfalse,
  createshops,
  removeshops,
} from "./UserSlice";
import Axios from "../Axios";
import { notify } from "../components/common/Toast";

export const asyncloaduser = () => async (dispatch) => {
  try {
    dispatch(setpageloading());
    const { data } = await Axios.get("/me");
    if (data.success) {
      dispatch(loaduser(data.user));
    }
    dispatch(setpageloadingfalse());
  } catch (err) {
    dispatch(setpageloadingfalse());
    dispatch(errors(err?.response?.data?.message));
  }
};

export const asynclogout = () => async (dispatch) => {
  try {
    dispatch(setpageloading());
    await Axios.get("/logout");
    dispatch(logout());
    dispatch(setpageloadingfalse());
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncadminlogin = (formdata) => async (dispatch) => {
  try {
    dispatch(setloading());
    const { data } = await Axios.post("/admin/login", formdata);
    if (data.success) dispatch(asyncloaduser());
    dispatch(setloadingfalse());
  } catch (err) {
    dispatch(errors(err?.response?.data?.message));
  }
};

export const asynccreateshop = (formdata) => async (dispatch) => {
  try {
    dispatch(setloading());
    const { data } = await Axios.post("/admin/shop", formdata);
    dispatch(createshops(data.user));
    notify(data.message);

    dispatch(setloadingfalse());
  } catch (err) {
    dispatch(errors(err?.response?.data?.message));
  }
};
export const asyncremoveshop = (id) => async (dispatch) => {
  try {
    dispatch(setloading());
    await Axios.delete(`/admin/shop/${id}`);
    dispatch(removeshops(id));
    dispatch(setloadingfalse());
  } catch (err) {
    dispatch(errors(err?.response?.data?.message));
  }
};

export const asynallshops = () => async (dispatch) => {
  try {
    dispatch(setloading());
    const { data } = await Axios.get("/admin/shop");
    dispatch(setshops(data.shops));
    dispatch(setloadingfalse());
  } catch (err) {
    dispatch(errors(err?.response?.data?.message));
  }
};
