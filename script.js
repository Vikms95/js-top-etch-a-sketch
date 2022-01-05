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

function deleteRows()
{
    containerReference.textContent = "";
}

//Changing class method (unused)
function addEventListenerNodeList(nodeList,event)
{   

    for (var i = 0, len = nodeList.length; i < len; i++)
    {   
        nodeList[i].addEventListener(event, (event) => {
            event.target.className = "grid-item-black";
        });
    };
}

//Changing attribute method
function addEventListenerNodeListColor(color)
{
    const nodeList = document.querySelectorAll(".grid-item");
    nodeList.forEach((node) => {
        node.addEventListener('mouseover', (e) => {
            e.target.setAttribute("style",`background:${color}`)
        });
    });
}

function addEventListenerNodeListRainbow()
{
    const nodeList = document.querySelectorAll(".grid-item");
    nodeList.forEach((node) => {
        node.addEventListener('mouseover', (e) => {
            let color = randomColor();
            e.target.setAttribute("style",`background:${color}`)
        });
    });
}

function eraseGrid()
{
    eraserButtonReference.addEventListener("click", () => {
        addEventListenerNodeListColor("white");
    });
}

function resetGrid()
{   
    let divReference = document.querySelectorAll(".grid-item-black");
    for(i = 0; i < divReference.length; i++)
    {
        divReference[i].className = "grid-item";
    }
    createGrid()
}

function createGrid()
{
    const gridSize = prompt(
        "Select the squares per side of your new grid (from 0 to 100): "
    );
    if(gridSize > 0 && gridSize <= 100)
    {
        deleteRows();
        makeRows(gridSize,gridSize);
        eraseGrid();
        addEventListenerNodeListColor("purple");
    }
    else
    {
        alert("Invalid input! Grid not created");
        return;
    }
}

function randomColor()
{
    let o = Math.round, r = Math.random, s=255;
    return 'rgba(' + o(r() *s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const containerReference = document.getElementById("container");
makeRows(10,10);

addEventListenerNodeListColor("purple");

const resetButtonReference = document.querySelector(".reset-button");
resetButtonReference.addEventListener("click", resetGrid);

const eraserButtonReference = document.querySelector(".eraser-button");
eraserButtonReference.addEventListener("click", () => {
    addEventListenerNodeListColor("white");
});

const randomButtonReference = document.querySelector(".random-button");
randomButtonReference.addEventListener("click", () => {
    let color = randomColor();
    addEventListenerNodeListColor(color);
})

const rainbowButtonReference = document.querySelector(".rainbow-button");
rainbowButtonReference.addEventListener("click", () => {
    addEventListenerNodeListRainbow();
})
