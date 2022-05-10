import React, { useState } from 'react'


const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/project')
    }
  }

  return (
    <form onSubmit={submitHandler} inline>
      <input style={{ width: "20%"}}
       
       type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search projects...'
        className='mr-sm-2 ml-sm-5'
      ></input>
      <button type='submit' variant='outline-success' className="main-btn">
        Search
      </button>
    </form>
  )
}

export default SearchBox