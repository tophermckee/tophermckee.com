let colors = ['f8f8f2', '8be9fd', '50fa7b', 'ffb86c', 'ff79c6', 'bd93f9', 'ff5555', 'f1fa8c']

let text = 'hello there and welcome to my website. it\'s really nothing fancy, just a place to try out new things like this fun paragraph builder. you should try it out! reload this page and you\'ll see that the colors change every time'

document.getElementById('main-container').setAttribute('style', 'visibility: hidden;')

document.getElementById('input-field').addEventListener('input', function() {

    document.getElementById('main-container').setAttribute('style', 'visibility: visible;')

    text = document.getElementById('input-field').value

    if (text.length > 0) {
        document.getElementById('main-container').setAttribute('style', 'visibility: visible;')
    } else {
        document.getElementById('main-container').setAttribute('style', 'visibility: hidden;')
    }

    document.getElementById("main-container").innerHTML = ''
    text.split(" ").forEach(word => {
        let new_div = document.createElement("div")
        new_div.setAttribute('class', 'item')
        new_div.setAttribute('style', `color: #${colors[Math.floor(Math.random() * colors.length)]};`)
        new_div.innerHTML = word
    
        document.getElementById("main-container").appendChild(new_div);
    
    })
})

