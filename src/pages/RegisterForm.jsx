import Form from "react-bootstrap/Form";
import "../css/App.css";

const RegisterForm = () => {
  console.log("RegisterForm");
  return (
    <div style={{ width: 500, margin: `0 auto`, padding: `50px 0px` }}>
      <h1>회원가입</h1>
      <div style={{ marginTop: 25 }} />

      {/* 이메일 폼 */}
      <Form.Label htmlFor="inputEmail">Email</Form.Label>
      <Form.Control type="email" id="inputEmail" />
      <div style={{ marginTop: 5 }} />
      <Form.Text muted>이메일을 입력해주세요.</Form.Text>
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

      <div style={{ marginTop: 15 }} />
      <Form.Label htmlFor="inputConfirmPassword">Confirm Password</Form.Label>
      <Form.Control
        type="password"
        id="inputConfirmPassword"
        aria-describedby="passwordHelpBlock"
      />
      <div style={{ marginTop: 5 }} />
      <Form.Text muted>비밀번호를 한번 더 입력하세요.</Form.Text>

      {/* 로그인 상태 유지 여부 */}
      <div style={{ marginTop: 10 }} />

      {/* 로그인 버튼 */}
      <button
        type="button"
        class="btn btn-dark"
        style={{ width: 500, marginTop: 30 }}
      >
        회원가입
      </button>
    </div>
  );
};

export default RegisterForm;
