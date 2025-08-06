/* Elaborar um programa que leia nome e número de acertos de candidatos inscritos em um concurso (ok). Listar os dados a cada inclusão (OK). Ao clicar no botão Aprovados 2ª Fase, ler o número de acertos para aprovação dos candidatos para a 2ª fase do concurso, conforme ilustra a Figura 6.16. O programa deve, então, exibir os candidatos aprova-dos, ou seja, apenas os que obtiveram nota maior ou igual à nota informada. Exibir os candidatos aprovados em ordem decrescente de número de acertos (Figura 6.17). Caso nenhum candidato tenha sido aprovado, exibir mensagem.
 *
 * Develop a program that reads the names and number of correct answers of candidates enrolled in a contest. List the data for each entry. When clicking on the Approved 2nd Phase button, read the number of correct answers for the candidates' approval for the 2nd phase of the contest, as shown in Figure 6.16. The program should then display the approved candidates, i.e., only those who obtained a score greater than or equal to the specified score. Display the approved candidates in descending order of number of correct answers (Figure 6.17). If no candidates have been approved, display a message.*/

const inCandidate = document.querySelector("#inCandidate");
const inHits = document.querySelector("#inHits");
const btAdd = document.querySelector("#btAdd");
const btList = document.querySelector("#btList");
const btApproved = document.querySelector("#btApproved");
const preList = document.querySelector("#preList");

const candidates = [];

btAdd.addEventListener("click", () => {
  const candidate = inCandidate.value.trim();
  const hits = Number(inHits.value.trim());

  if (candidate === "" || isNaN(hits)) {
    alert(`Please enter a valid name and number.`);
    return;
  }

  candidates.push({ name: candidate, hits: hits });

  inCandidate.value = "";
  inHits.value = "";
  inCandidate.focus();

  preList.textContent = candidates
    .map((c, index) => `${index + 1}. ${c.name} - ${c.hits} hits`)
    .join("\n");
});

btApproved.addEventListener("click", () => {
  let approval = Number(
    window.prompt("Number of correct answers required for approval?", ""),
  );

  if (isNaN(approval) || approval <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  const approvedCandidates = candidates.filter((c) => c.hits >= approval);

  if (approvedCandidates.length === 0) {
    preList.textContent = "No candidates were approved.";
    return;
  }

  approvedCandidates.sort((a, b) => b.hits - a.hits);

  preList.textContent = approvedCandidates
    .map((c, index) => `${index + 1}. ${c.name} - ${c.hits} hits`)
    .join("\n");
});
