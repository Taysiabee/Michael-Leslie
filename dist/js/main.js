"use strict";var michael=document.querySelector(".michael-scott"),leslie=document.querySelector(".leslie-knope"),leslieScore=0,michaelScore=0;axios.post("http://circuslabs.net:3000/data/michael",{type:"number",value:"Hello World"}).then(function(e){console.log(e)}),michael.addEventListener("click",function(){axios.post("http://circuslabs.net:3000/data/michael",{type:"number",action:"++"}).then(function(e){console.log(e),fetchResults()})}),leslie.addEventListener("click",function(){axios.post("http://circuslabs.net:3000/data/leslie",{type:"number",action:"++"}).then(function(e){console.log(e),fetchResults()})});var fetchResults=function(){axios.get("http://circuslabs.net:3000/data/michael").then(function(e){e.data.data.value}).catch(function(e){console.warn("axios encountered an error!",e)})};
//# sourceMappingURL=main.js.map