let list = [
    {
    name: "Sedna",
    src: "assets/sedna.jpg",
    text: "Shot in the dark"
    }, 
    {
        
    }
]

data.forEach(({name, src, text }) => {
    const div = document.createElement("div")
    div.id = name.toLowerCase()
    div.style = "text-align: center;"
  
    const h1 = document.createElement("h1")
    h1.innerText = name
    const img = document.createElement("img")
    img.src = src
    img.alt = name
    const p = document.createElement("p")
    p.innerHTML = text
    
    div.appendChild(h1)
    div.appendChild(img)
    div.appendChild(p)
  
    main.appendChild(div)
  
  })