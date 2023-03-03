import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../Theme'


const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
  return (
    <Box>
        <Typography varient='h2' color={colors.grey[100]} fontWeight="bold" sx={{mb:"5px"}}>{title}</Typography>
        <Typography varient="h5" color={colors.greenAccent[400]}>{subtitle}</Typography>
    </Box>
  )
}

export default Header