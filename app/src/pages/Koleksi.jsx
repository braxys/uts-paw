import { useState } from "react";
import useKoleksi from "../hooks/useKoleksi.js";
import KotakPencarian from "../components/KotakPencarian.jsx";
import KartuItem from "../components/KartuItem.jsx";
import PilihKategori from "../components/PilihKategori.jsx";

export default function Koleksi() {
  const { items, loading, error } = useKoleksi();
  const [cari, setCari] = useState("");
  const [kategori, setKategori] = useState("Semua");

  if (loading) return <p>Memuat data...</p>;
  if (error) return <p role="alert">Gagal memuat: {error}</p>;

  const tampil = items.filter(
    (item) =>
      item.judul.toLowerCase().includes(cari.toLowerCase()) &&
      (kategori === "Semua" || item.kategori === kategori),
  );

  return (
    <section id="seksi-koleksi">
      <h1 id="judul-utama">Koleksi Tanaman Hias</h1>
      <div className="alat-koleksi">
        <KotakPencarian nilai={cari} onUbah={setCari} />
        <PilihKategori items={items} nilai={kategori} onUbah={setKategori} />
      </div>
      {tampil.length === 0 ? (
        <p>Tidak ada item yang cocok.</p>
      ) : (
        <div className="daftar-kartu">
          {tampil.map((item) => (
            <KartuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}