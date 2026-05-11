// Taken from Matt Hyde here: https://stackoverflow.com/a/48226843
function sanitize(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }

function genBracket() {
    let players = [];
    $('#rankings').find("input").each(function () {
        players.push([players.length + 1, sanitize($(this).val()), false])
    });
    

    let groupA = [getPlayer(players, 1)];
    let groupB = [getPlayer(players, 2)];
    let groupC = [];
    let groupD = [];

    let isThirdInA = getRandomInt(0, 1) === 0;

    if (isThirdInA) {
        groupC.push(getPlayer(players, 3))
        groupD.push(getPlayer(players, 4))
    }
    else {
        groupC.push(getPlayer(players, 4))
        groupD.push(getPlayer(players, 3))
    }

    let playingSecond = getRandomInt(4, 8);
    groupB.push(getPlayer(players, playingSecond));
    

    let groupBDTotal = groupD[0][0];
    groupB.forEach(player => {
        groupBDTotal += player[0];
    });

    let lastPos = 18 - groupBDTotal;
    groupD.push(getPlayer(players, lastPos))


    remaining = [];
    players.forEach(player => {
        if (player[2] === false) {
            remaining.push(player);
        }
    });

    let playingFirst = getRandomInt(0, 1);
    groupA.push(remaining[playingFirst]);
    groupC.push(remaining[1 - playingFirst]);

    $("#A1").val(groupA[0][1])
    $("#A2").val(groupA[1][1])

    $("#B1").val(groupB[0][1])
    $("#B2").val(groupB[1][1])

    $("#C1").val(groupC[0][1])
    $("#C2").val(groupC[1][1])

    $("#D1").val(groupD[0][1])
    $("#D2").val(groupD[1][1])
}

function getPlayer(players, position) {
    index = position -1;
    players[index][2] = true;
    return players[index];
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)

}