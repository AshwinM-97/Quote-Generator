import React from "react";
import Form from "react-bootstrap/Form";

const Options = ({ tags, setInput }) => {
  return (
    <>
      <div className="options col-10 col-lg-4 mx-auto">
        <Form.Select
          data-bs-theme="dark"
          onChange={(e) => setInput(e.target.value)}
        >
          <option>Select Tag</option>
          {tags.map((data, index) => {
            return <option key={index}>{data}</option>;
          })}
        </Form.Select>
      </div>
    </>
  );
};

export default Options;
