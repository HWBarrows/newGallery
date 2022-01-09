let sednaProfile = {
    name : "Sedna",
    summary: "Gummies jelly beans ice cream tiramisu bear claw sugar plum dragée. Muffin gummi bears gummi bears tart danish gingerbread wafer.",
    
    // addImage: function imagine (object) {
    //     const img = document.createElement("img");
    //     img.src = `./assets/${object[name]}.jpg`;
    //     document.getElementById("dynoPhoto").appendChild(img);
    // }
}

function imagine (object) {
    const doc = document.createElement("img");
    img.src = `./assets/${object["name"]}.jpg`;
    document.getElementById("dynoPhoto").appendChild(img);
}

function create(object) {
    let summary = object["summary"];
    document.getElementById("dynoPara").appendChild(summary);
}

// const image = document.createElement("image");
// image.src = './assets/sedna.jpg';

// function add_img() { 
// 	var img = document.createElement('img'); 
//     img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
// 	document.getElementById('body').appendChild(img);
// }

function test () {
    // let photo = document.getElementById("dynoPhoto").image;
    // let title = document.getElementById("dynoTitle").h1;;
    // let summary = document.getElementById("dynoPara");

    document.getElementById("dynoPara").innerHTML = create(sednaProfile);
     //document.getElementById("dynoPhoto").innerHTML = imagine(sednaProfile);
}

let container = document.getElementById("clickArea");
container.addEventListener("hover", test);