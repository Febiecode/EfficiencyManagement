'use client'
import React, { useState, Fragment, useMemo } from "react";
import ProcessForm from "./ProcessForm";
import mData from './MOCK_DATA.json'

const Main = () => {
  const data = useMemo(() => mData, []);
  const [tableData, setTableData] = useState(data)
    

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
      <ProcessForm
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
        tableData={tableData}
      />


    </Fragment>
  );
}
export default Main;