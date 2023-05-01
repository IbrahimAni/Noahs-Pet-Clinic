import React from 'react'
import { useEffect, useState, useRef } from 'react'
import "./styles/Loader.css"

function Loader() {

    const loadRef = useRef(null);

    useEffect(() => {
      function handlePageLoad() {
        if (loadRef.current) {
          loadRef.current.className = "loader--hidden";
          loadRef.current.addEventListener("transitionend", () => {
          loadRef.current.remove();
          }, { once: true });
        }
      }
      window.addEventListener('load', handlePageLoad)
    })
  return (
    <div className='loader' ref={loadRef}></div>
  )
}

export default Loader