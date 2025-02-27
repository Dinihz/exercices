import { useState } from 'react';

export const Exercicio1 = () => {
	const [valorSaque, setValorSaque] = useState('');
	const [resultado, setResultado] = useState<{ notas100: number, notas50: number, notas10: number } | null>(null);
	const [erro, setErro] = useState('');

	const validarSaque = (valor: number) => {
		return valor % 10 === 0 && valor >= 10;
	};

	const calcularNotas = () => {
		const valor = parseInt(valorSaque);

		if (!validarSaque(valor)) {
			setErro('Valor inválido! Deve ser múltiplo de 10 e mínimo R$10');
			setResultado(null);
			return;
		}

		const notas100 = Math.floor(valor / 100);
		let resto = valor % 100;

		const notas50 = Math.floor(resto / 50);
		resto = resto % 50;

		const notas10 = Math.floor(resto / 10);

		setResultado({ notas100, notas50, notas10 });
		setErro('');
	};

	return (
		<div style={{ padding: '20px', fontFamily: 'Arial' }}>
			<h2>Exercício 1: Caixa Eletrônico</h2>
			<input
				type="number"
				value={valorSaque}
				onChange={(e) => setValorSaque(e.target.value)}
				placeholder="Valor do saque"
			/>
			<button onClick={calcularNotas}>Calcular</button>

			{erro && <p style={{ color: 'red' }}>{erro}</p>}

			{resultado && (
				<div>
					<p>Notas de 100: {resultado.notas100}</p>
					<p>Notas de 50: {resultado.notas50}</p>
					<p>Notas de 10: {resultado.notas10}</p>
				</div>
			)}
		</div>
	);
};
