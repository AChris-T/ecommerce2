import { Box } from '@mui/system'
import React from 'react'
import Header from '../../components/Header'

const index = () => {
  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
        <Header title="DASHBOARD" subtitle="welcome to your DashBoard"/>
      </Box>
    </Box>
  )
}

export default index