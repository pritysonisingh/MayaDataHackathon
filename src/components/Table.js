import React, { useState } from "react";
import deleteIcon from "./../assests/delete.png";
import "./Table.css";
import jsonData from "./../data.json";
const Table = ({ searchText }) => {
  const [data, setData] = useState(jsonData);
  const [values, setValues] = useState({});
  const handleAdd = () => {
    data.push(values);
    setData(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleDelete = (e) => {
    setData(data.filter((item) => item.slno !== e.target.value));
    console.log(e.target);
  };

  return (
    <div className="card">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Meeting Name</th>
              <th>No. of people attending</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((val) => {
                if (searchText === "") {
                  return val;
                } else if (
                  val.meeting_name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.slno}</td>
                    <td>{row.meeting_name}</td>
                    <td>{row.people_attending}</td>
                    <td>{row.date}</td>
                    <td>{row.start_time}</td>
                    <td>{row.end_time}</td>
                    <td>
                      <button onClick={(e) => handleDelete(e)} value={row.slno}>
                        {/* <img src={deleteIcon} alt="delete" value={row.slno} /> */}
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}

            <tr>
                <td>{data[data.length-1].slno+1}</td>
              <td>
                <input
                  type="text"
                  name="meeting_name"
                  value={values.meeting_name}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="people_attending"
                  value={values.people_attending}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="date"
                  name="date"
                  value={values.date}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="start_time"
                  value={values.start_time}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="time"
                  name="end_time"
                  value={values.end_time}
                  onChange={handleInputChange}
                />
              </td>
              <button type="submit" onClick={handleAdd}>
                Add
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
