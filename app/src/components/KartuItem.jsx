import { Link } from "react-router-dom";
import "./KartuItem.css";

export default function KartuItem({ item }) {
  const { id, judul, kategori, namaLatin } = item;
  return (
    <Link className="judul-kartu" to={`/koleksi/${id}`}>
      <article className="kartu">
        <h3>{judul}</h3>
        <p>{kategori}</p>
        <p>
          <em>{namaLatin}</em>
        </p>
      </article>
    </Link>
  );
}
