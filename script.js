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
initFile.push(`    $ ClassRep = Character("Староста")`);
initFile.push(`    $ All = Character("Все")`);
initFile.push(`    $ PostOfficeClerk = Character("Почтальон")`);
initFile.push(`    $ DeliveryPerson = Character("Доставщик")`);
initFile.push(`    $ Haruka = Character("Харука")`);
initFile.push(`    $ Sora = Character("Сора")`);
initFile.push(`    $ Akira = Character("Акира")`);
initFile.push(`    $ Kazuha = Character("Казуха")`);
initFile.push(`    $ Ryouhei = Character("Рёхэй")`);
initFile.push(`    $ Classmate = Character("Одноклассник")`);
initFile.push(`    $ Umpire = Character("Судья")`);
initFile.push(`    $ Clerk = Character("Кассир")`);
initFile.push(`    $ Nao = Character("Нао")`);
initFile.push("");
initFile.push("    transform right:\n        xalign 0.90\n        yalign 1.0");
initFile.push("    transform left:\n        xalign 0.10\n        yalign 1.0");
initFile.push("    transform cright:\n        xalign 0.75\n        xanchor 0.5\n        yanchor 0.0");
initFile.push("    transform cleft:\n        xalign 0.25\n        xanchor 0.5\n        yanchor 0.0");
initFile.push("    transform fright:\n        xalign 0.97\n        xanchor 0.5\n        yanchor 0.0");
initFile.push("    transform fleft:\n        xalign 0.03\n        xanchor 0.5\n        yanchor 0.0");
initFile.push("");
initFile.push("    transform jumpp:\n        linear 0.15 yoffset 20\n        linear 0.15 yoffset 0");
initFile.push("    transform left_right:\n        linear 0.10 xoffset -20\n        linear 0.10 xoffset 20\n        linear 0.10 xoffset 0");
initFile.push("");
initFile.push("    transform BG_top_to_botoom:\n        yalign 0.0\n        linear 25 yalign 1.0");
initFile.push("    transform BG_left_to_right:\n        xalign 0.0\n        linear 25 xalign 1.0");
initFile.push("    transform BG_left_to_right_zoom:\n        parallel:\n            zoom 1.5\n        parallel:\n            xalign 0.0\n            linear 25 xalign 1.0");
initFile.push("");
initFile.push("    image BLACK = \"#000\"");
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
        initFile.push(`    image ButlerS ${spriteId}:\n        ${path}/${el}\"\n        yanchor 0.0\n        yalign 1.0\n        xanchor 0.5`);
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

    /* renpyFile.push("init:"); */

    const file = fs.readFileSync(path.join(__dirname, "scenario", el), "utf16le").toString().split("\n");

    for (let i = 0; i < file.length; i++) {
        file[i] = file[i].replace("\r", "");
    }

    let file2 = file.filter(element => element.trim() != "");

    let namesArray = [];
    let spritesArray = [];

    function isSpriteInArray(spriteName) {
        for (let e = 0; e < spritesArray.length; e++) {
            if (spriteName == spritesArray[e].name) {
                return [true, e];
            } else {
                return [false, -1]
            }
        }
    }

    /* for (let i = 0; i < file2.length; i++) {
        file2[i] = file2[i].replace(/["]+/g, "'");

        if (file2[i].includes("@Talk")) {
            let charName;

            if (file2[i].includes("voice=")) {
                charName = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].indexOf("voice") - 1);
            } else {
                charName = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].length);
            }

            switch (charName) {
                case "Class Rep":
                case "Class　Rep":
                    charName = "$ ClassRep = Character(\"Староста\")";
                    break;
                case "Ryouehi and Akira and Haruka and Sora":
                case "Ryouehi　and　Akira　and　Haruka　and　Sora":
                    charName = "$ All = Character(\"Все\")";
                    break;
                case "Post Office Clerk":
                case "Post　Office　Clerk":
                    charName = "$ PostOfficeClerk = Character(\"Почтальон\")";
                    break;
                case "Delivery Person":
                case "Delivery　Person":
                    charName = "$ DeliveryPerson = Character(\"Доставщик\")";
                    break;
                case "Haruka":
                    charName = "$ Haruka = Character(\"Харука\")";
                    break;
                case "Sora":
                    charName = "$ Sora = Character(\"Сора\")";
                    break;
                case "Akira":
                    charName = "$ Akira = Character(\"Акира\")";
                    break;
                case "Kazuha":
                    charName = "$ Kazuha = Character(\"Казуха\")";
                    break;
                case "Ryouhei":
                    charName = "$ Ryouhei = Character(\"Рёхэй\")";
                    break;
                case "Classmate":
                    charName = "$ Classmate = Character(\"Одноклассник\")";
                    break;
                case "Umpire":
                    charName = "$ Umpire = Character(\"Амбассадор\")";
                    break;
                case "Clerk":
                    charName = "$ Clerk = Character(\"Секретарь\")";
                    break;
                case "Nao":
                    charName = "$ Nao = Character(\"Нао\")";
                    break;
            }

            if (charName != "心の声") {
                namesArray.push(charName);
            }
        }
    }

    namesArray = namesArray.filter((el, id) => namesArray.indexOf(el) == id);

    for (let i = 0; i < namesArray.length; i++) {
        namesArray[i] = "    " + namesArray[i];
    }

    renpyFile = renpyFile.concat(namesArray); */
    renpyFile.push(`label ${el.slice(3, el.indexOf("."))}:`);

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
                if (file2[g].includes("@Hitret") || file2[g].includes("@HitWait")) {
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
                charName = "All";
            } else if (charName == "Post Office Clerk" || charName == "Post　Office　Clerk") {
                charName = "PostOfficeClerk";
            } else if (charName == "Delivery Person" || charName == "Delivery　Person") {
                charName = "DeliveryPerson";
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
                const sceneName = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].indexOf(" center"));

                if (sceneName[sceneName.length - 1] == "L") {
                    phrasesArray.push(`scene ${sceneName.slice(0, sceneName.length - 1)} at BG_left_to_right_zoom with Dissolve(2)`);
                } else {
                    phrasesArray.push(`scene ${sceneName} with Dissolve(2)`);
                }

                currentScene = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].indexOf(" center"));
            } else {
                const sceneName = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].length);

                if (sceneName[sceneName.length - 1] == "L") {
                    phrasesArray.push(`scene ${sceneName.slice(0, sceneName.length - 1)} at BG_left_to_right_zoom with Dissolve(2)`);
                } else {
                    phrasesArray.push(`scene ${sceneName} with Dissolve(2)`);
                }

                currentScene = file2[i].slice(file2[i].indexOf("=") + 1, file2[i].length);
            }
        } else if (file2[i].includes("@StopBgm")) {
            phrasesArray.push("stop music fadeout 3");
        } else if (file2[i].includes("@StopSe")) {
            phrasesArray.push("stop sound");
        } else if (file2[i].includes("@StopEnvSe")) {
            phrasesArray.push("stop ambience fadeout 3");
        } else if (file2[i].includes("@PlayBgm")) {
            phrasesArray.push(`play music ${file2[i].slice(file2[i].indexOf("=") + 1, file2[i].length)} fadein 3`);
        } else if (file2[i].includes("@PlayEnvSe")) {
            phrasesArray.push(`play ambience ${file2[i].slice(file2[i].indexOf("=") + 1, file2[i].indexOf("=") + 6).toLowerCase()} fadein 3`);
        } else if (file2[i].includes("@MoveCamera")) {
            if (file2[i].includes("x=0")) {
                if (currentScene[currentScene.length - 1] == "L") {
                    phrasesArray.push(`scene ${currentScene.slice(0, currentScene.length - 1)} at BG_top_to_botoom with Dissolve(2)`)
                } else {
                    phrasesArray.push(`scene ${currentScene} at BG_top_to_botoom with Dissolve(2)`)
                }
            } else if (file2[i].includes("y=0")) {
                if (currentScene[currentScene.length - 1] == "L") {
                    phrasesArray.push(`scene ${currentScene.slice(0, currentScene.length - 1)} at BG_left_to_right with Dissolve(2)`)
                } else {
                    phrasesArray.push(`scene ${currentScene} at BG_left_to_right with Dissolve(2)`)
                }
            }
        } else if (file2[i].includes("@action id=")) {
            let actionName = file2[i].slice(file2[i].indexOf("action=") + 7, file2[i].indexOf("cycle="));
            actionName = actionName.slice(0, actionName.indexOf(" "));
            const actionCharName = file2[i].slice(11, file2[i].indexOf("action=") - 1);

            let actionCharSprite;

            switch (actionCharName) {
                case "梢":
                    actionCharSprite = "ClassRepS";
                    break;
                case "穹":
                    actionCharSprite = "SoraS";
                    break;
                case "瑛":
                    actionCharSprite = "AkiraS";
                    break;
                case "奈緒":
                    actionCharSprite = "NaoS";
                    break;
                case "一葉":
                    actionCharSprite = "KazuhaS";
                    break;
                case "亮平":
                    actionCharSprite = "RyoheiS";
                    break;
            }

            let lastBG;

            for (let z = i; z != 0; z--) {
                if (file2[z].includes("@Cg file=")) {
                    lastBG = file2[z].slice(9, file2[z].length);

                    if (lastBG.includes(" ")) {
                        lastBG = lastBG.slice(0, lastBG.indexOf(" "));
                    }

                    break;
                }
            }

            switch (actionName) {
                case "ActionWave":
                    phrasesArray.push(`scene ${lastBG} with hpunch`);
                    break;
                case "ActionAdvJump":
                    if (isSpriteInArray(actionCharSprite)[0]) {
                        phrasesArray.push(`show ${actionCharSprite} ${spritesArray[isSpriteInArray(actionCharSprite)[1]].id} at jumpp, ${spritesArray[isSpriteInArray(actionCharSprite)[1]].position}`);
                    }

                    break;
                case "ActionAdvHop":
                case "ActionAdvWave":
                    if (isSpriteInArray(actionCharSprite)[0]) {
                        phrasesArray.push(`show ${actionCharSprite} ${spritesArray[isSpriteInArray(actionCharSprite)[1]].id} at left_right, ${spritesArray[isSpriteInArray(actionCharSprite)[1]].position}`);
                    }

                    break;
            }
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
                charName = "ButlerS";
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
                phrasesArray.push(`show ${charName} ${charId} at ${spritesArray[spriteInArrayPos].position} with Dissolve(0.5)`);
            } else {
                switch (spritesArray.length) {
                    case 2:
                    case 0:
                        phrasesArray.push(`show ${charName} ${charId} at center with Dissolve(0.5)`);
                        spritesArray.push({ name: charName, id: charId, position: "center" });
                        break;
                    case 1:
                        phrasesArray.push(`show ${spritesArray[0].name} ${spritesArray[0].id} at left with Dissolve(0.5)`);
                        phrasesArray.push(`show ${charName} ${charId} at right with Dissolve(0.5)`);
                        spritesArray.push({ name: charName, id: charId, position: "right" });
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
                    phrasesArray.push("hide AkiraS with Dissolve(0.5)");
                    deleteSprite("AkiraS");
                    checkSprites();
                } else if (idParam == "奈緒") {
                    phrasesArray.push("hide NaoS with Dissolve(0.5)");
                    deleteSprite("NaoS");
                    checkSprites();
                } else if (idParam == "一葉") {
                    phrasesArray.push("hide KazuhaS with Dissolve(0.5)");
                    deleteSprite("KazuhaS");
                    checkSprites();
                } else if (idParam == "亮平") {
                    phrasesArray.push("hide RyoheiS with Dissolve(0.5)");
                    deleteSprite("RyoheiS");
                    checkSprites();
                } else if (idParam == "梢") {
                    phrasesArray.push("hide ClassRepS with Dissolve(0.5)");
                    deleteSprite("ClassRepS");
                    checkSprites();
                } else if (idParam == "穹") {
                    phrasesArray.push("hide SoraS with Dissolve(0.5)");
                    deleteSprite("SoraS");
                    checkSprites();
                } else {
                    phrasesArray.push("Ошибка!");
                }
            } else {
                phrasesArray.push(`scene ${currentScene} with Dissolve(1)`);
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

    for (let i = 0; i < renpyFile.length; i++) {
        if (renpyFile[i].trim().slice(0, 4) == "show") {
            const charName = renpyFile[i].trim().slice(4, renpyFile[i].trim().indexOf("_") + 4);

            if (renpyFile[i + 1].includes(charName)) {
                delete renpyFile[i];
            }

            renpyFile = renpyFile.filter(element => {
                return (element != null && element != "" || el == 0);
            });
        }

        if (renpyFile[i].trim().includes("scene") && (renpyFile[i + 1].trim().includes("BG_top_to_botoom") || renpyFile[i + 1].trim().includes("BG_left_to_right"))) {
            delete renpyFile[i];

            renpyFile = renpyFile.filter(element => {
                return (element != null && element != "" || el == 0);
            });
        }
    }

    fs.writeFileSync(path.join(__dirname, "output", el + ".rpy"), renpyFile.join("\n"));
});

console.log("KiriKiri engine files have been successfully rebuilt on Ren'Py.");