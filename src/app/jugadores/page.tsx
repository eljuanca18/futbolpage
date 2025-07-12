"use client";
import data from "../../data/datosFutbol.json";
import Link from "next/link";
import { useAuth } from '@/components/AuthProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function JugadoresPage() {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login');
    }
  }, [loading, session]);

  if (loading || !session) return <p>Cargando...</p>;
  const jugadores = data.flatMap(e => e.jugadores);

  return (
    <div>
      <h2>Jugadores</h2>
      <ul className="list-group">
        {jugadores.map(j => (
          <li key={j.id} className="list-group-item">
            <Link href={`/jugador/${j.id}`}>{j.nombre}</Link> - {j.posicion} - {j.goles} goles
          </li>
        ))}
      </ul>
    </div>
  );
}