import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../main.css'
import { LinkContainer } from 'react-router-bootstrap'
const Paginate = ({ pages, page,isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
             
              !isAdmin
              ? keyword
                ? `/dsearch/${keyword}/dpage/${x + 1}`
                : `/dpage/${x + 1}`
              : `/ProjectListScreen/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate