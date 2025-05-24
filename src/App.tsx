import './App.css';
import CheckboxVariant from './components/Checkbox/CheckboxVariant';
import { NotificationVariant } from './components/Notification/NotificationVariant';
import TextInputVariants from './components/TextInput/TextInputVariants';
import { ToastVariant } from './components/Toast/ToastVariant';
import { TypographyVariants } from './components/Typography/TypographyVariants';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home';


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function App() {

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/typography',
      element: <TypographyVariants />
    },
    {
      path: '/textInput',
      element: <TextInputVariants />
    },
    {
      path: '/checkbox',
      element: <CheckboxVariant />
    },
    {
      path: '/toast',
      element: <ToastVariant />
    },
    {
      path: '/notification',
      element: <NotificationVariant />
    }
  ])

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  return (
    <>
      <div className="p-6 bg-white dark:bg-neutral-900 min-h-screen">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
