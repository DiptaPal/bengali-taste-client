import './App.css';
import {useEffect} from 'react'
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/MainRoute/MainRouter';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
