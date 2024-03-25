'use client'
import React, { useState, Fragment, useMemo } from "react";
import Form from "./ProcessForm";

const Main = () => {
    

  const [formObject, setFormObject] = useState({
    processId: "",
    processDescription: "",
    perPcTime: "",
    status: "",
  });
  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { processId: "",
      processDescription: "",
      perPcTime: "",
      status: "", };
      setFormObject(isEmpty);
    }
  };
  return (
    <Fragment>
      <Form
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
      />
      
    </Fragment>
  );
}
export default Main;