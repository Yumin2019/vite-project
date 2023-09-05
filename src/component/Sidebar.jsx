import "../css/App.css";

export function SideBar() {
  const subtitle = "side-bar-ul-subtitle";
  const subtitle_li = "side-bar-ul-subtitle-li";

  return (
    <>
      {/* sidebar */}
      <aside className="side-bar">
        <ul className="side-bar-ul">
          <li className="side-bar-ul container">
            <a className={subtitle} href="#">
              test
            </a>
            <ul>
              <li>
                <a className={subtitle_li} href="#">
                  text1
                </a>
              </li>
              <li>
                <a className={subtitle_li} href="#">
                  text1
                </a>
              </li>
            </ul>
          </li>
          <li className="side-bar-ul container">
            <a className={subtitle} href="#">
              menu2
            </a>
            <ul>
              <li>
                <a className={subtitle_li} href="#">
                  text1
                </a>
              </li>
              <li>
                <a className={subtitle_li} href="#">
                  text2
                </a>
              </li>
              <li>
                <a className={subtitle_li} href="#">
                  text3(10)
                </a>
              </li>
              <li>
                <a className={subtitle_li} href="#">
                  text4
                </a>
              </li>
            </ul>
          </li>
          <li className="side-bar-ul container">
            <a className={subtitle} href="#">
              menu3
            </a>
            <ul>
              <li>
                <a className={subtitle_li} href="#">
                  text1
                </a>
              </li>
              <li>
                <a className={subtitle_li} href="#">
                  text2
                </a>
              </li>
              <li>
                <a className={subtitle_li} href="#">
                  text3
                </a>
              </li>
              <li>
                <a className={subtitle_li} href="#">
                  text4
                </a>
              </li>
            </ul>
          </li>
          <li className="side-bar-ul container">
            <a className={subtitle} href="#">
              menu4
            </a>
            <ul>
              <li>
                <a className={subtitle_li} href="#">
                  text1
                </a>
              </li>
              <li>
                <a className={subtitle_li} href="#">
                  text2
                </a>
              </li>
              <li>
                <a className={subtitle_li} href="#">
                  text3
                </a>
              </li>
              <li>
                <a className={subtitle_li} href="#">
                  text4
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}
