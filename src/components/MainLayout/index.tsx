import { Navbar } from "aurakitui";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils";

export const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pageTitle = location.pathname.replace("/", "");

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Navbar
          title={capitalizeFirstLetter(pageTitle) || "Home"}
          onBackIconClick={() => navigate("/home")}
          navbarStyle={{
            backgroundColor: "#1a1a1d",
            padding: "0.1rem",
          }}
          titleStyle={{
            color: "#f1f1f1",
            fontFamily: "Afacad Flux",
          }}
          backIconColor="#f50057"
        />
      </div>

      <div style={{ width: "100%", padding: "2rem", overflowY: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
};
