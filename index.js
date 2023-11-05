function scrambleContent(e) {
    e.preventDefault();

    const content = document.getElementById("contentInput").value;
    const wordsToScramble = document.getElementById("wordsToScramble").value.split(' ');
    const replacement = document.getElementById("replacement").value;

    if (content === "" || wordsToScramble === "" || replacement === "") {
        alert("Please fill all fields");
        return;
    }

    const startTime = performance.now();

    let scannedWords = 0;
    let scrambledWords = 0;
    let totalScrambledCharacters = 0;

    const scrambledContent = content.split(' ').map(word => {
        scannedWords++;
        if (wordsToScramble.includes(word)) {
            scrambledWords++;
            totalScrambledCharacters += word.length;
            return replacement;
        }
        return word;
    }).join(' ');

    const endTime = performance.now();
    const elapsedSeconds = (endTime - startTime) / 1000;

    document.getElementById("scrambledContent").textContent = scrambledContent;
    document.getElementById("stats").innerHTML = `
        <p>Words Scanned: ${scannedWords}</p>
        <p>Words Matched: ${scrambledWords}</p>
        <p>Total Characters Scrambled: ${totalScrambledCharacters}</p>
        <p>Time Taken: ${elapsedSeconds.toFixed(2)} seconds</p>
    `;

    alert("Redact");
}

document.querySelector(".contentForm").addEventListener("submit", scrambleContent);