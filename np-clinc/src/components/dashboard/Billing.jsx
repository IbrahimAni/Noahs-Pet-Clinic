import React from 'react'
import "../styles/dashboard/Billing.css"

function Billing() {
  return (
    <div className='billing-container'>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }}>
            <thead>
                <tr>
                <th>Date</th>
                <th>Appointment Title</th>
                <th>Pet</th>
                <th>Status</th>
                <th>($) Bill</th>
                <th>Payment Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>10/01/2022</td>
                <td>Vaccination</td>
                <td>Charlie</td>
                <td>Completed</td>
                <td>$50</td>
                <td>Paid</td>
                </tr>
                <tr>
                <td>10/05/2022</td>
                <td>Checkup</td>
                <td>Buddy</td>
                <td>Scheduled</td>
                <td>$75</td>
                <td>Not paid</td>
                </tr>
                <tr>
                <td>10/10/2022</td>
                <td>Surgery</td>
                <td>Max</td>
                <td>Canceled</td>
                <td>$500</td>
                <td>N/A</td>
                </tr>
            </tbody>
        </table> 
        <div className='genrate-receipt-btn'>
            <button>Generate Receipt</button>
        </div>
    </div>
  )
}

export default Billing