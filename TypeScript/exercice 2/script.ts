async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>Preço: ${data.preco}</p>
      <div> 
      <h3>Fabricante: ${data.empresaFabricante}</h3?
      </div>
      <div> 
      <h3>Montadora: ${data.empresaMontadora}</h3?
      </div>
    </div>
  `;
}
