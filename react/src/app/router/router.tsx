import { createBrowserRouter } from 'react-router';

import {DefaultLayout} from '@/app/layouts/default-layout';
import HomePage from '@/app/pages/home-page';
import Tanstack from '@/app/pages/tanstack';


export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/tanstack', element: <Tanstack /> },
    ],
  }
]);