

const pop = document.getElementById("popUp")

const imgContainer = document.getElementById("imgContainer")
const title = document.getElementById("title")
const text = document.getElementById("text")
const link = document.getElementById("link")
const close = document.getElementById("close")

const container = document.querySelector(".flex")
const filler = Array.from(document.querySelectorAll(".fillers"))



filler.forEach(item => {
    item.style.backgroundImage = `url(./assets/${item.id}.jpg)`

})

const closePop = ()=> {
    container.addEventListener("click", makePopup)
}

const makePopup = (e) => {
    if(pop.className =="hide"){
    
        pop.className = "popUp"
        imgContainer.style.backgroundImage = `url(./assets/${e.target.id}.jpg)`

        arrayOfObjs.filter(item => {
            if (item.name.toLowerCase() == e.target.id){
                title.innerText = item.name
                text.innerText = `by ${item.artist} \n ${item.summary}`
                link.innerHTML = `<a href=${item.link} target="_blank">Link to original artwork</a>`
            }
        })
        container.removeEventListener("click", makePopup)
        
        close.addEventListener("click", closePop)

    }else {
        pop.className = "hide"
    }
}
container.addEventListener("click", makePopup)
