const radObj = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];

for(let i = 0; i < radObj.length; i++){
    pEl = document.createElement(`p`);
    pEl.innerText = radObj[i];
    pEl.classList.add("radObj");
    pEl.style.backgroundColor = `hsl(${120+20*i}, 90%, 85%)`;
    pEl.style.fontSize = `${1 + i*0.5}em`;
    pEl.style.marginTop = `${10 + i*5 }px`;
    document.body.appendChild(pEl);
}

const containerObj = document.createElement(`div`);
containerObj.classList.add("container");
document.body.appendChild(containerObj);
const arrOne= ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];


for(let i = 0; i < 3; i++){
    divEl = document.createElement(`div`);
    divEl.classList.add("divRows");
    containerObj.appendChild(divEl);
    for(let j = 0; j < arrOne.length; j++) {
        divChild = document.createElement(`div`);
        divChild.classList.add("divChild");

        if(i == 1 ){
            if(j%2 == 1){
                divChild.style.backgroundColor = "black";
                divChild.style.color = "white";            }
        }
        else {
            if(j%2 == 0){
                divChild.style.backgroundColor = "black";
                divChild.style.color = "white";
            }
        }
        switch(i){
            case 0:
                divChild.innerText = 0+j;
                if(j ==  4){
                    divChild.style.backgroundColor = "#a8a8f0";
                }
                divEl.style.textAlign= "start";
                break;
            case 1:
                divChild.innerText = 9-j;
                if(j == 1) {
                    divChild.style.backgroundColor = "#a8a8f0";
                }
                divEl.style.textAlign= "center";
                break;
            case 2:
                divChild.innerText = arrOne[j];
                if(j == 5) {
                    divChild.style.backgroundColor = "#a8a8f0";
                }
                divEl.style.textAlign= "end";
                break;
        }
        
        
        divEl.appendChild(divChild);
    }
}

