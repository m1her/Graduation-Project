import HomeLayout from "../../featuers/layout/HomeLayout";

export default function Layout({ children }) {
  return (
    <body>
      <HomeLayout>{children}</HomeLayout>
    </body>
  );
}
