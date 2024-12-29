import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import Home from "./page/Home";
import Members from "./page/Members";
import Opportunity from "./page/Opportunity";
import Traning from "./page/Traning";
import Events from "./page/Events";
import About from "./page/About";
import Contact from "./page/Contact";
import Social from "./page/Social";
import Terms from "./page/Terms";
import Privacy from "./page/Privacy";




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
        },
        {
          path: "/opportunity",
          element: <Opportunity />,
        },
        {
          path: "/training",
          element: <Traning />,
        },
        {
          path: "/events",
          element: <Events/>,
        },
        {
          path: "/about-us",
          element: <About/>,
        },
        {
          path: "/contact-us",
          element: <Contact/>,
        },
        {
          path: "/social-media",
          element: <Social/>,
        },
        {
          path: '/terms-and-conditions',
          element: <Terms/>,
        },
        {
          path: '/privacy-policy',
          element: <Privacy/>,
        }
        
        
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
