import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes.jsx';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../src/context/AuthContext.jsx';
import { getRedirectResult } from 'firebase/auth';
import { auth } from './firebase/firebase.config';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
  <RouterProvider router={router} />
  <ToastContainer position="top-right" autoClose={2000} />
  <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
    </AuthProvider>
  </StrictMode>,
)

// Handle Google redirect sign-in result: navigate and show a toast on success or error
getRedirectResult(auth)
  .then((result) => {
    if (result && result.user) {
      console.log('Redirect sign-in success:', result.user);
      toast.success('Signed in with Google (redirect)');
      // Use replace to avoid leaving redirect state in history
      window.location.replace('/');
    }
  })
  .catch((err) => {
    console.error('getRedirectResult error:', err);
    toast.error(`Sign-in redirect failed: ${err?.code || ''} ${err?.message || ''}`);
  });


