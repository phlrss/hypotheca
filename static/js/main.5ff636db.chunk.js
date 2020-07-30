(this.webpackJsonphypotheca=this.webpackJsonphypotheca||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/landing_image.43e45c65.svg"},19:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),o=a.n(r),s=(a(24),a(25),a(7)),m=a(5),c=a(1),u=(a(26),function(){return l.a.createElement("div",{className:"w-screen h-16 bg-green-600 text-white flex items-center justify-between p-12 border-box shadow"},l.a.createElement(m.b,{to:"/hypotheca",className:"text-2xl font-bold"},"Hypotheca.io"),l.a.createElement("div",{className:"hidden lg:block"},l.a.createElement("span",{className:"mx-3"},"Calculate Mortgage"),l.a.createElement("span",{className:"mx-3"},"About Us")),l.a.createElement("button",{className:"block lg:hidden"},l.a.createElement("svg",{className:"fill-current h-5 w-5",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))))}),i=a(4),p=a(17),d=a.n(p),g=a(8),b=a.n(g),f=function(e){return(Math.round(100*e)/100).toFixed(2)},E=function(e,t,a,n,l){if(n||(n=0),l||(l=0),0==e)return-(a+n)/t;var r=Math.pow(1+e,t),o=e/(r-1)*-(a*r+n);return 1==l&&(o/=1+e),o},h={mortgageAmount:"",interestRate:"",amortization:"",frequency:"",lumpSum:!1,lumpSumAmount:"",startDate:"",stepNum:0,error:!1,errorMessage:""},y={0:"mortgageAmount",1:"interestRate",2:"amortization",3:"frequency",4:"lumpSum",5:"lumpSumAmount",6:"startDate"},x=function(e,t){switch(t.type){case"UPDATE_MORTGAGE":return Object(i.a)({},e,{mortgageAmount:t.mortgage,error:!1});case"UPDATE_INTEREST":return Object(i.a)({},e,{interestRate:t.interest,error:!1});case"UPDATE_AMORTIZATION":return Object(i.a)({},e,{amortization:t.amortization,error:!1});case"UPDATE_FREQUENCY":return Object(i.a)({},e,{frequency:t.frequency,error:!1});case"UPDATE_LUMP_SUM":return Object(i.a)({},e,{lumpSum:[!0,"true"].includes(t.lumpSum),error:!1});case"UPDATE_LUMP_AMOUNT":return Object(i.a)({},e,{lumpSumAmount:t.lumpSumAmount,error:!1});case"UPDATE_START_DATE":return Object(i.a)({},e,{startDate:t.date,error:!1});case"ERROR_STATE":return Object(i.a)({},e,{error:!0,errorMessage:t.message});case"PREV_STEP":var a=e.stepNum-1;return 6!==e.stepNum||e.lumpSum?0===e.stepNum&&(a=e.stepNum):a=4,Object(i.a)({},e,{stepNum:a,error:!1});case"NEXT_STEP":var n=e.stepNum+1;return 4!==e.stepNum||e.lumpSum?6===e.stepNum&&(n=e.stepNum):n=6,Object(i.a)({},e,{stepNum:n});default:throw new Error}},N=function(e){var t=e.setResultsTable,a=Object(n.useReducer)(x,h),r=Object(s.a)(a,2),o=r[0],m=r[1],c=function(){var e=o[y[o.stepNum]];e||[3,4].includes(o.stepNum)?parseInt(e)||[3,4].includes(o.stepNum)?m({type:"NEXT_STEP"}):m({type:"ERROR_STATE",message:"Invalid symbols in field"}):m({type:"ERROR_STATE",message:"Value is required"})};return l.a.createElement("div",{className:"flex flex-col w-full max-w-xl p-2"},l.a.createElement("span",{className:"mt-5 mb-2 font-bold text-gray-700"},"Just answer a few simple questions:"),l.a.createElement("div",{className:"p-5 bg-white rounded flex flex-col shadow-md w-full"},0===o.stepNum&&l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"What is your mortgage amount?"),l.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"$200000",value:o.mortgageAmount,onChange:function(e){return m({type:"UPDATE_MORTGAGE",mortgage:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?c():null}})),1===o.stepNum&&l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"What is your stated interest rate?"),l.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"2.25%",value:o.interestRate,onChange:function(e){return m({type:"UPDATE_INTEREST",interest:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?c():null}})),2===o.stepNum&&l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"What is your mortgage amortization term (in years)?"),l.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"25",value:o.amortization,onChange:function(e){return m({type:"UPDATE_AMORTIZATION",amortization:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?c():null}})),3===o.stepNum&&l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"How often will you be making payments?"),l.a.createElement("select",{onChange:function(e){return m({type:"UPDATE_FREQUENCY",frequency:e.target.value})},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"},l.a.createElement("option",{value:"monthly"},"Monthly"),l.a.createElement("option",{value:"biweekly"},"Bi-Weekly"),l.a.createElement("option",{value:"weekly"},"Weekly"))),4===o.stepNum&&l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"Will you be making additional lump-sum payments?"),l.a.createElement("div",null,l.a.createElement("label",{className:"text-gray-700 mr-5 font-bold inline-flex items-center"},"No",l.a.createElement("input",{id:"check-no",onChange:function(e){e.target.checked&&m({type:"UPDATE_LUMP_SUM",lumpSum:e.target.value})},value:"false",className:"ml-1",type:"radio",name:"lumpsum"})),l.a.createElement("label",{className:"text-gray-700 mr-5 font-bold inline-flex items-center"},"Yes",l.a.createElement("input",{id:"check-yes",onChange:function(e){e.target.checked&&m({type:"UPDATE_LUMP_SUM",lumpSum:e.target.value})},value:"true",className:"ml-1",type:"radio",name:"lumpsum"})))),5===o.stepNum&&l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"What is the additional lump-sum amount per regularly scheduled payment?"),l.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"$250",value:o.lumpSumAmount,onChange:function(e){return m({type:"UPDATE_LUMP_AMOUNT",lumpSumAmount:e.target.value})}})),6===o.stepNum&&l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"What is your mortgage start date?"),l.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"YYYY-MM-DD",value:o.startDate,onChange:function(e){return m({type:"UPDATE_START_DATE",date:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?c():null}})),o.error&&l.a.createElement("label",{className:"text-sm text-red-600 font-bold mb-3"},"*",o.errorMessage),l.a.createElement("div",{className:"w-full flex justify-between"},l.a.createElement("button",{disabled:0===o.stepNum,onClick:function(){return m({type:"PREV_STEP"})},className:d()("bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",{"cursor-not-allowed opacity-50":0===o.stepNum})},"Previous"),6!==o.stepNum&&l.a.createElement("button",{onClick:function(){return c()},className:"bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Next"),6===o.stepNum&&l.a.createElement("button",{onClick:function(){return t(function(e){var t=[],a=e.mortgageAmount,n=e.interestRate,l=e.amortization,r=e.lumpSumAmount,o=e.frequency,s=e.startDate,m=0;r&&(m=parseInt(r)),console.log(b()(s).format("ll"));var c,u=12;switch(o){case"monthly":u=12,c={num:1,type:"months"};break;case"biweekly":u=26,c={num:14,type:"days"};break;case"weekly":u=52,c={num:7,type:"days"};break;default:u=12,c={num:1,type:"months"}}for(var i=l*u,p=Math.pow(1+n/100/2,2/u)-1,d=0;d<i;d++){var g=0===d?parseInt(a):t[d-1].endingBalance,h=0===d?b()(s).format("MMM DD YYYY"):b()(t[d-1].currentDate).add(c.num,c.type).format("MMM DD YYYY"),y=g*p,x=Math.min(-1*E(12*(Math.pow(n/100/2+1,1/6)-1)/u,i,a),g),N=x+m,w=Math.max(x-y+m,0),v=Math.max(g-w,0);if(console.log(h),g<=0)break;t.push({currentDate:h,openingBalance:f(g),schedPMT:f(x),lumpSumAmount:f(r),totalPMT:f(N),principal:f(w),interest:f(y),endingBalance:f(v)})}return t}(o))},className:"bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Finish"))))},w=function(e){var t=e.resultsTable;return t?l.a.createElement("div",{className:"w-screen md:justify-center flex overflow-auto"},l.a.createElement("table",{className:"table-auto"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"bg-white"},l.a.createElement("th",{className:"px-4 py-2"},"Payment Number"),l.a.createElement("th",{className:"px-4 py-2"},"Date"),l.a.createElement("th",{className:"px-4 py-2"},"Opening Balance"),l.a.createElement("th",{className:"px-4 py-2"},"Scheduled PMT"),l.a.createElement("th",{className:"px-4 py-2"},"Lump Sum"),l.a.createElement("th",{className:"px-4 py-2"},"Total PMT"),l.a.createElement("th",{className:"px-4 py-2"},"Principal"),l.a.createElement("th",{className:"px-4 py-2"},"Interest"),l.a.createElement("th",{className:"px-4 py-2"},"Ending Balance"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:t,className:(t+1)%2===0?"bg-white hover:bg-blue-100 transition-all":"bg-gray-100 hover:bg-blue-100 transition-all"},l.a.createElement("td",{className:"border px-4 py-2"},t+1),l.a.createElement("td",{className:"border px-4 py-2 text-right"},e.currentDate),l.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.openingBalance).toLocaleString().split(".")[0]),l.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.schedPMT).toLocaleString().split(".")[0]),l.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.lumpSumAmount).toLocaleString().split(".")[0]),l.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.totalPMT).toLocaleString().split(".")[0]),l.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.principal).toLocaleString().split(".")[0]),l.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.interest).toLocaleString().split(".")[0]),l.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.endingBalance).toLocaleString().split(".")[0]))}))))):null},v=a(18),T=a.n(v),A=function(){return l.a.createElement("div",{className:"landing w-screen flex-auto flex flex-col items-center justify-center p-6"},l.a.createElement("div",{className:"w-screen max-w-5xl flex flex-col lg:flex-row items-center justify-center lg:justify-between px-12 md:p-12 mb-10"},l.a.createElement("div",{className:"flex flex-col mb-5"},l.a.createElement("span",{className:"text-3xl md:text-5xl font-bold text-gray-600"},"Mortgages are complicated."),l.a.createElement("span",{className:"text-3xl md:text-5xl font-bold text-green-600"},"We can help"),l.a.createElement("span",{className:"text-md md:text-lg font-bold text-gray-500 mt-8"},"Let us help you see the advantages and disadvantages of different mortgage payment types")),l.a.createElement("img",{className:"max-w-xs md:max-w-sm",src:T.a,alt:"landing_pic"})),l.a.createElement(m.b,{to:"/calculate",className:"bg-green-600 text-white font-bold p-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"},"Calculate mortgage payments now!"))};var M=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1];return l.a.createElement(m.a,null,l.a.createElement("div",{className:"app flex flex-col h-screen"},l.a.createElement(u,null),l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/"},l.a.createElement(A,null)),l.a.createElement(c.a,{exact:!0,path:"/calculate"},l.a.createElement("div",{className:"flex flex-auto justify-center overflow-y-auto"},!a&&l.a.createElement(N,{setResultsTable:r}),a&&l.a.createElement(w,{resultsTable:a}))),l.a.createElement(c.a,{path:"*"},l.a.createElement(A,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.5ff636db.chunk.js.map