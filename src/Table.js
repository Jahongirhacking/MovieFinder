import React from "react";

function Table(props) {
  const { list, onDismiss } = props;
  return (
    <div className="container">
      <table className="table table-success table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Points</th>
            <th>URL</th>
            <th>Dismissing</th>
          </tr>
        </thead>
        <tbody>
          {list.map((el) => {
            return (
              <tr key={el.objectID}>
                <td
                  style={{
                    maxWidth: "300px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {el.title}
                </td>
                <td>{el.author}</td>
                <td>{el.points}</td>
                <td
                  style={{
                    maxWidth: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <a href={el.url || null}>{el.url || "Not Given"}</a>
                </td>
                <td>
                  <button
                    onClick={(e) => onDismiss(el.objectID)}
                    className="btn btn-danger"
                  >
                    Dismiss
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
