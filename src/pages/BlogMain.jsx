import "bootstrap/dist/css/bootstrap.min.css";
import FrontImage from "./../component/FrontImage";
import SideBar from "./../component/Sidebar";
import { Link } from "react-router-dom";

const BlogMain = () => {
  // 더미 데이터
  const config = {
    // Config로 가져와야 할 정보
    // 제목
    // 하단 문구
    // 좌측 메뉴
    // 이미지와 텍스트 (최대 3개)
    title: "글쓰기에 답이 있다",
    footerText: "Created by yumin kim",
    menu: {
      subtitles: {
        count: 3,
        data: [
          {
            id: 1,
            title: "title 1",
            menus: ["menu 1", "menu2"],
          },
          {
            id: 2,
            title: "title 2",
            menus: ["menu 1", "menu2"],
          },
          {
            id: 3,
            title: "title 3",
            menus: ["menu 1", "menu2"],
          },
        ],
      },
    },
    frontImages: {
      count: 3,
      data: [
        {
          id: 1,
          title: "역행자",
          text: "돈, 시간, 운명을 거스르는 역행자로 사는 법",
          src: "img/book1.jpg",
        },
        {
          id: 2,
          title: "신경끄기의 기술",
          text: "인생에서 가장 중요한 것만 남기는 힘",
          src: "img/book2.jpg",
        },
        {
          id: 3,
          title: "미치지 않고서야",
          text: "새로운 시대, 일하기 혁명",
          src: "img/book3.jpg",
        },
      ],
    },
  };

  return (
    <>
      {/* 상단 메뉴 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <a className="navbar-brand" style={{ fontSize: 24 }} href="#">
              {config.title}
            </a>
            <div className="w-100 text-right"></div>
          </div>
          <div
            className="collapse navbar-collapse flex-grow-1 text-right"
            id="myNavbar7"
          >
            {/* 상단 우측 버튼 */}
            <ul className="navbar-nav ms-auto flex-nowrap">
              <li className="nav-item">
                <Link
                  to={"/editConfig"}
                  className="nav-link m-2 menu-item nav-active"
                >
                  블로그 편집
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"/login"}
                  className="nav-link m-2 menu-item nav-active"
                >
                  로그인
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"/register"}
                  className="nav-link m-2 menu-item nav-active"
                >
                  회원가입
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 좌측 사이드바 */}
      <SideBar menu={config.menu} />

      <div
        className="list-group"
        style={{ marginTop: 5, marginLeft: 2, marginRight: 2, maxWidth: 800 }}
      >
        <div className="d-flex w-100 justify-content-between">
          <h6 className="text-muted">글 제목</h6>
          <small className="text-muted">작성일</small>
        </div>
      </div>

      <div className="list-group" style={{ marginTop: 5, maxWidth: 800 }}>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">List group item heading (1)</h6>
            <small className="text-muted">2023-09-01</small>
          </div>
        </a>

        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">List group item heading (1)</h6>
            <small className="text-muted">2023-09-01</small>
          </div>
        </a>

        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">List group item heading (1)</h6>
            <small className="text-muted">2023-09-01</small>
          </div>
        </a>

        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">List group item heading (1)</h6>
            <small className="text-muted">2023-09-01</small>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">List group item heading (1)</h6>
            <small className="text-muted">2023-09-01</small>
          </div>
        </a>
      </div>

      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" className="active">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>

      <div className="container pt-3">
        <div className="row">
          {config.frontImages.data.map((v) => {
            return (
              <FrontImage
                key={v.id}
                title={v.title}
                content={v.text}
                src={v.src}
              />
            );
          })}
        </div>
      </div>

      {/* <!-- footer --> */}
      <div
        className="jumbotron text-center mt-5 mb-0"
        style={{
          paddingTop: 10,
          backgroundColor: "white",
          borderTop: `0.5px solid grey`,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <h4 className="text-secondary">{config.title}</h4>
        <h6 style={{ fontWeight: "bold" }}>{config.footerText}</h6>
      </div>
    </>
  );
};

export default BlogMain;
