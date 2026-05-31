export default function DebugSize() {
  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        background: "black",
        color: "white",
        padding: "10px",
        zIndex: 9999,
        borderRadius: "10px",
        fontFamily: "monospace",
      }}
    >
      {window.innerWidth} x {window.innerHeight}
    </div>
  );
}
