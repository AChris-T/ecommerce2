import {ColorModeContext, useMode} from "./Theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar"
import Dashboard from "./scenes/dashboard"
import Sidebar from "./scenes/global/Sidebar"
import { Route, Routes } from "react-router-dom";
import Team from "./scenes/team/Index"
import Invoices from "./scenes/invoices/Index"
import Contacts from "./scenes/contacts/Index"
import Form from "./scenes/form/Index"
import Calendar from "./scenes/calendar/Index";
import FAQ from "./scenes/faq/Index"


// import Bar from "./scenes/bar"
// import Line from "./scenes/line"
// import Pie from "./scenes/pie"
// import Geography from "./scenes/geography"



function App() { 
  const [theme,colorMode] = useMode();

  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className="app">
        <Sidebar/>
      <main className="content">
        <Topbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/invoices' element={<Invoices/>}/>
          <Route path='/form' element={<Form />}/>
          <Route path="./calenda" element={<Calendar/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          {/*<Route path='/bar' element={<Bar/>}/>
          <Route path='/pie' element={<Pie/>} />
          <Route path='/line' element={<Line/>}/>
          <Route path='/geography' element={<Geography/>}/>*/}
          <Route path='/calendar' element={<Calendar/>}/>
          
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
