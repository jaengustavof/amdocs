import React, { useEffect} from 'react'
import Context from '../context';
import { useContext} from 'react';
import axios from 'axios';
import ReportResults from '../components/table/ReportResults';
import Error from '../components/error/Error';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { baseURL } from '../config/config';

const Reports = () => {
  const app_context = useContext(Context);
  const { selectedReport} = app_context;
  const { data, setData } = app_context
  const { reportColumns, setReportColumns } = app_context;
  const { errorType, setErrorType } = app_context;


  const loadSelectedReport = async() =>{
    await axios.post(`${baseURL}reports/request`, {report: selectedReport} )
    .then(function (response) {
      console.log(response)
      setReportColumns(response.data.response.columns)
      setData(response.data.response.data)
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.message);
      setErrorType(error)  
    })
  }

  useEffect(()=>{
    loadSelectedReport();
  },[]);


  if(data && reportColumns){
    return (
      <div className='w-100 h-100 p-4'>
        <Link to="/" ><Button variant="outline-success">Back to Content</Button></Link> 
        <div className="homeContainer p-4">
          <ReportResults/>
        </div>
      </div>   
    )
  }else if(errorType){
    return (
        <div className="homeContainer p-4">
            <Error />
        </div>
    )
}

}

export default Reports