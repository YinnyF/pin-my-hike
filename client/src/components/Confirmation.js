import '../styles/App.css'
import React from 'react';

export const Confirmation = ({ confirm, setMarkers, toggle }) => {
  const closeConfirm = () => {
    setMarkers([])
  }

  return (
    <body>
      <div className ='confirmation'>
        <h2>Are you sure?</h2>
        <div>
          <button onClick={confirm}  onChange={closeConfirm}>Yes</button>
          <button onChange={toggle} onClick={closeConfirm}>No</button>
        </div>
      </div>
    </body>
  )
}