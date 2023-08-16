import React from 'react'
import { useLocation } from 'react-router-dom'
import InformationFood from '../organism/InformationFood/InformationFood.organism'
import TestNotification from '../organism/TestNotification/TestNotification.organism'

function DetailFood() {
   
  return (
    <div>
      <InformationFood />
      <TestNotification />
    </div>
  )
}

export default DetailFood