const containerReference = document.getElementById("container");

function makeRows(rows,cols)
{
    containerReference.style.setProperty('--grid-rows',rows);
    containerReference.style.setProperty('--grid-cols',cols);
    for(c = 0; c < (rows * cols); c++)
    {  
        let cell = document.createElement("div");
        containerReference.appendChild(cell).className = "grid-item";
    };
};

makeRows(16,16);

let divReference = document.querySelector(".grid-item");

divReference.addEventListener('click', function(e){
    e.target.style.color = "purple";
    console.log(e.target.style.color);
});
