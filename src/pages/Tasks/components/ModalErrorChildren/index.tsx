import { Icon } from "aurakitui";

export const ModalErrorChildren = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        color: "#e91e63",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon name="SadFace" color="#e91e63" size={100} />
      <p style={{ fontSize: "2rem" }}>Haz alcanzo el limite de tareas</p>
    </div>
  );
};
