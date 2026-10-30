import { Link } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import mahasiswa from "../../mahasiswa.json";

export default function Beranda() {
  const { items, loading } = useKoleksi();
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size;

  return (
    <section id="kartu-utama">
      <h1>Daftar Koleksi Tanaman Hias</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>
          Ada {items.length} tanaman hias dalam {jumlahKategori} kategori.
        </p>
      )}
      <br />
      <Link to="/koleksi" id="button-utama">Lihat semua tanaman hias</Link>
    </section>
  );
}