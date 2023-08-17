import React from "react";

const Pagination = ({ goToNextPage, goToPreviousPage, previousPage }) => {
  return (
    <div className="button-parent">
      {goToPreviousPage && (
        <button className="pagination-button" onClick={goToPreviousPage}>
          Previous
        </button>
      )}
      {goToNextPage && (
        <button className="pagination-button" onClick={goToNextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
