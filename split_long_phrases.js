const fs = require("fs");
const path = require("path");

const translatedTextFolder = fs.readdirSync(path.join(__dirname, "translated_text"));

translatedTextFolder.forEach(el => {
    const file = fs.readFileSync(path.join(__dirname, "translated_text", el)).toString().split("\n");
    const resultArray = [];

    for (let element of file) {
        const trimmedPhrase = element.trim();

        if (!trimmedPhrase.includes("$") &&
            !trimmedPhrase.includes("scene") &&
            !trimmedPhrase.includes("show") &&
            !trimmedPhrase.includes("play") &&
            !trimmedPhrase.includes("jump") &&
            trimmedPhrase.includes("\"")
        ) {
            let name = null;
            let text = null;

            if (trimmedPhrase[0] === "\"") {
                text = trimmedPhrase.slice(1, trimmedPhrase.length - 1);
            } else {
                name = trimmedPhrase.slice(0, trimmedPhrase.indexOf(" "));
                text = trimmedPhrase.slice(trimmedPhrase.indexOf("\"") + 1, trimmedPhrase.length - 1);
            }

            const phraseArray = text.split(" ");

            const index = 39;

            if (phraseArray.length > index) {
                if (phraseArray.length > index * 2) {
                    resultArray.push(name ? `    ${name} "${phraseArray.slice(0, index).join(" ")}"` : `    "${phraseArray.slice(0, index).join(" ")}"`);
                    resultArray.push(name ? `    ${name} "${phraseArray.slice(index, index * 2).join(" ")}"` : `    "${phraseArray.slice(index, index * 2).join(" ")}"`);
                    resultArray.push(name ? `    ${name} "${phraseArray.slice(index * 2, phraseArray.length).join(" ")}"` : `    "${phraseArray.slice(index * 2, phraseArray.length).join(" ")}"`);
                } else {
                    resultArray.push(name ? `    ${name} "${phraseArray.slice(0, index).join(" ")}"` : `    "${phraseArray.slice(0, index).join(" ")}"`);
                    resultArray.push(name ? `    ${name} "${phraseArray.slice(index, phraseArray.length).join(" ")}"` : `    "${phraseArray.slice(index, phraseArray.length).join(" ")}"`);
                }
            } else {
                resultArray.push(element);
            }
        } else {
            resultArray.push(element);
        }
    }

    fs.writeFileSync(path.join(__dirname, "splitted_strings_output", el), resultArray.join("\n"));
});

console.log("Separation of long strings has been performed successfully.")