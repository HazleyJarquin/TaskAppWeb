import { useEffect } from "react";
import { useGetAllUsers } from "hjarquin-cross/hooks";
import { useUsersStore } from "../../store";

export const SplashScreen = () => {
  const { data } = useGetAllUsers();
  const { setUsers } = useUsersStore();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (data) {
      timer = setTimeout(() => {
        setUsers(data);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [data, setUsers]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "5rem" }}>
        Task <span style={{ color: "#e91e63" }}>App</span>
      </h1>
    </div>
  );
};
