import { Button } from "aurakitui";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>
        Welcome to <span style={{ color: "#e91e63" }}>Task App</span>
      </h1>

      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button
          label="Tasks"
          onClick={() => handleNavigate("/tasks")}
          style={{ width: "30%", padding: "0.5rem" }}
          mode="primary"
        />
        <Button
          label="Users"
          onClick={() => handleNavigate("/users")}
          style={{ width: "30%", color: "white", padding: "0.5rem" }}
          mode="secondary"
        />
      </div>
    </div>
  );
};
