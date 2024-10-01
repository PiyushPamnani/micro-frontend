export default function Root() {
  return (
    <div
      style={{
        border: "1px solid #8bc34a",
        margin: "8px 0px",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#f1f8e9",
      }}
    >
      <h1 style={{ color: "#689f38" }}>Hello from React</h1>
      <button
        style={{
          backgroundColor: "#8bc34a",
          border: "none",
          padding: "5px",
          borderRadius: "3px",
        }}
        onClick={() => window.showToast("React says hello!", "react")}
      >
        Show Toast
      </button>
    </div>
  );
}
