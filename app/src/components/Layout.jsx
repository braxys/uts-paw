import { Outlet } from "react-router-dom";
import MenuNavigasi from "./MenuNavigasi.jsx";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="kerangka">
      <header className="kepala">
        <strong>Ruang Hijau</strong>
        <MenuNavigasi />
      </header>
      <main className="isi">
        <Outlet />
      </main>
      <footer className="kaki">
        Ujian Tengah Semester Pengembangan Aplikasi Web
      </footer>
    </div>
  );
}
