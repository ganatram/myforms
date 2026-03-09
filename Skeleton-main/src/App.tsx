import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ContactPage, contactPageAction } from './ContactPage';
import { ThankYouPage } from './ThankYouPage';

const myRouterTree = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="contact" />, // like a hashbang - redirection
  },
  {
    path: '/contact',
    element: <ContactPage />,
    action: contactPageAction,
  },
  {
    path: '/thank-you/:name',
    element: <ThankYouPage />,
  },
]);

export function App() {
  return <RouterProvider router={myRouterTree} />;
}
