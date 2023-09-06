const FrontImage = ({ title, content, src }) => {
  return (
    <div className="col-sm-4">
      <h2>{title}</h2>
      <p>{content}</p>
      <img
        src={src}
        style={{ maxHeight: 350, border: `1px solid lightGrey` }}
      />
    </div>
  );
};

export default FrontImage;
