import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import Sakshi from './views/sakshi';
import PlanPricing from './views/PlanPricing/PlanPricing';
import Registration from './views/Registration/Registration';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<Sakshi/>
  },
  {
    path : "/planpricing",
    element: <PlanPricing/>
  },
  {
    path : "/Registration",
    element: <Registration/>
  }
 
])
root.render(
  <RouterProvider router={router}/>
)
