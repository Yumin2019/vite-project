import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddFrontImage = ({ onDeleted }) => {
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
    <>
      <div style={{ marginTop: 15 }} />
      <div
        style={{
          backgroundColor: "#F0F0F0",
          padding: "14px 20px",
          border: "solid 1px grey",
          borderRadius: 18,
        }}
      >
        <Form.Label htmlFor="profileImage">Main Page 책 소개</Form.Label>

        <div style={{ float: "right" }}>
          <button type="button" class="btn btn-success">
            사진 제거
          </button>
          <button
            type="button"
            class="btn btn-danger"
            style={{ marginLeft: 15 }}
          >
            삭제하기
          </button>
        </div>

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

        {/* 책 이름 */}
        <div style={{ marginTop: 8 }} />
        <Form.Label htmlFor="inputTitle">Book Name</Form.Label>
        <Form.Control type="email" id="inputEmail" />
        <div style={{ marginTop: 5 }} />
        <Form.Text muted>책 이름을 입력해주세요.</Form.Text>
        <div style={{ marginTop: 15 }} />
        {/* 하단 Description 텍스트*/}
        <Form.Label htmlFor="inputPassword">Description</Form.Label>
        <Form.Control id="inputPassword" aria-describedby="passwordHelpBlock" />
        <div style={{ marginTop: 5 }} />
        <Form.Text muted>제목 아래 문구에 사용됩니다.</Form.Text>
      </div>
    </>
  );
};

export default AddFrontImage;
