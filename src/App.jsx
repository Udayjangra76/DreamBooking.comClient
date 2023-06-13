import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Other from './pages/others/Other.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route index element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/flight" element={<Other />} />
      <Route path="/car" element={<Other />} />
      <Route path="/attraction" element={<Other />} />
      <Route path="/airTaxi" element={<Other />} />
    </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
