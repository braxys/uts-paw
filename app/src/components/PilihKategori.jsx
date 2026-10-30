import { useState } from "react";

export default function PilihKategori({ items = [], nilai, onUbah }) {
  const daftarKategori = [
    "Semua",
    ...new Set(items.map((item) => item.kategori)),
  ];

  return (
    <select
      id="pilih-kategori"
      aria-label="Kategori"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    >
      {daftarKategori.map((k) => (
        <option key={k} value={k}>
          {k}
        </option>
      ))}
    </select>
  );
}