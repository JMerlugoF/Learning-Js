function translatePigLatin(str) {
  // Verifica se a palavra não possui vogais
  if (!/[aeiou]/i.test(str)) {
    return str + "ay"; // Adiciona "ay" no final
  } else {
    // Verifica se a palavra começa com uma vogal
    if (/^[aeiou]/i.test(str)) {
      return str + "way"; // Adiciona "way" no final
    } else {
      // Procura a posição da primeira vogal na palavra
      let vowelIndex = str.indexOf(str.match(/[aeiou]/i));

      // Move a primeira consoante ou encontro consonantal para o final
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }
}
translatePigLatin("consonant");
