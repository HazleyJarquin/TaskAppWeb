import { Avatar } from "aurakitui";

interface Props {
  userName: string;
}

export const UsersBanner = ({ userName }: Props) => {
  return (
    <div
      style={{
        background: "#e91e63",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderRadius: "0.5rem",
      }}
    >
      <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
        <Avatar.Text text={userName} />
      </div>
      <div style={{ width: "50%", display: "flex" }}>
        <h2>{userName}</h2>
      </div>
    </div>
  );
};
