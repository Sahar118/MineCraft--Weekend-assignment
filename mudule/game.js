const soilAxeButton = document.querySelector('#soil_axe');
const stoneAxeButton = document.querySelector('#stone_axe');
const treeAxeButton = document.querySelector('#tree_axe');
let restartButton = document.querySelector('#restart-button');
let homeButton = document.querySelector('#home-button');
let dirtStorage = document.querySelector('#dirt-storage');
let grassStorage = document.querySelector('#grass-storage');
let flowersStorage = document.querySelector('#flowers-storage');
let logStorage = document.querySelector('#log1-storage');
let leafStorage = document.querySelector('#leaf-storage');
let stoneStorage = document.querySelector('#stone-storage');
let dirtNum = document.querySelector('.dirt-num');
let grassNum = document.querySelector('.grass-num');
let flowersNum = document.querySelector('.flowers-num')
let logNum = document.querySelector('.log1-num')
let leafNum = document.querySelector('.leaf-num')
let stoneNum = document.querySelector('.stone-num')
let storageImg = document.querySelector('.img-storage');
const modal = document.getElementById("myModal");
const startGameBtn = document.getElementById("letStart");
const closeButton = document.querySelector('.close')
const gameBoard = document.querySelector('.game-board');
const container1 = document.querySelector('.Minecraft-container');
gameBoard.addEventListener('click',clickedDiv);
soilAxeButton.addEventListener('click',clickedSoilAxeFunc);
treeAxeButton.addEventListener('click',clickedTreeAxeFunc);
stoneAxeButton.addEventListener('click',clickedStoneAxeFunc);



// Buttons
closeButton.onclick =  function(){
    location.href = '/index.html';
}
startGameBtn.onclick = function(){
    modal.style.display='none';
};

document.getElementById('home-button').onclick =  function(){
    location.href = '/index.html';
}

document.querySelector('#restart-button').addEventListener('click', function(){
    window.location.reload();
    return false;
});

// building the World
let myWOrld = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 2, 9, 3, 9, 4, 9, 5, 9, 6, 9, 2, 9, 3, 9, 4, 9, 5, 9, 2],
    [8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
]

function buildTheWorld(){
    for (let i = 0; i < 20; i++) {
    for (let j = 0; j <= 20; j++) {
    let cell = document.createElement("div");
    let worldMap= myWOrld[i][j];
    gameBoard.appendChild(cell);
    cell.style.gridRow = `${i}/${i++}`;
    cell.style.gridColumn = `${j}/${j++}`;
    i--;
    j--;
    if (worldMap === 0) cell.classList.add("dirt")
    else if (worldMap === 1) cell.classList.add("grass")
    else if (worldMap === 2) cell.classList.add("tulip1")
    else if (worldMap === 3) cell.classList.add("tulip2")
    else if (worldMap === 4) cell.classList.add("tulip3")
    else if (worldMap === 5) cell.classList.add("tulip4")
    else if (worldMap === 6) cell.classList.add("log1")
    else if (worldMap === 7) cell.classList.add("leaf")
    else if (worldMap === 8) cell.classList.add("stone");
    else{cell.classList.add("sky")}
}}}
buildTheWorld()


    let inventory ={
        currentTool:'',
        currentMaterial:'',
        log1: 'log1',
        stone: 'stone',
        dirt: 'dirt',
        tulip1: 'tulip1', 
        tulip2: 'tulip2', 
        tulip3: 'tulip3', 
        tulip4: 'tulip4', 
        grass:'grass',
        leaf:'leaf',
        count:{
        dirtNum: 0,
        grassNum:0,
        flowersNum:0,
        logNum:0,
        leafNum:0,
        stoneNum:0
        },
        materials: [dirtStorage, grassStorage, flowersStorage, logStorage, leafStorage, stoneStorage, soilAxeButton, treeAxeButton, stoneAxeButton ],
        materialsNum: [dirtNum, grassNum, flowersNum, logNum, leafNum, stoneNum]
    }


// clicking in the storage function
function clickingStorage(){
        logStorage.addEventListener('click',()=>{
    inventory.materials.forEach(element=>{
    });
    inventory.currentMaterial = inventory.log1;
    inventory.currentTool = ''
})


    leafStorage.addEventListener('click',()=>{
    inventory.materials.forEach(element=>{
    });
    inventory.currentMaterial = inventory.leaf;
    inventory.currentTool = ''
})


    stoneStorage.addEventListener('click',()=>{
    inventory.materials.forEach(element=>{
    });
    inventory.currentMaterial = inventory.stone;
    inventory.currentTool = ''
})

    grassStorage.addEventListener('click',()=>{
    inventory.materials.forEach(element=>{
        });
    inventory.currentMaterial = inventory.grass;
    inventory.currentTool = ''
})

    dirtStorage.addEventListener('click',()=>{
    inventory.materials.forEach(element=>{
    });
    inventory.currentMaterial = inventory.dirt;
    inventory.currentTool = ''
})
}
clickingStorage()


function clickedDiv(event){
    
    if(inventory.currentTool=='treeAxe'){
        treeAxePickUp(event)
        document.querySelector("body").style = `cursor:url("./Img/tree_axe-removebg-preview.png") , auto`;
    }
    else if(inventory.currentTool=='soilAxe'){
        document.querySelector("body").style = `cursor:url("./Img/soil_axe-removebg-preview.png") , auto`;
        soilAxePickUp(event)
    }
    else if(inventory.currentTool=='stoneAxe'){
        document.querySelector("body").style = `cursor:url("./Img/stone_axe-removebg-preview.png") , auto`;
        StonePickUp(event)
    }putInMat(event)}


function putInMat(element){
    if(inventory.currentMaterial==inventory.log1 && inventory.count.logNum>0 && !element.target.getAttribute('class').includes(inventory.log1)){
        element.target.classList.add(inventory.log1)
        inventory.count.logNum--;
        logNum.textContent=`${inventory.count.logNum}`
    }
    else if(inventory.currentMaterial==inventory.leaf&&inventory.count.leafNum>0&&!element.target.getAttribute('class').includes(inventory.leaf)){

        element.target.classList.add(inventory.leaf)
        inventory.count.leafNum--;
        leafNum.textContent=` ${inventory.count.leafNum}`
    }
    else if(inventory.currentMaterial==inventory.stone&&inventory.count.stoneNum>0&&!element.target.getAttribute('class').includes(inventory.stone)){


        element.target.classList.add(inventory.stone)
        inventory.count.stoneNum--;
        stoneNum.textContent=` ${inventory.count.stoneNum}`
    }
    else if(inventory.currentMaterial==inventory.grass&&inventory.count.grassNum>0&&!element.target.getAttribute('class').includes(inventory.grass)){
        element.target.classList.add(inventory.grass)
        inventory.count.grassNum--;
        grassNum.textContent=`${inventory.count.grassNum}`
    }
    else if(inventory.currentMaterial==inventory.dirt&&inventory.count.dirtNum>0&&!element.target.getAttribute('class').includes(inventory.dirt)){
        element.target.classList.add(inventory.dirt)
        inventory.count.dirtNum--;
        dirtNum.textContent=` ${inventory.count.dirtNum}`
    }
        else if(inventory.currentMaterial==inventory.tulip1&&inventory.count.flowersNum>0&&!element.target.getAttribute('class').includes(inventory.tulip1) ){
        element.target.classList.add(inventory.tulip1)
        inventory.count.flowersNum--;
        flowersNum.textContent=` ${inventory.count.flowersNum}`
    }
    else if(inventory.currentMaterial==inventory.tulip2&&inventory.count.flowersNum>0&&!element.target.getAttribute('class').includes(inventory.tulip2)){
        element.target.classList.add(inventory.tulip2)
        inventory.count.flowersNum--;
        flowersNum.textContent=`${inventory.count.flowersNum}`
    }
    else if(inventory.currentMaterial==inventory.tulip3&&inventory.count.flowersNum>0&&!element.target.getAttribute('class').includes(inventory.tulip3)){
        element.target.classList.add(inventory.tulip3)
        inventory.count.flowersNum--;
        flowersNum.textContent=` ${inventory.count.flowersNum}`
    }
    else if(inventory.currentMaterial==inventory.tulip4&&inventory.count.flowersNum>0&&!element.target.getAttribute('class').includes(inventory.tulip4)){
        element.target.classList.add(inventory.tulip4)
        inventory.count.flowersNum--;
        flowersNum.textContent=` ${inventory.count.flowersNum}`
    }
}

function soilAxePickUp(element){
    if(element.target.getAttribute('class').includes(inventory.grass)){
        inventory.count.grassNum++;
        grassNum.textContent=` ${inventory.count.grassNum}`
        element.target.classList.remove(inventory.grass)

    }
    else if(element.target.getAttribute('class').includes(inventory.dirt)){
        inventory.count.dirtNum++;
        dirtNum.textContent=` ${inventory.count.dirtNum}`
        element.target.classList.remove(inventory.dirt)
    }
    else if(element.target.getAttribute('class').includes(inventory.tulip1)){
        inventory.count.flowersNum++;
        flowersNum.textContent=`${inventory.count.flowersNum}`
        element.target.classList.remove(inventory.tulip1)
    }
    else if(element.target.getAttribute('class').includes(inventory.tulip2)){
        inventory.count.flowersNum++;
        flowersNum.textContent=` ${inventory.count.flowersNum}`
        element.target.classList.remove(inventory.tulip2)
    }
    else if(element.target.getAttribute('class').includes(inventory.tulip3)){
        inventory.count.flowersNum++;
        flowersNum.textContent=` ${inventory.count.flowersNum}`
        element.target.classList.remove(inventory.tulip3)
    }
    else if(element.target.getAttribute('class').includes(inventory.tulip4)){
        inventory.count.flowersNum++;
        flowersNum.textContent=` ${inventory.count.flowersNum}`
        element.target.classList.remove(inventory.tulip4)
    }
}

function StonePickUp(element){
    if(element.target.getAttribute('class').includes(inventory.stone)){
        inventory.count.stoneNum++;
        stoneNum.textContent=` ${inventory.count.stoneNum}`
        element.target.classList.remove(inventory.stone)
    }
}

function treeAxePickUp(element){
    if(element.target.getAttribute('class').includes(inventory.log1)){
        inventory.count.logNum++;
        logNum.textContent=`${inventory.count.logNum}`
        element.target.classList.remove(inventory.log1)
    }
    else if(element.target.getAttribute('class').includes(inventory.leaf)){
        inventory.count.leafNum++;
        leafNum.textContent=`${inventory.count.leafNum}`
        element.target.classList.remove(inventory.leaf)
    }
}

    function clickedStoneAxeFunc(){
        inventory.materials.forEach(element=>{
        });
        inventory.currentTool='stoneAxe';
    }
    function clickedTreeAxeFunc(){
        inventory.materials.forEach(element=>{

        });
        inventory.currentTool='treeAxe';
    }

    function clickedSoilAxeFunc(){
    inventory.materials.forEach(element=>{
    });
    inventory.currentTool='soilAxe';
}

