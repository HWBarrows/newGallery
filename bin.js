

const pop = document.getElementById("popUp")
pop.className = "popUp"

const container = document.querySelector(".flex")
const filler = Array.from(document.querySelectorAll(".fillers"))



filler.forEach(item => {
    item.style.backgroundImage = `url(./assets/${item.id}.jpg)`

})

const makePopup = (e) => {
    if (pop.style.opacity == "0" && pop.style.zIndex == "-1" && e.target.id && e.target.id != "popUp") { //replace entire section with class
        pop.style.opacity = "1"
        pop.style.zIndex = "2"


        const imgContainer = document.createElement("div")// create class
        imgContainer.className = "imgContainer"
        imgContainer.style.backgroundImage = `url(./assets/${e.target.id}.jpg)`

        const textContainer = document.createElement("div")
        textContainer.className = "textContainer"

        const h1 = document.createElement("h1")
        const p = document.createElement("p")
        const h4 = document.createElement("h4")
        const pLink = document.createElement("p")
        



        arrayOfObjs.filter(item => {
            if (item.name.toLowerCase() == e.target.id){
                h1.innerHTML = item.name 
                h4.innerText = `Artwork by ${item.artist}`
                p.innerHTML = item.summary
                
                pLink.innerHTML = `<a href=${item.link} target="_blank">Link to original artwork</a>`
            }

        })

        textContainer.appendChild(h1)
        textContainer.appendChild(h4)
        textContainer.appendChild(p)
        
        textContainer.appendChild(pLink)

        pop.appendChild(imgContainer)
        pop.appendChild(textContainer)
        container.removeEventListener("click", makePopup)


    }else {
        pop.style.opacity = "0"
        pop.style.zIndex = "-1"
        while (pop.firstChild) {
            pop.removeChild(pop.firstChild)
        }
    }

    // container.classList.toggle = "active"
}
container.addEventListener("click", makePopup)
