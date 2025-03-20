import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing";
import AppLayOut from "./layout/app.layout";
import JobListing from "./pages/job-listing";
import Job from "./pages/job";
import PostJobs from "./pages/post-jobs";
import MyJobs from "./pages/myjob";
import OnBoarding from "./pages/onboarding";
import SavedJobs from "./pages/saved-jobs";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayOut />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/onboarding",
          element: <OnBoarding />,
        },
        {
          path: "/job-listing",
          element: <JobListing />,
        },
        {
          path: "/job/:id",
          element: <Job />,
        },
        {
          path: "/post-jobs",
          element: <PostJobs />,
        },
        {
          path: "/myjob",
          element: <MyJobs />,
        },
        {
          path: "/saved-jobs",
          element: <SavedJobs />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
