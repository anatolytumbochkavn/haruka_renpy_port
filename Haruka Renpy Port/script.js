const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(path.join(__dirname, "scenario"));
const sprites = fs.readdirSync(path.join(__dirname, "sprites"));
const voice = fs.readdirSync(path.join(__dirname, "voice"));
const cg = fs.readdirSync(path.join(__dirname, "cg"));
const sound = fs.readdirSync(path.join(__dirname, "sound"));

let initFile = [];
initFile.push("init:");
initFile.push("    python:");
initFile.push("        renpy.music.register_channel(\"ambience\", \"voice\", True)");
initFile.push("");
initFile.push("    transform right:\n        xalign 0.72\n        yalign 1.0");
initFile.push("    transform left:\n        xalign 0.28\n        yalign 1.0");
initFile.push("    transform cright:\n        xalign 0.645\n        xanchor 0.5\n        yanchor 0.0");
initFile.push("    transform cleft:\n        xalign 0.355\n        xanchor 0.5\n        yanchor 0.0");
initFile.push("    transform fright:\n        xalign 0.84\n        xanchor 0.5\n        yanchor 0.0");
initFile.push("    transform fleft:\n        xalign 0.16\n        xanchor 0.5\n        yanchor 0.0");
initFile.push("");

sprites.forEach(el => {
    const path = "\"images/sprites";
    const spriteId = el.slice(0, el.indexOf("."));

    if (el.includes("CA")) {
        initFile.push(`    image SoraS ${spriteId}:\n        ${path}/${el}\"\n        yanchor 0.0\n        yalign 1.0\n        xanchor 0.5`);
    } else if (el.includes("CB")) {
        initFile.push(`    image NaoS ${spriteId}:\n        ${path}/${el}\"\n        yanchor 0.0\n        yalign 1.0\n        xanchor 0.5`);
    } else if (el.includes("CC")) {
        initFile.push(`    image AkiraS ${spriteId}:\n        ${path}/${el}\"\n        yanchor 0.0\n        yalign 1.0\n        xanchor 0.5`);
    } else if (el.includes("CD")) {
        initFile.push(`    image KazuhaS ${spriteId}:\n        ${path}/${el}\"\n        yanchor 0.0\n        yalign 1.0\n        xanchor 0.5`);
    } else if (el.includes("CE")) {
        initFile.push(`    image MotokaS ${spriteId}:\n        ${path}/${el}\"\n        yanchor 0.0\n        yalign 1.0\n        xanchor 0.5`);
    } else if (el.includes("CF")) {
        initFile.push(`    image RyouheiS ${spriteId}:\n        ${path}/${el}\"\n        yanchor 0.0\n        yalign 1.0\n        xanchor 0.5`);
    } else if (el.includes("CG")) {
        initFile.push(`    image YahiroS ${spriteId}:\n        ${path}/${el}\"\n        yanchor 0.0\n        yalign 1.0\n        xanchor 0.5`);
    } else if (el.includes("CH")) {
        initFile.push(`    image ClassRepS ${spriteId}:\n        ${path}/${el}\"\n        yanchor 0.0\n        yalign 1.0\n        xanchor 0.5`);
    } else if (el.includes("CJ")) {
        initFile.push(`    image DvorS ${spriteId}:\n        ${path}/${el}\"\n        yanchor 0.0\n        yalign 1.0\n        xanchor 0.5`);
    }
});

initFile.push("");

voice.forEach(el => {
    const path = "\"audio/voice";
    const voiceId = el.slice(0, el.indexOf("."));

    initFile.push(`    $ ${voiceId} = ${path}/${el}\"`);
});

initFile.push("");

cg.forEach(el => {
    const path = "\"images/cg";
    const cgId = el.slice(0, el.indexOf("."));

    initFile.push(`    image ${cgId} = ${path}/${el}\"`);
});

initFile.push("");

sound.forEach(el => {
    const path = "\"audio/sound";
    const soundId = el.slice(0, el.indexOf("."));

    initFile.push(`    $ ${soundId} = ${path}/${el}\"`);
});

fs.writeFileSync(path.join(__dirname, "output", "initialize.rpy"), initFile.join("\n"));

const scenarioFilesNames = [];

files.forEach(el => {
    scenarioFilesNames.push(el);
});

files.forEach(el => {
    let renpyFile = [];

    renpyFile.push("init:");

    const file = fs.readFileSync(path.join(__dirname, "scenario", el), "utf16le").toString().split("\n");

    for (let i = 0; i < file.length; i++) {
        file[i] = file[i].replace("\r", "");
    }

    let file2 = file.filter(element => element.trim() != "");

    let namesArray = [];
    let spritesArray = [];

    for (let i = 0; i < file2.length; i++) {
        file2[i] = file2[i].replace(/["]+/g, "'");

        if (file2[i].includes("@Talk")) {
            let charName;

            if (file2[i].includes("voice=")) {
                charName = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].indexOf("voice") - 1);
            } else {
                charName = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].length);
            }

            if (charName == "心の声") {
                continue;
            } else if (charName == "Class Rep" || charName == "Class　Rep") {
                charName = `$ ClassRep = Character("Class Rep")`;
            } else if (charName == "Ryouehi and Akira and Haruka and Sora" || charName == "Ryouehi　and　Akira　and　Haruka　and　Sora") {
                charName = `$ All = Character("All")`;
            } else if (charName == "Post Office Clerk" || charName == "Post　Office　Clerk") {
                charName = `$ PostOfficeClerk = Character("PostOfficeClerk")`;
            } else if (charName == "Delivery Person" || charName == "Delivery　Person") {
                charName = `$ DeliveryPerson = Character("DeliveryPerson")`;
            } else {
                charName = `$ ${charName} = Character("${charName}")`;
            }

            namesArray.push(charName);
        }
    }

    namesArray = namesArray.filter((el, id) => namesArray.indexOf(el) == id);

    for (let i = 0; i < namesArray.length; i++) {
        namesArray[i] = "    " + namesArray[i];
    }

    renpyFile = renpyFile.concat(namesArray);

    // Блок label

    if (el == "00_a001.ks") {
        renpyFile.push("label start:");
    } else {
        renpyFile.push(`label ${el.slice(3, el.indexOf("."))}:`);
    }

    let currentScene;
    const phrasesArray = [];

    const checkSprites = () => {
        switch (spritesArray.length) {
            case 1:
            spritesArray[0].position = "center";
            break;
        case 2:
            spritesArray[0].position = "left";
            spritesArray[1].position = "right";
            break;
        case 3:
            spritesArray[0].position = "left";
            spritesArray[1].position = "right";
            spritesArray[2].position = "center";
            break;
        }
    }

    for (let i = 0; i < file2.length; i++) {
        if (!file2[i].includes("@")) {
            let talkPosition, talkEnd;

            for (let m = i; m > 0; m--) {
                if (file2[m].includes("@Talk")) {
                    talkPosition = m;
                    break;
                }
            }

            for (let g = i; g < file2.length; g++) {
                if (file2[g].includes("@Hitret")) {
                    talkEnd = g;
                    break;
                }
            }

            let charName;

            if (file2[talkPosition].includes("voice=")) {
                charName = file2[talkPosition].slice(file2[talkPosition].indexOf("=") + 1, file2[talkPosition].indexOf("voice") - 1);
            } else {
                charName = file2[talkPosition].slice(file2[talkPosition].indexOf("=") + 1, file2[talkPosition].length);
            }

            if (charName == "Class Rep" || charName == "Class　Rep") {
                charName = "ClassRep";
            } else if (charName == "Ryouehi and Akira and Haruka and Sora" || charName == "Ryouehi　and　Akira　and　Haruka　and　Sora") {
                charName = `All`;
            } else if (charName == "Post Office Clerk" || charName == "Post　Office　Clerk") {
                charName = `PostOfficeClerk`;
            } else if (charName == "Delivery Person" || charName == "Delivery　Person") {
                charName = `DeliveryPerson`;
            }

            let phrase = "";

            for (let n = talkPosition + 1; n < talkEnd; n++) {
                if (!phrase) {
                    phrase += file2[n];
                    delete file2[n];
                } else {
                    phrase += ` ${file2[n]}`;
                    delete file2[n];
                }
            }

            file2 = file2.filter(element => {
                return (element != null && element != "" || el == 0);
            });

            if (file2[talkPosition].includes("voice=")) {
                phrasesArray.push(`play sound ${file2[talkPosition].slice(file2[talkPosition].indexOf("voice=") + 6, file2[talkPosition].length)}`);
            }

            phrasesArray.push([charName, phrase]);
        } else if (file2[i].includes("@PlaySe")) {
            phrasesArray.push(`play sound ` + file2[i].slice(file2[i].indexOf("=") + 1, file2[i].length).toLowerCase());
        } else if (file2[i].includes("@Cg")) {
            if (file2[i].includes("center")) {
                phrasesArray.push(`scene ` + file2[i].slice(file2[i].indexOf("=") + 1, file2[i].indexOf(" center")));
                currentScene = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].indexOf(" center"));
            } else {
                phrasesArray.push(`scene ` + file2[i].slice(file2[i].indexOf("=") + 1, file2[i].length));
                currentScene = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].length);
            }
        } else if (file2[i].includes("@StopBgm")) {
            phrasesArray.push("stop music");
        } else if (file2[i].includes("@StopSe")) {
            phrasesArray.push("stop sound");
        } else if (file2[i].includes("@StopEnvSe")) {
            phrasesArray.push("stop ambience");
        } else if (file2[i].includes("@PlayBgm")) {
            phrasesArray.push(`play music ` + file2[i].slice(file2[i].indexOf("=") + 1, file2[i].length));
        } else if (file2[i].includes("@PlayEnvSe")) {
            phrasesArray.push(`play ambience ` + file2[i].slice(file2[i].indexOf("=") + 1, file2[i].indexOf("=") + 6).toLowerCase());
        } else if (file2[i].includes("@Char")) {
            let charId;

            if (file2[i].includes("x=")) {
                charId = file2[i].trim().slice(file2[i].indexOf("=") + 1, file2[i].indexOf("x="));
            } else if (file2[i].includes("order=")) {
                charId = file2[i].trim().slice(file2[i].indexOf("=") + 1, file2[i].indexOf("order="));
            } else {
                charId = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].length);
            }

            let charName;

            if (charId.includes("CA")) {
                charName = "SoraS";
            } else if (charId.includes("CB")) {
                charName = "NaoS";
            } else if (charId.includes("CC")) {
                charName = "AkiraS";
            } else if (charId.includes("CD")) {
                charName = "KazuhaS";
            } else if (charId.includes("CE")) {
                charName = "MotokaS";
            } else if (charId.includes("CF")) {
                charName = "RyouheiS";
            } else if (charId.includes("CG")) {
                charName = "YahiroS";
            } else if (charId.includes("CH")) {
                charName = "ClassRepS";
            } else if (charId.includes("CJ")) {
                charName = "ДворецкийS";
            }

            checkSprites();

            let spriteInArray = false;
            let spriteInArrayPos;

            for (let e = 0; e < spritesArray.length; e++) {
                if (charName == spritesArray[e].name) {
                    spriteInArray = true;
                    spriteInArrayPos = e;
                }
            }

            if (spriteInArray) {
                phrasesArray.push(`show ${charName} ${charId} at ${spritesArray[spriteInArrayPos].position}`);
            } else {
                switch (spritesArray.length) {
                    case 2:
                    case 0:
                        phrasesArray.push(`show ${charName} ${charId} at center`);
                        spritesArray.push({name: charName, id: charId, position: "center"});
                        break;
                    case 1:
                        phrasesArray.push(`show ${spritesArray[0].name} ${spritesArray[0].id} at left`);
                        phrasesArray.push(`show ${charName} ${charId} at right`);
                        spritesArray.push({name: charName, id: charId, position: "right"});
                        break;
                }
            }

            checkSprites();
        } else if (file2[i].includes("@ClearChar")) {
            if (file2[i].includes("id=")) {
                const idParam = file2[i].slice(file2[i].indexOf("id=") + 3, file2[i].length);

                const deleteSprite = (spriteName) => {
                    for (let d = 0; d < spritesArray.length; d++) {
                        if (spriteName == spritesArray[d].name) {
                            delete spritesArray[d];

                            spritesArray = spritesArray.filter(element => {
                                return (element != null && element != "" || el == 0);
                            });
                        }
                    }
                }

                if (idParam == "瑛") {
                    phrasesArray.push("hide AkiraS");
                    deleteSprite("AkiraS");
                    checkSprites();
                } else if (idParam == "奈緒") {
                    phrasesArray.push("hide NaoS");
                    deleteSprite("NaoS");
                    checkSprites();
                } else if (idParam == "一葉") {
                    phrasesArray.push("hide KazuhaS");
                    deleteSprite("KazuhaS");
                    checkSprites();
                } else if (idParam == "亮平") {
                    phrasesArray.push("hide RyoheiS");
                    deleteSprite("RyoheiS");
                    checkSprites();
                } else if (idParam == "梢") {
                    phrasesArray.push("hide ClassRepS");
                    deleteSprite("ClassRepS");
                    checkSprites();
                } else if (idParam == "穹") {
                    phrasesArray.push("hide SoraS");
                    deleteSprite("SoraS");
                    checkSprites();
                } else {
                    phrasesArray.push("Ошибка!");
                }
            } else {
                phrasesArray.push(`scene ${currentScene}`);
                spritesArray = [];
            }
        }
    }

    for (let i = 0; i < phrasesArray.length; i++) {
        if (typeof phrasesArray[i] == "object") {
            if (phrasesArray[i][0] == "心の声") {
                phrasesArray[i] = `    "${phrasesArray[i][1]}"`;
            } else {
                phrasesArray[i] = `    ${phrasesArray[i][0]} "${phrasesArray[i][1]}"`;
            }
        } else {
            phrasesArray[i] = `    ${phrasesArray[i]}`;
        }
    }

    renpyFile = renpyFile.concat(phrasesArray);

    if (scenarioFilesNames.indexOf(el) != scenarioFilesNames.length - 1) {
        renpyFile.push("");
        renpyFile.push(`    jump ${scenarioFilesNames[scenarioFilesNames.indexOf(el) + 1].slice(3, scenarioFilesNames[scenarioFilesNames.indexOf(el) + 1].indexOf("."))}`);
    }

    fs.writeFileSync(path.join(__dirname, "output", el + ".rpy"), renpyFile.join("\n"));
});