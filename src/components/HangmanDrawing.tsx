export function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position:"absolute",
          top:0,
          right:0,
        }}
      />

      <div
        style={{
          height: "10px",
          width: "220px",
          marginLeft: "120px",
          background: "black",
        }}
      />

      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          background: "black",
        }}
      />

      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  );
}
