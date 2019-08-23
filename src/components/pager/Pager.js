import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'react-router-dom';

function Pager({ pageCount, currentPage, pageClicker }){
  let disabled1 = false;
  let disabled2 = false;
  if(currentPage === 1){
    disabled1 = true;
  }
  if(currentPage === pageCount || pageCount <= 1){
    disabled2 = true;
  }

  // const arr = [...Array(pageCount).keys()];
  // const pages = arr.map(page => {
  //   if(page === currentPage){
  //     return(
  //       <div key={page} >
  //         <h2 style={{ 'fontStyle': 'italic' }} >{page}</h2>
  //       </div>
  //     );
  //   }
  //   return(
  //     <div key={page}>
  //       <h2>{page}</h2>
  //     </div>
  //   );

  // });
  
  return(
    <section>
      <button name='Previous' onClick={() => pageClicker(-1)} disabled={disabled1}>👈</button>
      {/* {pages} */}
      <button name='Next' onClick={() => pageClicker(1)} disabled={disabled2}>👉</button>
    </section>
  );
}

Pager.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageClicker: PropTypes.func.isRequired
};

export default Pager;

{/* <Link to={`${location}${page}`}>
  <h2>{1}</h2>
  <ListItem name={item[name]} />
</Link> */}
