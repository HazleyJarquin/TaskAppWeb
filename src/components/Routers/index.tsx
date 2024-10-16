import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Home } from "../../pages/Home";
import { WithUserCheck } from "../WithUsersCheck";
import { Users } from "../../pages/Users";
import { useUsersStore } from "../../store";
import { Tasks } from "../../pages/Tasks";
import { MainLayout } from "../MainLayout";
import { NotFound } from "../NotFound";

export const Routers = () => {
  const ComponentWithUserCheck = WithUserCheck(Users);
  const { users } = useUsersStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<MainLayout />}>
          <Route
            path="/users"
            element={<ComponentWithUserCheck users={users ?? []} />}
          />
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
