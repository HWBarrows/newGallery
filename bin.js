

const pop = document.getElementById("popUp")
pop.className = "popUp"
//pop.style.display = "none"
const container = document.querySelector(".flex")
const filler = Array.from(document.querySelectorAll(".fillers"))
console.log(filler);


filler.forEach(item => {
    item.style.backgroundImage = `url(./assets/${item.id}.jpg)`
    item.style.backgroundSize = "cover"
    item.style.backgroundPosition = "center"
})

container.addEventListener("click", (e) => {
    if (pop.style.display == "none" && e.target.id) { //replace entire section with class
        pop.style.display = "flex"
        // pop.style.justifyContent = "space-evenly"
        // pop.style.alignItems = "center"
        // pop.style.background = "rgba(18, 17, 18, 0.88)"
        // pop.style.color = "white"
      
        const imgContainer = document.createElement("div")// create class
        imgContainer.className = "imgContainer"
        imgContainer.style.backgroundImage = `url(./assets/${e.target.id}.jpg)`
        // imgContainer.style.backgroundSize = "cover"
        // imgContainer.style.backgroundPosition = "center"
        // imgContainer.style.height = "90%"
        //imgContainer.style.width = "25vw"
        //const img = document.createElement("img")
        const textContainer = document.createElement("div")
        textContainer.className = "textContainer"
        // textContainer.style.width = "25vw"
        // textContainer.style.display = "flex"
        // textContainer.style.flexDirection = "column"
        const p = document.createElement("p")
        const h1 = document.createElement("h1")
    
        // function imgSrc (item){
        //     return `./assets/${item.toLowerCase()}.jpg`
        // } 
        // img.src = imgSrc(e.target.id)
        // img.alt = e.target.id

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
        //pop.appendChild(p)
        
    }else {
        pop.style.display = "none"
        while (pop.firstChild) {
            pop.removeChild(pop.firstChild)
        }
    }

    container.classList.toggle = "active"
})

