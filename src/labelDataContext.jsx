import React, { useState, createContext } from "react";

export const LabelContext = createContext();

export const LabelProvider = (props) => {
  
  const [page, setPage] = useState(0);
  
  const [labelInfo, setlabelInfo] = useState({
    sender: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    recevier: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    weight: "",
    shippingOption: "1"
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };
  console.log(page, "page");
  const handleChange = (prop) => (event) => {
    setlabelInfo({ ...labelInfo, [prop]: event.target.value });
  };

  const setSenderInfo = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      sender: { ...labelInfo.sender, [prop]: event.target.value }
    });
  };

  const setRecevierInfo = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      recevier: { ...labelInfo.recevier, [prop]: event.target.value }
    });
  };

  const setShippingOption = (option) => {
    setlabelInfo({ ...labelInfo, shippingOption: option });
  };

  const steps = [
    { title: "GET SENDER ADDRESS" },
    { title: "GET RECEIVER ADDRESS" },
    { title: "GET WEIGHT" },
    { title: "GET SHIPPING OPTION " },
    { title: "CONFIRM" }
  ];

  return (
    <LabelContext.Provider
      value={{
        page,
        steps,
        nextPage,
        prevPage,
        labelInfo,
        handleChange,
        setSenderInfo,
        setRecevierInfo,
        setShippingOption
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};
