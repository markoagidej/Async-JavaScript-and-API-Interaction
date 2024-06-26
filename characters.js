const ts = Date.now();
const publicKey = '10e6807befd8aeb6f15c4e5356806e98';
const hash = CryptoJS.MD5(ts + privateKey + publicKey);

async function fetchCharacter(characterName) {
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?name=${characterName}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    const characterData = await response.json();
    return characterData.data.results[0];
}

document.getElementById("searchButton").addEventListener("click", async () => {
    const inputName = document.getElementById("nameField").value;
    try {
        const characterData = await fetchCharacter(inputName);
        const infoSection = document.getElementById("characterInfo");
        infoSection.innerHTML = JSON.stringify(characterData);
    }
    catch (error) {
        console.error("this is the error", error);
    }
});