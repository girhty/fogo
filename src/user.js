function Handle(){
    const el=document.getElementById("drop").className
    if(el.includes("hidden")){
        const s=el.replace("hidden","flex flex-col")
        document.getElementById("drop").className=s
    }else{
        const s2=el.replace("flex flex-col","hidden")
        document.getElementById("drop").className=s2
    }
}

function Menu(){
    document.getElementById("Menu").addEventListener("click",Handle)
}


window.onload=function(){
    Menu()
}