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

btList.addEventListener("click", () => {
  if (candidates.length === 0) {
    preList.textContent = "No candidates have been added yet.";
    return;
  }

  preList.textContent = candidates
    .map((c, index) => `${index + 1}. ${c.name} - ${c.hits} hits`)
    .join("\n");
});
