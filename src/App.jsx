import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      {/* <button class="btn btn-primary">로그인</button> */}

      {/* Title */}
      <div class="jumbotron text-center">
        <h1 style={{ padding: 20 }}>글쓰기에 답이 있다</h1>
        <h5 style={{ paddingBottom: 15 }}>
          독서와 글쓰기로 알아가는 삶의 진리
        </h5>
      </div>

      {/* Navigation */}
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a href="#" class="navbar-brand">
          Name
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link">
                공지사항
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                메뉴 1
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                메뉴 2
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container pt-3">
        <div class="row">
          <div class="col-sm-3">
            <h2>신경끄기의 기술</h2>
            <p>인생에서 가장 중요한 것만 남기는 힘</p>
            <img src="img/book2.jpg" style={{ maxHeight: 350 }} />
          </div>
          <div class="col-sm-3">
            <h2>역행자</h2>
            <p>돈, 시간, 운명을 거스르는 역행자로 사는 법</p>
            <img src="img/book1.jpg" style={{ maxHeight: 350 }} />
          </div>
          <div class="col-sm-3">
            <h2>역행자</h2>
            <p>돈, 시간, 운명을 거스르는 역행자로 사는 법</p>
            <img src="img/book3.jpg" style={{ maxHeight: 350 }} />
          </div>
        </div>
      </div>

      <h3>사이드 메뉴</h3>
      <p>Menu</p>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action">
          <a href="#">메뉴 1</a>
        </li>
        <li class="list-group-item list-group-item-action">
          <a href="#">메뉴 2</a>
        </li>
        <li class="list-group-item list-group-item-action">
          <a href="#">매뉴 3</a>
        </li>
      </ul>

      {/* <!-- footer --> */}
      <div class="jumbotron text-center mt-5 mb-0">
        <h3 class="text-secondary">My Blog</h3>
        <p>
          Blog is powered by <span class="text-primary">kym</span> / Designed by{" "}
          <span class="text-primary">kym</span>
        </p>
      </div>
    </>
  );
}
