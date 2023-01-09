const items=["Latte","Uova","Pane","Panettone","Pandoro","Caffè"];
const itemsList=document.getElementById("items");
let i=0;
while(i<items.length){
    console.log(i,items[i])
    itemsList.innerHTML+=`<li>${items[i]}</li>`;
    i++;
}