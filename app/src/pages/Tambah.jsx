import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import "./Tambah.css";

const AWAL = {
  judul: "",
  kategori: "Daun Hias",
  namaLatin: "",
  frekuensiSiram: "",
  kebutuhanCahaya: "Sedang",
};

export default function Tambah() {
  const { tambah } = useKoleksi();
  const navigate = useNavigate();
  const [form, setForm] = useState(AWAL);
  const [galat, setGalat] = useState("");

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const simpan = (e) => {
    e.preventDefault();
    if (form.judul.trim().length < 3) {
      setGalat("Judul wajib diisi, minimal 3 karakter.");
      return;
    }
    tambah({ ...form, judul: form.judul.trim() });
    navigate("/koleksi");
  };

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Koleksi Tanaman Hias</h1>

      <label htmlFor="judul">Judul</label>
      <input
        id="judul"
        name="judul"
        value={form.judul}
        onChange={ubah}
        className="search-bar"
        placeholder="Melati"
      />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select
        id="kategori"
        name="kategori"
        value={form.kategori}
        onChange={ubah}
        className="pilih-kategori"
      >
        <option>Daun Hias</option>
        <option>Merambat</option>
        <option>Bunga</option>
      </select>

      <label htmlFor="namaLatin">Nama Latin</label>
      <input
        id="namaLatin"
        name="namaLatin"
        value={form.namaLatin}
        onChange={ubah}
        className="search-bar"
        placeholder="Jasminum sambac"
      />

      <label htmlFor="frekuensiSiram">Frekuensi Siram</label>
      <input
        id="frekuensiSiram"
        name="frekuensiSiram"
        value={form.frekuensiSiram}
        onChange={ubah}
        className="search-bar"
        placeholder="1x seminggu"
      />

      <label htmlFor="kebutuhanCahaya">Kebutuhan Cahaya</label>
      <select
        id="kebutuhanCahaya"
        name="kebutuhanCahaya"
        value={form.kebutuhanCahaya}
        onChange={ubah}
        className="pilih-kategori"
      >
        <option value="Rendah">Rendah</option>
        <option value="Sedang">Sedang</option>
        <option value="Tinggi">Tinggi</option>
      </select>

      <button type="submit" id="button-utama">
        Simpan
      </button>
    </form>
  );
}