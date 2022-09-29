import React from 'react';
import './table.scss';
import Context from '../../context';
import { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const ReportResults = () => {
    const app_context = useContext(Context);
    const { data, setData } = app_context
    const { reportColumns, setReportColumns } = app_context
    const [ sorted , setSorted] = useState(false);
    const [ sortedOffice , setSortedOffice] = useState(false);
    const [ sortedCharge , setSortedCharge] = useState(false);
    const [ sortedAddress, setSortedAddress] = useState(false);
    const [ sortedBytes, setsortedBytes] = useState(false);

    const sortRows = (header) =>{
        
        if(header === 'accountId') {
            setSorted(!sorted)
        }else if(header === 'officeLocation'){
            setSortedOffice(!sortedOffice)
        }else if (header === 'chargesEuro'){
            setSortedCharge(!sortedCharge);
        }else if (header === 'devicePhysicalAddress'){
            setSortedAddress(!sortedAddress);
        }else if (header === 'usageBytes'){
            setsortedBytes(!sortedBytes)
        }
      }

    useEffect(()=>{
    function compare(  ) {
        if(sorted === false) {
        const rows2 =[...data].sort((a, b) =>
            a[0] < b[0] ? -1 : 1
        );
        setData(rows2)  
        }else if(sorted === true){
        const rows2 = [...data].sort((a, b) =>
            a[0] > b[0] ? -1 : 1
        );
        setData(rows2)
        }
    }
    data.sort( compare );
    },[sorted]);

    useEffect(()=>{
    function compare(  ) {
        if(sortedAddress === false) {
        const rows2 =[...data].sort((a, b) =>
            a[0] < b[0] ? -1 : 1
        );
        setData(rows2)  
        }else if(sortedAddress === true){
        const rows2 = [...data].sort((a, b) =>
            a[0] > b[0] ? -1 : 1
        );
        setData(rows2)
        }
    }
    data.sort( compare );
    },[sortedAddress])

    useEffect(()=>{
    function compare(  ) {
        if(sortedOffice === false) {
        const rows3 =[...data].sort((a, b) =>
            a[1] < b[1] ? -1 : 1
        );
        setData(rows3)  
        }else if(sortedOffice === true){
        const rows3 = [...data].sort((a, b) =>
            a[1] > b[1] ? -1 : 1
        );
        setData(rows3)
        }
    }
    data.sort( compare );
    },[sortedOffice])

    useEffect(()=>{
    function compare(  ) {
        if(sortedBytes === false) {
            
        const rows3 =[...data].sort((a, b) =>
            a[1] < b[1] ? -1 : 1
        );
        setData(rows3)  
        }else if(sortedBytes === true){
        const rows3 = [...data].sort((a, b) =>
            a[1] > b[1] ? -1 : 1
        );
        setData(rows3)
        }
    }
    data.sort( compare );
    },[sortedBytes])

    useEffect(()=>{
    function compare(  ) {
        if(sortedCharge === false) {
        const rows4 =[...data].sort((a, b) =>
            a[2] < b[2] ? -1 : 1
        );
        setData(rows4)  
        }else if(sortedCharge === true){
        const rows4 = [...data].sort((a, b) =>
            a[2] > b[2] ? -1 : 1
        );
        setData(rows4)
        }
    }
    data.sort( compare );
    },[sortedCharge])


    if(reportColumns && data){
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {reportColumns.map((header, index) => (
                            <th key={index} >{header}
                            <span><FontAwesomeIcon icon={faSort} value={header} onClick={sortRows.bind(this, header)}/></span></th>
                    
                        ))}
                    </tr>
                
                </thead>
                <tbody>
                    {data.map((info, index) => (
                        <tr key={index}>
                            {info.map((item, itemIndex) =>(
                                <td key={itemIndex}>{item}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
 
}

export default ReportResults