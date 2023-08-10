import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import DashBoard from './pages/DashBoard.jsx'
import InvoiceDetails from './pages/InvoiceDetails.jsx'
import InvoiceCreate from './pages/InvoiceCreate.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<DashBoard />} />
      <Route path='/invoice/:id' element={<InvoiceDetails />} />
      <Route path='/invoice/edit' element={<InvoiceCreate />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
