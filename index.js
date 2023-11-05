function scrambleContent(e) {
    e.preventDefault();

    const content = document.getElementById("contentInput").value;
    const wordsToScramble = document.getElementById("wordsToScramble").value.split(' ');
    
    if (content === "" || wordsToScramble === "") {
        alert("Please fill all fields");
        return;
    }
    
    const scrambledContent = content.split(' ').map(word => {
        if (wordsToScramble.includes(word)) {
            return "####";
        }
        return word;
    }).join(' ');

    document.getElementById("scrambledContent").textContent = scrambledContent;

    alert("Redact");

}

document.querySelector(".contentForm").addEventListener("submit", scrambleContent)