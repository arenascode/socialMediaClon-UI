import "./app.scss";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/Register.jsx";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar/NavBar.jsx";
import LeftBar from "./components/leftBar/LeftBar.jsx"
import RightBar from "./components/rightBar/RightBar.jsx";
import ProfilePage from "./pages/profile/Profile.jsx"
import Home from "./pages/home/Home.jsx"

function App() {
  
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:6}}>
          <Home />
          </div>
          <RightBar />
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={'/login'} />
    }
    return children
  }
  
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <ProtectedRoute>
        <Layout />
      </ProtectedRoute> ,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <ProfilePage/>
        }
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
