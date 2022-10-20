import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Context from './context';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Header from './components/header/Header';
import NotFound from './pages/NotFound';
import { useState, useEffect } from 'react';


const App = () => {

  const [columns, setColumns] = useState();
  const [rows, setRows] = useState();
  const [reports, setReports] = useState();
  const [selectedReport, setSelectedReport] = useState();
  const [reportResult, setReportResult] = useState();
  const [data, setData] = useState();
  const [ reportColumns, setReportColumns] = useState();
  const [ errorType, setErrorType ] = useState()
 

  return (
    <Context.Provider value={{columns, setColumns, rows, setRows, reports, setReports, selectedReport, setSelectedReport, reportResult, setReportResult, data, setData, reportColumns, setReportColumns, errorType, setErrorType  }}>
      <BrowserRouter >
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/test" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
