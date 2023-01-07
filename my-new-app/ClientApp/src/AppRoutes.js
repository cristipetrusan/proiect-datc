import { PostDangerForm } from "./components/AddDanger";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <PostDangerForm />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;