import Form from "react-bootstrap/Form";
import "../css/App.css";
import { useState } from "react";

const EditProfile = () => {
  console.log("EditProfile");
  // const formData = new FormData();
  // formData.append("file", img);

  const [preview, setPreview] = useState("img/book3.jpg");

  const onChange = (e) => {
    const img = e.target.files[0];
    console.log(img);

    var reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = function (e) {
      setPreview(e.target.result);
    };
  };

  return (
    <div style={{ width: 500, margin: `0 auto`, padding: `50px 0px` }}>
      <h1>프로필 편집</h1>
      <div style={{ marginTop: 25 }} />

      <Form.Label htmlFor="profileImage">Profile Image</Form.Label>
      <div className="profile-img-wrapper" style={{ margin: "5px 0px" }}>
        <img src={preview} />
      </div>

      <div style={{ marginTop: 4 }} />
      <input
        type="file"
        accept="image/*"
        name="profileImg"
        onChange={onChange}
      />

      {/* 닉네임 편집 */}
      <div style={{ marginTop: 15 }} />
      <Form.Label htmlFor="inputNickname">Nickname</Form.Label>
      <Form.Control type="nickName" id="inputNickname" />
      <div style={{ marginTop: 5 }} />
      <Form.Text muted>닉네임을 입력해주세요(10자 이내)</Form.Text>
      <div style={{ marginTop: 15 }} />

      {/* 소개 텍스트 */}
      <Form.Label htmlFor="inputIntroduction">Introduction</Form.Label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      />
      <Form.Text muted>최대 100자</Form.Text>
      <div style={{ marginTop: 5 }} />

      {/* 편집하기 버튼 */}
      <button
        type="button"
        class="btn btn-dark"
        style={{ width: 500, marginTop: 15 }}
      >
        편집 하기
      </button>
    </div>
  );
};

export default EditProfile;
