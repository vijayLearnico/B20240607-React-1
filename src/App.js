import React, { useState } from 'react';
import StudentForm from "./components/StudentForm";
import TableCrud from "./components/TableCrud";

function App() {
  const [data, setData] = useState([]);
  const [editData,setEditData] = useState(null);
  const [editIndex,setEditIndex] = useState(null);


  const deleteFunc = (index) => {
    // Create a new copy of the data array
    const copyOfOgData = [...data];
    // Remove the item at the specified index
    copyOfOgData.splice(index, 1);
    // Update the state with the modified copy
    setData(copyOfOgData);
  };

  const editFunc = (index) => {
    setEditIndex(index);
    setEditData(data[index]);
  };

  return (
    <div>
      <StudentForm 
       setData={setData}
       editData={editData}
       editIndex={editIndex}
       setEditIndex={setEditIndex}
       setEditData={setEditData}
      />
      <TableCrud 
       data={data}
       deleteFunc={deleteFunc}
       editFunc={editFunc}
      />
    </div>
  );
}

export default App;
