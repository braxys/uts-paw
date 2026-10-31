import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";
import App from "./App.jsx";

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

test("rute tidak dikenal menampilkan 404", () => {
  buka("/tidak-ada");
  expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
});

test("halaman beranda menampilkan judul", () => {
  buka("/");
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
});

test("halaman tentang menampilkan nama yang benar", () => {
  buka("/tentang");
  expect(screen.getByText("Bagas Hari Muthi")).toBeInTheDocument();
});

test("halaman tentang menampilkan nim yang benar", () => {
  buka("/tentang");
  expect(screen.getByText("124140128")).toBeInTheDocument();
});

test("halaman statistik menampilkan tabel", () => {
  buka("/statistik");
  expect(screen.getByRole("table")).toBeInTheDocument();
});
