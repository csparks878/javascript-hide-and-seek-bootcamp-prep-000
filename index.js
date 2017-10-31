function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
    return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
    var ranked = document.querySelectorAll("ul.ranked-list li");
    var result;
    for (var i = 0; i < ranked.length; i++) {
        result = parseInt(ranked[i].innerHTML) + n;
        console.log(result);
        ranked[i].innerHTML = result;
    }
    return ranked;
}

function deepestChild(){
  return document.querySelector("div#grand-node div div div div");
}
