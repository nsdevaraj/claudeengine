import React, { useState, useEffect } from 'react';
import ReactDataGrid from 'react-data-grid';
import axios from 'axios';

const Spreadsheet = () => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/spreadsheet');
      setRows(response.data.rows);
      setColumns(response.data.columns);
    } catch (error) {
      console.error('Error fetching spreadsheet data:', error);
    }
  };

  const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    const newRows = rows.slice();
    for (let i = fromRow; i <= toRow; i++) {
      newRows[i] = { ...newRows[i], ...updated };
    }
    setRows(newRows);
    // Here you would typically send the updated data to the server
  };

  return (
    <div className="spreadsheet">
      <h2>Rowing Data</h2>
      <ReactDataGrid
        columns={columns}
        rows={rows}
        onGridRowsUpdated={onGridRowsUpdated}
        enableCellSelect={true}
      />
    </div>
  );
};

export default Spreadsheet;