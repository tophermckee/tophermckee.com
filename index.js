

let text = 'this is a line of text that I\'m going to split up'


text.split(" ").forEach(word => {
    let new_div = document.createElement("div")
    new_div.setAttribute('class', 'item')
    new_div.innerHTML = word

    document.getElementById("main-container").appendChild(new_div);

})