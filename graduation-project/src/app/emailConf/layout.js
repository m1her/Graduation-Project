export default function Layout({ children }) {
  return (
    <body style={{ backgroundColor: "#a5b4fc" }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </div>
    </body>
  );
}
