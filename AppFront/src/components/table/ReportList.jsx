import React, { useEffect, useState } from 'react';
import './table.scss';
import Context from '../../context';
import { useContext} from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';


const ReportList = () =>{
  const app_context = useContext(Context);
  const { columns, setColumns } = app_context;
  const { rows, setRows} = app_context;
  const { reports, setReports } = app_context;
  const { selectedReport, setSelectedReport } = app_context;
  const [ sorted , setSorted] = useState(false);
  const [ sortedDesc , setSortedDesc] = useState(false);
  const navigate = useNavigate()


  const sortRows = (header) =>{
    if(header === 'name') {
      setSorted(!sorted)
    }else {
      setSortedDesc(!sortedDesc)
    }
  }

  const selecterRow = (index) =>{
    const selectedButton = document.getElementById('period'+index).value
    setSelectedReport(selectedButton)
    navigate('/reports');
    
  }

  useEffect(()=>{
    function compare(  ) {
      if(sorted === false) {
        const rows2 =[...rows].sort((a, b) =>
          a.name < b.name ? -1 : 1
        );
        setRows(rows2)  
      }else if(sorted === true){
        const rows2 = [...rows].sort((a, b) =>
          a.name > b.name ? -1 : 1
        );
        setRows(rows2)
      }
    }
    rows.sort( compare );
  },[sorted])

  useEffect(()=>{
    function compare(  ) {
      if(sortedDesc === false) {
        const rows3 =[...rows].sort((a, b) =>
          a.description < b.description ? -1 : 1
        );
        setRows(rows3)  
      }else if(sortedDesc === true){
        const rows3 = [...rows].sort((a, b) =>
          a.description > b.description ? -1 : 1
        );
        setRows(rows3)
      }
    }
    rows.sort( compare );
  },[sortedDesc])


    return (
      <Table striped bordered hover >
        <thead>
          <tr>
          {columns.map((header, index) => (
            header !== 'modifiedDate'?header !== 'id'?<th key={index} >{header}
            <span><FontAwesomeIcon icon={faSort} value={header} onClick={sortRows.bind(this, header)} className='icon'/></span></th>:<th key={index}>{header}
            </th>:null
          ))}
          <th>billing period</th>
          <th>action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr>
              <td key={`id${index}`}>{row.id}</td> 
              <td key={`name${index}`}>{row.name}</td>
              <td key={`description${index}`}>{row.description}</td>
              <td>
              <select name="period" id={"period"+index}>
              {reports.map((report, indx) => (
                report.startsWith(row.id,'-')?<option key={report} value={report}>{report.substring(report.indexOf('-')+1, report.indexOf('.'))}</option>:null
              ))}

              </select>
              </td>
              <td>
              <Button as="a" variant="success" value={index} onClick={selecterRow.bind(this, index)}>
                View
              </Button>
              </td>
              <td>
              
              </td>

            </tr>
          ))}   
        </tbody>
      </Table>
    ) 

}

export default ReportList