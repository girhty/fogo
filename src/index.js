function Main(){
  function SortDate(event){
      let value = event.target.value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "");
    let formattedValue = "";
    if (value.length > 2) {
      formattedValue +=
        value.substr(0, 2) + "/" + value.substr(2, 2);
      if (value.length > 4) {
        formattedValue += value.substr(4);
      }
    } else {
      formattedValue += value;
    }
    event.target.value = formattedValue;
  }
  function SortCard(event){
    let value = event.target.value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "");
    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " ";
      }
      formattedValue += value.charAt(i);
    }
    event.target.value = formattedValue;
  }
  async function Sub(event){
    event.preventDefault()
    const I=event.srcElement
      const info={
        card_number:I[1].value.replaceAll(" ",""),
        name:I[0].value,
        csv:I[2].value,
        exp:I[3].value,
        amount:I[4].value,
      }
      await fetch("/Check?id=Card",{method:"POST",body:JSON.stringify(info)}).then((Res)=>console.log(Res))
  }
  function CheckDate(){
    const deed=document.getElementById("date").value
    if (deed.length===5){
    console.log(deed.slice(3))
      if (Number(deed.slice(3))<=22){
        document.getElementById("src-inp").innerHTML="Cant Be In The Past"
        }
      else{
        document.getElementById("src-inp").innerHTML=""
      }
    }
  }
  document.getElementById("date").addEventListener('input',SortDate)
  document.getElementById("CCNUM").addEventListener('input',SortCard)
  document.getElementById("Sub-form").addEventListener('submit',Sub)
  document.getElementById("date").addEventListener("input",CheckDate)

  }

// var alreadyrunflag=0 //flag to indicate whether target function has already been run
 
// if (document.addEventListener)
//       document.addEventListener("DOMContentLoaded", function(){alreadyrunflag=1; document.write('<script src="https://cdn.tailwindcss.com"></script>')}, false)
// else if (document.all && !window.opera){
//       document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>')
//       var contentloadtag=document.getElementById("contentloadtag")
//       contentloadtag.onreadystatechange=function(){
//         if (this.readyState=="complete"){
//             alreadyrunflag=1
//             document.write('<script src="https://cdn.tailwindcss.com"></script>')
//         }
//     }
// }
 
window.onload=function(){
    Main()
}