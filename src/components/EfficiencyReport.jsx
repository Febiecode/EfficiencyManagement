import React from 'react'
import NavBar from './Navigation/NavBar'
import EfficiencyReportTable from "./Table/Efficiency/EfficiencyTable";

function EfficiencyReport() {
  return (
    <div>
        <NavBar />
        <EfficiencyReportTable />
    </div>
  )
}

export default EfficiencyReport