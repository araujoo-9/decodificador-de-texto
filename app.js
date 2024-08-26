
const input = document.getElementById('mensagem');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const output = document.getElementById('output');
const charCount = document.getElementById('charCount');

function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarTexto(texto) {
    return texto
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
}

encryptBtn.addEventListener('click', () => {
    const textoOriginal = input.value;
    const textoCriptografado = criptografarTexto(textoOriginal);
    output.textContent = `Texto Criptografado: ${textoCriptografado}`;
});

decryptBtn.addEventListener('click', () => {
    const textoCriptografado = input.value;
    const textoDescriptografado = descriptografarTexto(textoCriptografado);
    output.textContent = `Texto Descriptografado: ${textoDescriptografado}`;
});

input.addEventListener('input', () => {
    const remaining = 500 - input.value.length;
    charCount.textContent = `${remaining} caracteres restantes`;
});