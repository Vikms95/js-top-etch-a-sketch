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

function addEventListenerNodeList(nodeList,event)
{
    for (var i = 0, len = nodeList.length; i < len; i++)
    {   
        nodeList[i].addEventListener(event, (event) => {
            event.target.className = "grid-item-black";
        });
    };
};

function resetAllGrid()
{   
    let divReference = document.querySelectorAll(".grid-item-black");
    for(i = 0; i < divReference.length; i++)
    {
        divReference[i].className = "grid-item";
    }
    createGrid()
};

function createGrid()
{
    const gridSize = prompt(
        "Select the squares per side of your new grid (from 0 to 100): "
        );
    if(gridSize > 0 && gridSize <= 100)
    {
        deleteRows();
        makeRows(gridSize,gridSize);
        let cellReference = document.querySelectorAll(".grid-item");
        addEventListenerNodeList(cellReference, 'mouseover');
    }
    else
    {
        alert("Invalid input! Grid not created");
        return;
    }
};

const containerReference = document.getElementById("container");
makeRows(10,10);

let cellReference = document.querySelectorAll(".grid-item");
addEventListenerNodeList(cellReference, 'mouseover');

let resetButtonReference = document.querySelector(".reset-button");
resetButtonReference.addEventListener("click",resetAllGrid);



