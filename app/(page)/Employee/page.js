"use client";
import React from "react";
import { useEffect } from "react";
import Chart from "chart.js/auto";
const Employee = () => {
    useEffect(() => {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Dev Performance", "Behaviour", "Punctuality"],
            datasets: [
              {
                data: [150, 8, 8],
                borderColor: ["#3cba9f", "#ffa500", "#c45850"],
                backgroundColor: [
                  "rgb(60,186,159,0.1)",
                  "rgb(255,165,0,0.1)",
                  "rgb(196,88,80,0.1)",
                ],
                borderWidth: 2,
              },
            ],
          },
          options: {
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          }
          
        });
        return () => {
          myChart.destroy();
        };
      }, []);
  return (
    <>
  <div className="container-block container">
    <p className="text-blk team-head-text">Roger Lubin</p>
    
    <div className="row">
      <div className="col-md-6">
        <div className="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
          <div className="team-card">
            <div className="team-img-wrapper">
              <img
                className="team-img"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg"
                alt="Employee Image"
              />
            </div>
            <div className="team-card-content">
              <p className="text-blk name">Roger Lubin</p>
              <p className="text-blk position">
                Next.js Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <label htmlFor="name">Name:</label>
        <p id="name">John Doe</p>
      </div>
      <div className="profile-info">
        <label htmlFor="email">Email:</label>
        <p id="email">john@example.com</p>
      </div>
      <div className="profile-info">
        <label htmlFor="role">Role:</label>
        <p id="role">Software Engineer</p>
      </div>
      <div className="profile-info">
        <label htmlFor="reporting-to">Reporting To:</label>
        <p id="reporting-to">Jane Smith</p>
      </div>
    </div>
  </div>
</>
  );
};

export default Employee;
