import { Button } from "aurakitui";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#e91e63",
      }}
    >
      <h1>404 Not Found</h1>
      <Button
        label="Go Home"
        mode="primary"
        onClick={() => navigate("/home")}
        style={{ width: "10rem", padding: "0.6rem" }}
      />
    </div>
  );
};
