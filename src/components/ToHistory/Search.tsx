import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Wyszukaj gatunek..."
        className="me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="primary" type="submit">
        <Icon.Search />
      </Button>
    </Form>
  );
};

export default Search;
