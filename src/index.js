import React from "react";
import reactDom from "react-dom";
import"./index.css";
let curDate=new Date();
curDate=curDate.getHours();
let greet ='';
const cssStyle={}; 
if(curDate>=1 && curDate<12){
greet="good mornig";
cssStyle.color="geen";

}
 
else if(curDate>=12 && curDate<19){
    greet="good after noon";

    cssStyle.color="blue";
}
else{
    greet="good noght";
    cssStyle.color="dark blue";
}

reactDom.render(
    <>
    <div>
    <h1>HELLO Sir ,<span style={cssStyle}>{greet}</span></h1>
    </div>
 </>,
    document.getElementById("root")
);