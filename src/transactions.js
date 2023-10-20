

//   {data?.transactions.map((t)=>
//     (<tr>
//     <td className="px-4 py-2 whitespace-nowrap">
//         {t.T_Amount}
//     </td>
//     <td className="px-4 py-2 whitespace-nowrap">
//         {t.date}
//     </td>
//     <td className="px-4 py-2 whitespace-nowrap">
//         {t.Am_After}
//     </td>
//     </tr>)
// )}



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