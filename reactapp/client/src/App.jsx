import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Partners from './pages/Partners';
import Tutorials from './pages/Tutorials';
import Header from './components/nav/Header';
import F from './pages/CommissionsPreform';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="about" element={<About />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="partners" element={<Partners />} />
      <Route path="tutorials" element={<Tutorials />} />
      <Route path="commissions" element={<F />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;