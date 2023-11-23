const fs = require("fs");
const path = require("path");

const translatedTextFolder = fs.readdirSync(path.join(__dirname, "translated_text"));

let counter = 0;

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

            if (text.length > 290) {
                counter++;

                let phrasesArray = text.split(" ");
                const newStringArray = [];

                let additionArray = text.split(" ");

                for (let i = phrasesArray.length - 1; i > -1; i--) {
                    if (additionArray.join(" ").length > 290) {
                        additionArray = additionArray.slice(0, i);
                        newStringArray.unshift(phrasesArray[i]);
                    } else {
                        break;
                    }
                }

                phrasesArray = phrasesArray.slice(0, additionArray.length);

                if (newStringArray.join(" ").includes("{/i}") && !newStringArray.join(" ").includes("{i}")) {
                    newStringArray[0] = "{i}" + newStringArray[0];
                }

                if (name) {
                    resultArray.push(`    ${name} "${phrasesArray.join(" ")}"`);
                    resultArray.push(`    ${name} "${newStringArray.join(" ")}"`);
                } else {
                    resultArray.push(`    "${phrasesArray.join(" ")}"`);
                    resultArray.push(`    "${newStringArray.join(" ")}"`);
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

console.log(`Separation of long strings has been performed successfully. Number of divided phrases: ${counter}.`)