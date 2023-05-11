"use client";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useState, useRef } from "react";

const FetchContext = React.createContext({
  fetchedData: null,
  isLoading: false,
  error: null,
  ref: null,
  handleSubmit: async (e) => {},
  handleTest: () => {},
  
});

export const FetchContextProvider = (props) => {
  const URL = "http://localhost:8080/api/universities/filter";
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const results = useRef(null);
  const ErrorToast = () => toast("Something went wrong!");

  async function handleSubmit(data) {
    setData(null);
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(URL, data);

      if (response.status !== 200) {
        throw new Error(`Can't find this university, try again`);
      }

      setData(response.data);
      console.log(response.data);
    } catch (error) {
      ErrorToast();
      setError(error.message || "Something went wrong!");
      setData(null);
      console.error(error);
    }
    setIsLoading(false);
    setTimeout(() => {
      results.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  

  return (
    <FetchContext.Provider
      value={{
        handleSubmit: handleSubmit,
        fetchedData: data,
        isLoading: isLoading,
        error: error,
        ref: results,
      }}
    >
      {props.children}
    </FetchContext.Provider>
  );
};

export default FetchContext;
