import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import Home from "./page/Home";
import Members from "./page/Members";



function App() {
  const router=createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/membership",
          element: <Members />,
        }
        
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
