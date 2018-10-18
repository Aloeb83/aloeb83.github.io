function rarity(rareness) {
    let r = [.55, .28, .12, .04, .01]
    if (rareness.value === "Rare") {
        odds = r[0];
    }else if (rareness.value === "Very-Rare") {
        odds = r[1];
    }else if (rareness.value === "Import") {
        odds = r[2];
    }else if (rareness.value === "Exotic") {
        odds = r[3];
    }else if (rareness.value === "Black-Market") {
        odds = r[4];
    }
    return odds;
}

function painted(item) {
    let p = [.25, 1]
    if (item.value === "Yes") {
        paint = p[0];
    }else if (item.value === "No") {
        paint = p[1];
    }
    return paint;
}



function specificPaint(colors){
    let s = [.08, .15, .23, .31, .38, .46, .54, .62, .69, .77, .85, .92, 1];
    if (colors.value === "1") {
        color = s[0];
    }else if (colors.value === "2") {
        color = s[1];
    }else if (colors.value === "3") {
        color = s[2];
    }else if (colors.value === "4") {
        color = s[3];
    }else if (colors.value === "5") {
        color = s[4];
    }else if (colors.value === "6") {
        color = s[5];
    }else if (colors.value === "7") {
        color = s[6];
    }else if (colors.value === "8") {
        color = s[7];
    }else if (colors.value === "9") {
        color = s[8];
    }else if (colors.value === "10") {
        color = s[9];
    }else if (colors.value === "11") {
        color = s[10];
    }else if (colors.value === "12") {
        color = s[11];
    }else if(colors.value === "13") {
        color = s[12];
    }
    return color;
}

function certification(title) {
    let c = [.25, 1];
    if (title.value == "Correct") {
        ability = c[0];
    }else if (title.value == "Incorrect") {
        ability = c[1];
    }
    return ability;
}

function tiered(tiering) {
    let t = [.07, .2, .2, .27, .27, 1]
    if (tiering.value === "Tier-1") {
        tier = t[0];
    }else if (tiering.value === "Tier-2") {
        tier = t[1];
    }else if (tiering.value === "Tier-3") {
        tier = t[2];
    }else if (tiering.value === "Tier-4") {
        tier = t[3];
    }else if (tiering.value === "Tier-5") {
        tier = t[4];
    }else if (tiering.value === "None") {
        tier = t[5];
    }
    return tier;
}

function amounts(number) {
    let a = [1, 2, 3, 4, 5];
    if (number.value === "One") {
        quanity = a[0];
    }else if (number.value === "Two") {
        quanity = a[1];
    }else if (number.value === "Three") {
        quanity = a[2];
    }else if (number.value === "Four") {
        quanity = a[3];
    }else if (number.value === "Five") {
        quanity = a[4];
    }
    return quanity;
} 

function total() {
    let value = (odds * paint * color * ability * tier)/quanity;
    let percent = Math.round(value*100*100) / 100;
    let keys = Math.ceil(1/value);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("The odds of you getting the item you want is " + percent + "% meaning it'll take about " + keys + " keys to get it.");
    h1.setAttribute('id', 'total')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
}

function reset() {
    document.getElementById('total').remove();

}
