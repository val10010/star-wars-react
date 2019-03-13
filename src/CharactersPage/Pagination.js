import React from 'react';

const Pagination = ({countPage, currentPage, handleClick, handleChangePage}) => {
  let quantityPage = Math.round(countPage/10);

    const CreatePagination = () => {
      let button=[];
      for(let i=1; i<=quantityPage; i++){
          button.push(i);
      }
      return (
        <>
        {button.map(item => (
          <button 
            key={item} 
            className={currentPage === item ? 'currentPage' : 'pagination-button'} 
            onClick={() => handleClick(item)}
          >
            {item}
          </button>))}
        </>
        );
    } 
  return (
    <div className="pagination" >
        <button 
          className={currentPage === 1 ? "hide" : "previous"}
          onClick={(event) => handleChangePage(event.target.className)}
        >
          &lt; 
        </button>
        <CreatePagination />
        <button 
          className={currentPage === quantityPage ? "hide" : "next"}
          onClick={(event) => handleChangePage(event.target.className)}>
           &gt; 
        </button>
    </div>
  )
}

export default Pagination;