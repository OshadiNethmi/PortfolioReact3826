import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './index.css';
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, SetMyapiData, Showloading } from "./redux/rootSlice";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";


function App() {
  const { loading, myapiData, reloadData } = useSelector(state => state.root);
  const dispatch = useDispatch();
  const getMyapiData = async () => {
    try {
      dispatch(Showloading());
      const response = await axios.get("/api/myapi/get-myapi-data");
      dispatch(SetMyapiData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading()); 
    }
  };
  useEffect(() => {
    if (!myapiData) {
      getMyapiData();
    }
  }, [myapiData]);


  useEffect(() => {
    if (reloadData) {
      getMyapiData();
    }
  }, [reloadData]);


  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
