import { PostDangerForm } from "./components/AddDanger";
import { FetchData } from "./components/FetchData";
import { AdminFetchData } from "./components/AdminFetchData";
import { Home } from "./components/Home";


const normalUserRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/add-danger',
    element: <PostDangerForm />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

const adminUserRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/add-danger',
    element: <PostDangerForm />
  },
  {
    path: '/admin-fetch-data',
    element: <AdminFetchData />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export { normalUserRoutes, adminUserRoutes };

