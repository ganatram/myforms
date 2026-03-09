import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ContactPage, contactPageAction } from './ContactPage';
import { ThankYouPage } from './ThankYouPage';

const myRouterTree = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="contact" />, // like a hashbang - redirection - simulating an event -- invoking an event on behalf of user
  },
  {
    path: '/contact',
    element: <ContactPage />,
    // action: contactPageAction, // Action method
  },
  {
    path: '/thank-you/:name',
    element: <ThankYouPage />,
  },
]);

export function App() {
  return <RouterProvider router={myRouterTree} />;
}
