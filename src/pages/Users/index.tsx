import { useUsersStore } from "../../store";
import { UsersBanner } from "./components/UsersBanner";

export const Users = () => {
  const { users } = useUsersStore();

  return (
    <div
      style={{
        width: "100%",
        color: "white",
      }}
    >
      {users?.map((i) => (
        <div
          key={i.id}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "70%" }}>
            <UsersBanner userName={i.name || "No Avatar"} />
          </div>
        </div>
      ))}
    </div>
  );
};
