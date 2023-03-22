export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body style={{ backgroundColor: "#a5b4fc" }}>{children}</body>
    </html>
  );
}

// const globalStyles = `
//   body {
//     background-color: #f0f0f0;
//   }
// `

// export default function Layout({ children }) {
//   return (
//     <div style={globalStyles} class="h-screen mt-10 bg-gray-500">
//       {children}
//     </div>
//   );
// }
