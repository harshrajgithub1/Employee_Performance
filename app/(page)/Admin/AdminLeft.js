"use client";
import React from 'react'

const AdminLeft = () => {
  return (
    <>
       <div className="sidebar">
        <div className="logo-details">
          <img src="/assets/img/infoiconlogo.png" alt="Logo" className="logo_image" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/Admin" className="active">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>

          <li>
            <a href="/Team">
              <i className="bx bx-message"></i>
              <span className="links_name">Team</span>
            </a>
          </li>

          <li className="log_out">
            <a href="/login">
              <i className="bx bx-log-out"></i>
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AdminLeft
