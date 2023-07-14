import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline="true" className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="p-sm-2"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="ms-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
