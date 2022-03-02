

const pop = document.getElementById("popUp")
pop.className = "popUp"

const container = document.querySelector(".flex")
const filler = Array.from(document.querySelectorAll(".fillers"))
console.log(filler);


filler.forEach(item => {
    item.style.backgroundImage = `url(./assets/${item.id}.jpg)`

})


container.addEventListener("click", (e) => {
    if (pop.style.opacity == "0" && e.target.id && e.target.id != "popUp") { //replace entire section with class
        pop.style.opacity = "1"
        pop.style.zIndex = "2"


        const imgContainer = document.createElement("div")// create class
        imgContainer.className = "imgContainer"
        imgContainer.style.backgroundImage = `url(./assets/${e.target.id}.jpg)`

        const textContainer = document.createElement("div")
        textContainer.className = "textContainer"

        const p = document.createElement("p")
        const h1 = document.createElement("h1")



        arrayOfObjs.filter(item => {
            if (item.name.toLowerCase() == e.target.id){
                p.innerHTML = item.summary
                h1.innerHTML = item.name
            }

        })

        textContainer.appendChild(h1)
        textContainer.appendChild(p)

        pop.appendChild(imgContainer)
        pop.appendChild(textContainer)


    }else {
        pop.style.opacity = "0"
        pop.style.zIndex = "-1"
        while (pop.firstChild) {
            pop.removeChild(pop.firstChild)
        }
    }

    container.classList.toggle = "active"
})
