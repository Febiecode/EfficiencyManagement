'use client'
import React from 'react';


const ProcessTable = ({ tableData }) => {

  return (

    <>
      <div className='flex justify-center'>
        <div className='overflow-x-auto'>

          <div className="rounded-md border">

          <table classname="table-auto">
            <thead>
              <tr>
                <th>Part ID</th>
                <th>Process Description</th>
                <th>Per PC Time</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Created By</th>
                <th>Updated Date</th>
                <th>Updated By</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.processId}</td>
                    <td>{data.processDescription}</td>
                    <td>{data.perPcTime}</td>
                    <td>{data.status}</td>
                    <td>{data.createdDate}</td>
                    <td>{data.createdBy}</td>
                    <td>{data.updatedDate}</td>
                    <td>{data.updatedBy}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>

            </tfoot>

          </table>
          </div>
          
        </div>
      </div>


      <style jsx>{`
                /* CSS for table */
                
                
                /* CSS for table header */
                th {
                  background-color: #ffffff; /* Header background color */
                  color: #78716C; /* Header text color */
                  padding: 8px;
                  text-align: left;
                  font-size: 14px;
                  font-weight: 500;
                  border-bottom: 1px solid #ddd;
                }
                

                /* CSS for table cell */
                tr:hover{
                  background-color: #FAFAF9;
                }
                td {
                  color: #0C0A09;
                  font-weight: 400;
                  font-size: 14px;
                  padding: 8px;
                  text-align: left;
                  border-bottom: 1px solid #ddd;
                }
                
            `}</style>




      {/* <table className="table">
        <thead>
          <tr>
            <th>Part ID</th>
            <th>Process Description</th>
            <th>Per PC Time</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Created By</th>
            <th>Updated Date</th>
            <th>Updated By</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.processId}</td>
                <td>{data.processDescription}</td>
                <td>{data.perPcTime}</td>
                <td>{data.status}</td>
                <td>{data.createdDate}</td>
                <td>{data.createdBy}</td>
                <td>{data.updatedDate}</td>
                <td>{data.updatedBy}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </>









  );
}

export default ProcessTable;




