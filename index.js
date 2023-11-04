function scrambleContent() {
    const content = document.getElementById("contentInput").value;
    const wordsToScramble = document.getElementById("wordsToScramble").value.split(' ');

    const scrambledContent = content.split(' ').map(word => {
        if (wordsToScramble.includes(word)) {
            return "####";
        }
        return word;
    }).join(' ');

    document.getElementById("scrambledContent").textContent = scrambledContent;
}