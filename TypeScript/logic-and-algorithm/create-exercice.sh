#!/bin/bash

# Verifica se o usuário passou dois argumentos (capítulo e exercício)
if [ $# -ne 2 ]; then
  echo "Uso: ./create-exercise.sh capN exN"
  exit 1
fi

CAP=$1
EX=$2

# Caminho da nova pasta
DEST="./$CAP/$EX"

# Verifica se a pasta já existe
if [ -d "$DEST" ]; then
  echo "❌ A pasta $DEST já existe!"
  exit 1
fi

# Cria a pasta e copia os arquivos do template
mkdir -p "$DEST"
cp -r template-ts/* "$DEST"

echo "✅ Exercício criado em: $DEST"

