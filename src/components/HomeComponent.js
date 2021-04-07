import React from "react";
import TableOsobeComponent from "./TableOsobeComponent";
import FormAddOsoba from "./FormAddOsoba";

const HomeComponent = () => {
  return (
    <div>
      <h1 style={{ marginLeft: 400, marginTop: 30 }}>
        {" "}
        Formik Forme i Yup validacija..{" "}
      </h1>

      <div style={{ overflow: "hidden", marginLeft: 100, marginTop: 55 }}>
        <div style={{ float: "left" }}>
          <TableOsobeComponent />
        </div>

        <div style={{ float: "left", marginLeft: 250 }}>
          <FormAddOsoba />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
