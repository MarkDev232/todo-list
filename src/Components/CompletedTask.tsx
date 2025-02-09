import React from 'react'
  import "../style/CompleteTask.css" ;

const CompletedTask = () => {
  return (
    <div className='completedtask'>
      <h1>Completed Task</h1>
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Task 1</td>
            <td>2021-08-15</td>
            <td>
              <button className="deletebtn">Delete</button>
              <button className="completebtn">Complete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CompletedTask