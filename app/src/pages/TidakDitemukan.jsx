import { Link } from 'react-router-dom';

export default function TidakDitemukan() {
  return (
    <section>
      <h1>404</h1>
      <p>Halaman Tidak Ditemukan</p>
      <Link to="/" id='button-utama'>Kembali ke beranda</Link>
    </section>
  );
}