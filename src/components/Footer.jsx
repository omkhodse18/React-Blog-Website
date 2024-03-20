import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Footer() {

    const {page,pageHandler,totalPages} = useContext(AppContext) 

  return (
    <div>
        {
            page > 1 
            &&
            <button onClick={()=>pageHandler(page-1)}>
                Previous
            </button>
        }

        {
            page < totalPages
            &&
            <button onClick={()=>pageHandler(page+1)}>
                Next
            </button>
        }

        {
            `Page ${page} of ${totalPages}`
        }
    </div>
  )
}

export default Footer
