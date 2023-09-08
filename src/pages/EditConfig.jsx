import Form from "react-bootstrap/Form";
import "../css/App.css";

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

const EditConfig = () => {
  console.log("LoginForm");

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

      {/* 로그인 상태 유지 여부 */}
      <div style={{ marginTop: 10 }} />

      {/* 로그인 버튼 */}
      <button
        type="button"
        class="btn btn-dark"
        style={{ width: 500, marginTop: 30 }}
      >
        로그인
      </button>

      <div style={{ marginTop: 10 }}>
        <div style={{ float: "right" }}>회원가입</div>
        <div style={{ float: "right", marginRight: 15 }}>비밀번호 찾기</div>
      </div>
    </div>
  );
};

export default EditConfig;
