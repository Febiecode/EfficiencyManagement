import React from 'react';


const ProcessTable = ({ tableData }) => {

  return (

    <>
      <div className='flex justify-center'>
        <div className='overflow-x-auto'>
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


      <style jsx>{`
                /* CSS for table */
                button{
                    margin: 20px 5px;
                    padding:5px 20px;
                    background-color: #ddd;
                    font-size:16px;
                    border-radius: 5px;
                    font-weight: 500;
                }
                button:hover{
                    background-color:#E15465;
                    color: #fff;
                    font-size:16px;
                    border-radius: 5px;
                    font-weight: 500;
                }
                
                /* CSS for table header */
                th {
                  background-color: #E15465; /* Header background color */
                  color: white; /* Header text color */
                  padding: 8px;
                  text-align: center;
                  position: sticky;
                }
                
                /* CSS for table rows */
                // tr:nth-child(even) {
                //   background-color: #f2f2f2;
                // }
                
                /* CSS for table cell */
                td {
                  padding: 8px;
                  text-align: center;
                  border: 2px solid #ddd;
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




