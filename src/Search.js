import React from "react";

function Search(props) {
  const { searched, onChange, onSubmit, children } = props;
  return (
    <form
      onSubmit={onSubmit}
      className="input-group mb-3 input-group-sm w-25 m-auto mt-2"
    >
      <input
        type="text"
        value={searched}
        onChange={onChange}
        className="form-control"
        placeholder="Keyword..."
        aria-label="keyword"
        aria-describedby="button-addon2"
      />
      <button
        type="submit"
        className="btn btn-outline-primary"
        id="button-addon2"
      >
        {children}
      </button>
    </form>
  );
}

export default Search;
