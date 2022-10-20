import React from 'react';
import ReportList from '../components/table/ReportList';
import Context from '../context';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import Error from '../components/error/Error';
import {baseURL} from '../config/config';

const Home = () => {

    const app_context = useContext(Context);
    const { columns, setColumns } = app_context;
    const { rows, setRows} = app_context;
    const { reports, setReports } = app_context;
    const { errorType, setErrorType } = app_context;
  
    const loadData = async() => {
      await axios.get(baseURL)
      .then(function (response) {
      setColumns(Object.keys(response.data[0]));
      setRows(response.data);
      })
      .catch(function (error) {   
        console.log(error);
        console.log(error.message);
        setErrorType(error)    
      })
      
    }
  
    const loadReports= async() => {
        await axios.get(`${baseURL}reports`)
        .then(function (response) {
            setReports(response.data.reportsAvailable)
        
        })
        .catch(function (error) {
            console.log(error);
            console.log(error.message);
            setErrorType(error)  
        })
    }
  
    useEffect(()=>{
        loadData();
        loadReports();
    }, [])


    if(rows && columns && reports) {
        return(
            <div className="homeContainer p-4">
                <ReportList />
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
export default Home