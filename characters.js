async function fetchCharacter(characterName) {
    const ts = Date().now();
    const publicKey = '10e6807befd8aeb6f15c4e5356806e98';
    const privateKey = '';
    const hash = ts + publicKey + privateKey;
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?name=${characterName}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    const characterData = await response.json();
    console.log(characterData);
    return characterData;
}

document.getElementById("nameField").addEventListener("onclick", async () => {
    const inputName = document.getElementById("nameField").value;
    const characterData = fetchCharacter(inputName);

    const infoSection = document.getElementById("characterInfo");
    infoSection.innerHTML = characterData;
});