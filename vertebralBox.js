function spinalCase(str) {
  // Adicionar espaço entre uma letra minúscula e uma letra maiúscula
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Converter para minúsculas e substituir espaços e underscores por travessões
  return str.toLowerCase().replace(/[\s_]+/g, "-");
}

console.log(spinalCase("This Is Spinal Tap"));
