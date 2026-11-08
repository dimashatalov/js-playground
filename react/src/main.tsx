import { StrictMode }     from 'react'
import { createRoot }     from 'react-dom/client'

import { RouterProvider } from 'react-router/dom';
import { router } from '@/app/router/router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'


const containerID = "root";
const container = document.getElementById(containerID);

if (!container) {
  throw new Error("Application container does not exists id='"+containerID+"'");
}

const queryClient = new QueryClient();
const root = createRoot(container);

async function startApplication() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");

    await worker.start({ onUnhandledRequest: "bypass" });
  }

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}

void startApplication();
