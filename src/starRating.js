const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4rem",
};

const starContainerStyle = {
  display: "flex",
  gap: "1rem",
};

const textStyle = {
  lineHeight: "1px",
};

export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>{maxRating}</p>
    </div>
  );
}
