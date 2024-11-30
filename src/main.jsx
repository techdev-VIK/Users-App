import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';

import Users from './pages/Users.jsx';
import Statistics from './pages/Statistics.jsx';
import UserDetails from './pages/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pages/users",
    element: <Users />,
  },
  {
    path: "/pages/statistics",
    element: <Statistics />,
  },
  {
    path: "/users/:userId",
    element: <UserDetails />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
