interface Curso {
  id: number;
  nome: string;
  horas: number;
  tags: string[];
  nivel: "iniciante" | "avancado";
}

async function fetchCursos(): Promise<Curso[]> {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data: Curso[] = await response.json();
  return data;
}

function displayCursos(cursos: Curso[]): void {
  const container = document.getElementById("cursos-container");
  if (!container) return;

  cursos.forEach((curso) => {
    const cursoElement = document.createElement("div");
    cursoElement.textContent = `${curso.nome} (${curso.horas} horas)`;
    cursoElement.style.color = curso.nivel === "iniciante" ? "blue" : "red";
    container.appendChild(cursoElement);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const cursos = await fetchCursos();
  displayCursos(cursos);
});
