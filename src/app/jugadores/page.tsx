'use client';

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
  }, [loading, session, router]);

  if (loading || !session) return <p className="text-white text-center mt-5">Cargando...</p>;

  const jugadores = data.flatMap(e => e.jugadores);

  return (
    <div className="container">
      <h2 className="mb-4">👟 Jugadores</h2>
      <ul className="list-group">
        {jugadores.map(j => (
          <li key={j.id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link href={`/jugador/${j.id}`} className="text-success fw-bold">
              {j.nombre}
            </Link>
            <small className="text-muted">{j.posicion} - {j.goles} goles</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
