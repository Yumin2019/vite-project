import Form from "react-bootstrap/Form";
import "../css/App.css";

const LoginForm = () => {
  console.log("LoginForm");

  return (
    <div style={{ width: 500, margin: `0 auto`, padding: `50px 0px` }}>
      <h1>로그인</h1>
      <div style={{ marginTop: 25 }} />

      {/* 아이디 폼 */}
      <Form.Label htmlFor="inputId">ID</Form.Label>
      <Form.Control id="inputId" />
      <div style={{ marginTop: 5 }} />
      <Form.Text muted>아이디를 입력해주세요.</Form.Text>
      <div style={{ marginTop: 15 }} />

      {/* 비밀번호 폼 */}
      <Form.Label htmlFor="inputPassword">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword"
        aria-describedby="passwordHelpBlock"
      />
      <div style={{ marginTop: 5 }} />
      <Form.Text muted>
        비밀번호는 8~20자, 영문과 숫자를 포함해야 합니다.
      </Form.Text>

      {/* 로그인 상태 유지 여부 */}
      <div style={{ marginTop: 10 }} />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="AutoLoginState"
        />
        <label class="form-check-label" for="AutoLoginState">
          로그인 상태 유지
        </label>
      </div>

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

export default LoginForm;
