import React from 'react'
import HeaderComp from './Header'
import FooterComp from './Footer'

const Template =(props)=> {
  return (
    <div>
      <HeaderComp page={"appliedJob"} />


{/* //children */}
{props.children}

      <FooterComp />
    </div>
  )
}

export default Template