import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  // return (
  //   <body>
  //     <div className="flex justify-center items-center  w-screen h-screen bg-blue-200">
  //       <main>{children}</main>
  //     </div>
  //   </body>
  // );
  
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

};

export default AuthLayout;

// return (

//     <body className="bg-[#a5b4fc]">
//       <div
//         style={{
//           position: "absolute",
//           left: "50%",
//           top: "50%",
//           transform: "translate(-50%, -50%)",
//           backgroundColor: "#a5b4fc",
//         }}
//       >
//         {children}
//       </div>
//     </body>

// );
