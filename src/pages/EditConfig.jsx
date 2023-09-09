import Form from "react-bootstrap/Form";
import "../css/App.css";
import { useState } from "react";
import AddFrontImage from "./../component/AddFrontImage";
import BootModal from "../component/BootModal";

const EditConfig = () => {
  console.log("LoginForm");

  const [bookList, setBookList] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const [menu, setMenu] = useState([
    { id: "1", parentId: "null", name: "Menu1", children: [] },
    { id: "2", parentId: "null", name: "Menu2", children: [] },
    {
      id: "3",
      parentId: "null",
      name: "Menu3",
      children: [
        { id: "4", parentId: "3", name: "A" },
        { id: "5", parentId: "3", name: "B" },
      ],
    },
  ]);

  const AddButtonClicked = () => {
    if (bookList.length >= 3) {
      setModalShow(true);
      return;
    }
    const list = [...bookList, <AddFrontImage key={bookList.length} />];
    setBookList(list);
  };

  function Node({ node, style, dragHandle }) {
    /* This node instance can do many things. See the API reference. */
    return (
      <div style={style} ref={dragHandle} onClick={() => node.toggle()}>
        {node.isLeaf ? "•" : "📂"} {node.data.name}
      </div>
    );
  }

  /* Handle the data modifications outside the tree component */
  const onCreate = ({ parentId, index, type }) => {};
  const onRename = ({ id, name }) => {};
  const onMove = ({ dragIds, parentId, index }) => {
    console.log("dragId " + dragIds + " parentId " + parentId + " " + index);
    // 처리한 요소를 찾는다.
  };
  const onDelete = ({ ids }) => {};

  // 데이터를 가져오는 상황에서 현재 개수도 알아와야 한다.
  // 또한 상위 폴더와 하위 뎁스로 나누는 것도 가능해야 한다.
  // 이러한 변경사항을 확인을 누를 떄 처리할 수 있어야 한다.
  // 메뉴 이름을 바꾸는 경우에 어떻게 처리할 지
  // 메뉴 자체를 삭제 하는 경우
  // 추가하는 경우

  // 계층이 변화하는 경우, 아이콘을 바꾼다.

  return (
    <div style={{ width: 500, margin: `0 auto`, padding: `50px 0px` }}>
      <h1>블로그 편집</h1>
      <div style={{ marginTop: 25 }} />
      {/* 블로그 이름 */}
      <Form.Label htmlFor="inputTitle">Blog Name</Form.Label>
      <Form.Control type="email" id="inputEmail" />
      <div style={{ marginTop: 5 }} />
      <Form.Text muted>블로그 이름을 입력해주세요.</Form.Text>
      <div style={{ marginTop: 15 }} />
      {/* 하단 Fotter 텍스트*/}
      <Form.Label htmlFor="inputPassword">Footer Text</Form.Label>
      <Form.Control id="inputPassword" aria-describedby="passwordHelpBlock" />
      <div style={{ marginTop: 5 }} />
      <Form.Text muted>Footer에 사용할 문구를 입력하세요.</Form.Text>

      {/* <div style={{ marginTop: 30 }} />
      <h3>글 메뉴 편집</h3>
      <div
        style={{
          backgroundColor: "#527F52",
          color: "white",
          border: `solid 8px #B68D5D`,
          padding: "5px 10px",
        }}
      >
        <Tree
          data={menu}
          height={250}
          openByDefault={true}
          indent={32}
          onMove={onMove}
        >
          {Node}
        </Tree>
      </div> */}
      <div style={{ marginTop: 35 }} />
      <button
        type="button"
        class="btn btn-outline-info"
        style={{ width: 500 }}
        onClick={AddButtonClicked}
      >
        메인 페이지 책 소개 추가
      </button>

      <BootModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title="알림"
        message="최대 3개까지 추가할 수 있습니다."
      />

      {bookList}

      <div style={{ marginTop: 10 }} />
      {/* 로그인 버튼 */}
      <button
        type="button"
        class="btn btn-dark"
        style={{ width: 500, marginTop: 30 }}
      >
        변경사항 저장
      </button>
    </div>
  );
};

export default EditConfig;

/* 

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
*/
