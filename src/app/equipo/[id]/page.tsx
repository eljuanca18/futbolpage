import data from "../../../data/datosFutbol.json";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
}

export default function EquipoPage({ params }: Params) {
  const equipo = data.find(e => e.id === parseInt(params.id));

  if (!equipo) return notFound();

  return (
    <div>
      <h2>{equipo.nombre}</h2>
      <p>Liga: {equipo.liga}</p>
      <p>Goles: {equipo.goles}</p>
      <h4>Jugadores</h4>
      <ul>
        {equipo.jugadores.map(j => (
          <li key={j.id}>
            <Link href={`/jugador/${j.id}`}>{j.nombre}</Link> - {j.goles} goles
          </li>
        ))}
      </ul>
    </div>
  );
}