import "../css/App.css";

const SideBar = ({ menu }) => {
  return (
    <>
      <aside className="side-bar">
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
      </aside>
    </>
  );
};

export default SideBar;
