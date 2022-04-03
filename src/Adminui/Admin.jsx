import React, { useState, useEffect } from 'react';
 
import MaterialTable from 'material-table'  
import axios from "axios";

function Admin() {
  const [Data, setData] = useState([]);
  useEffect(() => {
      fetchData();
  }, []);
  const fetchData = () => {
      axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then(res =>{
          setData(res.data);
      });
      console.log(Data);
  };
  const columns = [
    { title: "Name", field: "name", cellStyle: { background:"#0080" }, headerStyle: { color: "#fff" } },
    { title: "Email", field: "email" },
    { title: "Role", field: "role"},
  ]
  return (
    <div className="App">
      {/* <h1 align="center">Riyaz ItGuy</h1> */}
      <MaterialTable columns={columns} data={Data}
        editable={{
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...Data]
            updatedData[oldRow.tableData.id] = newRow
            setData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...Data]
            updatedData.splice(selectedRow.Data.id, 1)
            setData(updatedData)
            setTimeout(() => resolve(), 1000)
          })
        }}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right",  paging: true, pageSizeOptions: [2, 5, 10], pageSize: 10,
          paginationType: "stepped", showFirstLastPageButtons: true, paginationPosition: "bottom",
         actionsColumnIndex: -1, selection: true,
          headerStyle: { background: "#FFC0CB",color:"#fff"}  
        }}
        title="Students-details"/>
    </div>
  );
}

export default Admin;