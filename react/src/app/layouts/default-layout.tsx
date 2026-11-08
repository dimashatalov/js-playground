import { Outlet } from 'react-router';

import Header from "@/app/widgets/header.tsx";

export function DefaultLayout() {
  return (
    <>
      <Header/>

      <main>
        <Outlet />
      </main>
    </>
  );
}