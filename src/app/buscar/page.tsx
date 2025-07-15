'use client';

import { useState, useEffect } from "react";
import data from "../../data/datosFutbol.json";
import Link from "next/link";
import { useAuth } from '@/components/AuthProvider';
import { useRouter } from 'next/navigation';

export default function BuscarPage() {
  const [query, setQuery] = useState('');
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login');
    }
  }, [loading, session, router]);

  if (loading || !session) return <p className="text-white">Cargando...</p>;

  const equipos = data.filter(e =>
    e.nombre.toLowerCase().includes(query.toLowerCase())
  );

  const jugadores = data
    .flatMap(e => e.jugadores)
    .filter(j =>
      j.nombre.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className="container text-white">
      <h2 className="mb-3">🔎 Buscar</h2>
      <input
        type="text"
        placeholder="Buscar equipos o jugadores..."
        className="form-control mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <>
          <h4>🏟️ Equipos</h4>
          {equipos.length > 0 ? (
            <ul className="list-group mb-4">
              {equipos.map(eq => (
                <li key={eq.id} className="list-group-item">
                  <Link href={`/equipo/${eq.id}`} className="text-success fw-bold">{eq.nombre}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-warning">No se encontraron equipos</p>
          )}

          <h4>👟 Jugadores</h4>
          {jugadores.length > 0 ? (
            <ul className="list-group">
              {jugadores.map(j => (
                <li key={j.id} className="list-group-item">
                  <Link href={`/jugador/${j.id}`} className="text-success fw-bold">{j.nombre}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-warning">No se encontraron jugadores</p>
          )}
        </>
      )}
    </div>
  );
}

