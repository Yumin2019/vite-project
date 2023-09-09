import "../css/App.css";

const SideBar = ({ menu }) => {
  return (
    <>
      <div className="side-bar">
        <div className="profile-img-wrapper" style={{ margin: "5px 0px" }}>
          <img src="img/book3.jpg" />
        </div>
        <div style={{ marginLeft: "4px", marginTop: "8px" }}>
          <div style={{ fontWeight: "bold", fontSize: 16 }}>김유민</div>
          <h6 style={{ color: "grey", fontSize: 14 }}>richyumin</h6>

          <p>안녕하세요. 글쓰기에 답이 있다 블로그입니다.</p>
        </div>

        <div className="side-bar-div">
          <ul className="side-bar-ul">
            {/* 상단 메뉴 */}
            {menu.subtitles.data.map((value, index) => {
              return (
                <li className="side-bar-ul container" key={index}>
                  <a className={"side-bar-ul-subtitle"} href="#">
                    {value.title}
                  </a>
                  <ul>
                    {/* 하단 메뉴 */}
                    {value.menus.map((name, index) => {
                      return (
                        <li key={index}>
                          <a className="side-bar-ul-subtitle-li">name</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
