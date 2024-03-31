import React from 'react'
import Navbar from "./molecules/NavBar"
import Title from "./molecules/Title"
import EfficiencyTable from './Table/Efficiency/EfficiencyTable'

function EfficiencyReport() {
  return (
    <div>
      <Navbar />
      <Title />
      <EfficiencyTable />
    </div>
  )
}

export default EfficiencyReport