import data from '@/data/datosFutbol.json';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function JugadorPage(p: Promise<{ params: { id: string } }>) {
  const { params } = use(p);

  const jugador = data
    .flatMap(e => e.jugadores)
    .find(j => j.id === parseInt(params.id));

  if (!jugador) return notFound();

  return (
    <div className="container text-white">
      <h2 className="mb-3">👟 {jugador.nombre}</h2>
      <p><strong>Posición:</strong> {jugador.posicion}</p>
      <p><strong>Goles:</strong> {jugador.goles}</p>
    </div>
  );
}
