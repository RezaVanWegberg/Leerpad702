var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'click here';
document.body.appendChild(btn);

// schijf hier tussen je code



function buttonFunction(event){
    if(document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "yellow"
        btn.innerHTML = "Switch off"
        console.log("Switch on")
    } else {
        document.body.style.backgroundColor = "black"
        btn.innerHTML = "Switch on"
        console.log("Switch off")

    }

}

btn.onclick = buttonFunction;



// schijf hier tussen je code