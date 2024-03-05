import { BASE_PAGE_PATH, PLANETS_PATH } from "@/constants";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import Planets from "@/pages/Planets/Planets";
import SinglePlanet from "@/pages/SinglePlanet/SinglePlanet";
import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./ErrorElement/ErrorElement";

const router = createBrowserRouter([
  {
    path: BASE_PAGE_PATH,
    element: <BaseLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Navigate to={PLANETS_PATH} />,
      },
      {
        path: PLANETS_PATH,
        element: <Planets />,
      },
      {
        path: `${PLANETS_PATH}/:id`,
        element: <SinglePlanet />,
      },
    ],
  },
]);

export default router;
