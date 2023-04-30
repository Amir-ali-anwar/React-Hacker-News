import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, nbPages, page, handlePages } = useGlobalContext()
  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={()=>handlePages('dec')}>
        prev
      </button>
      <p>{page +1} of {nbPages}</p>
      <button disabled={isLoading} onClick={()=>handlePages('inc')}>
        next
      </button>
    </div>
  )
}

export default Buttons
