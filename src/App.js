import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { ColorModeContext, useMode } from './theme';
import Topbar from './layout/global/Topbar';
import Sidebar from './layout/global/Sidebar';
import Dashboard from './layout/dashboard';
import Team from './layout/team';
import Invoices from './layout/invoices';
import Contacts from './layout/contacts';
import Form from './layout/form';
// import Bar from './layout/bar';
// import Line from './layout/line';
// import Pie from './layout/pie';
import FAQ from './layout/faq';
// import Geography from './layout/geography';
import Calender from './layout/calender/calender';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className='app'>
            <Sidebar />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/faq" element={<FAQ />} />

                {/* 
                
                <Route path="/bar" element={<Bar/>} />
                <Route path="/pie" element={<Pie/>} />
                <Route path="/line" element={<Line/>} />
                <Route path="/geography" element={<Geography/>} />
               */}
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
