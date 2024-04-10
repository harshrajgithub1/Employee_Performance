"use client";
import React from "react";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import AdminLeft from "./AdminLeft"

const Admin = () => {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Total Employee", "Total Team", "Total Team Leader's"],
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
      
<AdminLeft/>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Admin Dashboard</span>
          </div>

          <div className="profile-details">
            <img src="/assets/img/avtarpic.jpg" alt="" />
            <span className="admin_name">Infoicon Admin</span>
            <i className="bx bx-chevron-down"></i>
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Team</div>
                <div className="number">8</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Till yesterday</span>
                </div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Employee</div>
                <div className="number">150</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Till yesterday</span>
                </div>
              </div>
              <i className="bx bxs-cart-add cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Team Leader's</div>
                <div className="number">8</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Till yesterday</span>
                </div>
              </div>
              <i className="bx bx-cart cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Return</div>
                <div className="number">11,086</div>
                <div className="indicator">
                  <i className="bx bx-down-arrow-alt down"></i>
                  <span className="text">Down From Today</span>
                </div>
              </div>
              <i className="bx bxs-cart-download cart four"></i>
            </div>
          </div>
          <div className="container mt-5 w-50 h-50">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                    <canvas id="myChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
