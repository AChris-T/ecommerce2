import {Box, useTheme, Typography} from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../Theme"


const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px"> 
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quidem nesciunt quis sequi
                    possimus aspernatur fuga iure soluta veniam itaque officia recusandae, dignissimos voluptates 
                    quasi adipisci. Delectus molestias dolor ratione?
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quidem nesciunt quis sequi
                    possimus aspernatur fuga iure soluta veniam itaque officia recusandae, dignissimos voluptates 
                    quasi adipisci. Delectus molestias dolor ratione?
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                   random question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quidem nesciunt quis sequi
                    possimus aspernatur fuga iure soluta veniam itaque officia recusandae, dignissimos voluptates 
                    quasi adipisci. Delectus molestias dolor ratione?
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Favourite question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quidem nesciunt quis sequi
                    possimus aspernatur fuga iure soluta veniam itaque officia recusandae, dignissimos voluptates 
                    quasi adipisci. Delectus molestias dolor ratione?
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quidem nesciunt quis sequi
                    possimus aspernatur fuga iure soluta veniam itaque officia recusandae, dignissimos voluptates 
                    quasi adipisci. Delectus molestias dolor ratione?
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FAQ