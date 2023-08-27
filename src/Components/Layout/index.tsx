import React, { ReactNode } from "react";

// import { Container } from './styles';

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <h2 style={{ color: "#1C1351" }}>ToDo LIST</h2>
      <div
        style={{
          background: "white",
          width: 650,
          minHeight: 140,
          borderRadius: 10,
          padding: 30,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
