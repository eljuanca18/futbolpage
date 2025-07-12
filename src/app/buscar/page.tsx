"use client";

import { useState } from "react";
import data from "../../data/datosFutbol.json";
import Link from "next/link";
import { useAuth } from '@/components/AuthProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BuscarPage() {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login');
    }
  }, [loading, session]);

  if (loading || !session) return <p>Cargando...</p>;
  const [query, setQuery] = useState('');

  const equipos = data.filter(e =>
    e.nombre.toLowerCase().includes(query.toLowerCase())
  );

  const jugadores = data
    .flatMap(e => e.jugadores)
    .filter(j =>
      j.nombre.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div>
      <h2>Buscar</h2>
      <input
        type="text"
        placeholder="Buscar equipos o jugadores..."
        className="form-control mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <>
          <h4>Equipos</h4>
          {equipos.length > 0 ? (
            <ul className="list-group mb-4">
              {equipos.map(eq => (
                <li key={eq.id} className="list-group-item">
                  <Link href={`/equipo/${eq.id}`}>{eq.nombre}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron equipos</p>
          )}

          <h4>Jugadores</h4>
          {jugadores.length > 0 ? (
            <ul className="list-group">
              {jugadores.map(j => (
                <li key={j.id} className="list-group-item">
                  <Link href={`/jugador/${j.id}`}>{j.nombre}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron jugadores</p>
          )}
        </>
      )}
    </div>
  );
}
