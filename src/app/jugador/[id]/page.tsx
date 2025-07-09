import data from "../../../data/datosFutbol.json";
import { notFound } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
}

export default function JugadorPage({ params }: Params) {
  const jugador = data.flatMap(e => e.jugadores).find(j => j.id === parseInt(params.id));

  if (!jugador) return notFound();

  return (
    <div>
      <h2>{jugador.nombre}</h2>
      <p>Posición: {jugador.posicion}</p>
      <p>Goles: {jugador.goles}</p>
    </div>
  );
}