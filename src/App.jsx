import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SideBar } from "./component/Sidebar";

export default function App() {
  return (
    <>
      <div className="row">
        {/* Title */}
        <div className="jumbotron text-center">
          <h1 style={{ padding: 20 }}>글쓰기에 답이 있다</h1>
          <h5 style={{ paddingBottom: 15 }}>
            독서와 글쓰기로 알아가는 삶의 진리
          </h5>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <a className="navbar-brand" href="#">
              {" "}
              Navbar 7{" "}
            </a>
            <div className="w-100 text-right">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#myNavbar7"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            className="collapse navbar-collapse flex-grow-1 text-right"
            id="myNavbar7"
          >
            {/* ITEM 1 */}
            <ul className="navbar-nav ms-auto flex-nowrap">
              <li className="nav-item">
                <a href="#" className="nav-link m-2 menu-item nav-active">
                  소개 페이지
                </a>
              </li>

              {/* ITEM 2 */}
              <li className="nav-item">
                <a href="#" className="nav-link m-2 menu-item nav-active">
                  로그인
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <SideBar />

      <div className="container pt-3">
        <div className="row">
          <div className="col-sm-3">
            <h2>신경끄기의 기술</h2>
            <p>인생에서 가장 중요한 것만 남기는 힘</p>
            <img src="img/book2.jpg" style={{ maxHeight: 350 }} />
          </div>
          <div className="col-sm-3">
            <h2>역행자</h2>
            <p>돈, 시간, 운명을 거스르는 역행자로 사는 법</p>
            <img src="img/book1.jpg" style={{ maxHeight: 350 }} />
          </div>
          <div className="col-sm-3">
            <h2>역행자</h2>
            <p>돈, 시간, 운명을 거스르는 역행자로 사는 법</p>
            <img src="img/book3.jpg" style={{ maxHeight: 350 }} />
          </div>
        </div>
      </div>

      {/* <!-- footer --> */}
      <div className="jumbotron text-center mt-5 mb-0">
        <h3 className="text-secondary">My Blog</h3>
        <p>
          Blog is powered by <span className="text-primary">kym</span> /
          Designed by <span className="text-primary">kym</span>
        </p>
      </div>
    </>
  );
}
