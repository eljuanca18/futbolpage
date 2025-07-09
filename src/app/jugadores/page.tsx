import data from "../../data/datosFutbol.json";
import Link from "next/link";

export default function JugadoresPage() {
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