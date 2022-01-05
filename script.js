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

const containerReference = document.getElementById("container");

makeRows(16,16);

//-----

function addEventListenerNodeList(nodeList,event)
{
    for (var i = 0, len = nodeList.length; i < len; i++)
    {   
        nodeList[i].addEventListener(event, (event) => {
            event.target.className = "grid-item-black";
        });
    };
};

let cellReference = document.querySelectorAll(".grid-item");
// console.log(cellReference);
addEventListenerNodeList(cellReference, 'mouseover');




