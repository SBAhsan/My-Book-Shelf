import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './components/Home/Home.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: <div>This is react router</div>, //<Home></Home>,
//     children: [
//       // {
//       //   path: "shows/:showId",
//       //   Component: Show,
//       //   loader: ({ request, params }) =>
//       //     fetch(`/api/show/${params.id}.json`, {
//       //       signal: request.signal,
//       //     }),
//       // },
//     ],
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
