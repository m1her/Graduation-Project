export default function RootLayout({ children }) {
  return (

      <body className="bg-[#a5b4fc]">
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#a5b4fc",
          }}
        >
          {children}
        </div>
      </body>

  );
}
