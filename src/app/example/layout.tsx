import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h1>Example</h1>
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;
