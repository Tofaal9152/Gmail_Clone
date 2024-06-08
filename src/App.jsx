import React from 'react'
import Navbar from './Components/Shared/Navbar'
import Sidebar from "./Components/Shared/Sidebar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Components/Shared/Body';

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    }
  ])
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App