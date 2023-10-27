import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Person } from "../pages/Person";
import { CreatePerson } from "../pages/CreatePerson";
import { EditPerson } from "../pages/EditPerson";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/person/:id_person",
    element: <Person />,
  },
  {
    path: "/edit-person/:id_person",
    element: <EditPerson />,
  },
  {
    path: "/create-person",
    element: <CreatePerson />,
  },
]);

export default router;
