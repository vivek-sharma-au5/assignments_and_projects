import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav aria-label='Page navigation example '>
      <ul className='pagination pg-blue ml-5'>
        {pageNumber.map((number) => (
          <li className='page-item' key={number}>
            <a href='!#' onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
