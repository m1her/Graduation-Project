import Navigation from "components/Navigation.js";
import Sidebar from "components/Sidebar.js";

export default function Layout({ children }) {
  return (
    
      <body className="bg-[#a5b4fc]">
        {children}
      </body>
    
  );
}
