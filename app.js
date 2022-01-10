let list = [
    {
    name: "Sedna",
    src: "assets/sedna.jpg",
    text: "Shot in the dark"
    }, 
    {
        
    }
]

class Goddess {
constructor (name, src, text){
    this.name = name;
    this.src = src;
    this.text = text;
}
}


let anyawu = new Goddess ("Anyawu", "assets/anyawu.jpg", "some text")

console.log(anyawu);


// function imagine(object) {
//     const doc = document.createElement("img");
//     img.src = `./assets/${object["name"]}.jpg`;
//     document.getElementById("dynoPhoto").appendChild(img);
// }

// function create(object) {
//     let summary = object["summary"];
//     document.getElementById("dynoPara").appendChild(summary);
// }