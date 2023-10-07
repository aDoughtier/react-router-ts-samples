import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Contact, Layout } from '@/pages'
import { ErrorBoundary } from '@/components/'
import { loader as rootLoader, action as RootAction } from '@/pages/Layout'
import { loader as ContactLoader, action as ContactAction } from '@/pages//Contact'
// import { lazy } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    loader: rootLoader,
    action: RootAction,
    children: [
      {
        path: "contacts/:contactId",
        // element: lazy(() => import("@/pages/Contact"))
        loader: ContactLoader,
        action: ContactAction,
        element: <Contact />
      }
    ]
  },
]);

export default router