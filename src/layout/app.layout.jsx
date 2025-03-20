import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function AppLayOut() {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen w-[90%] mx-auto">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made By Kanishka Pasindu
      </div>
    </div>
  );
}
