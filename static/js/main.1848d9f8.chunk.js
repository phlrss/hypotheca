(this.webpackJsonphypotheca=this.webpackJsonphypotheca||[]).push([[0],{167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(52),o=a.n(l),c=(a(65),a(66),a(4)),s=a(2),m=a(1),i=(a(67),a(10)),u=a.n(i),d=a(53),p=a.n(d),g=a(54),h=a.n(g),f=function(e){var t=e.setFaqPosition,a=Object(n.useState)(!1),l=Object(c.a)(a,2),o=l[0],m=l[1];return r.a.createElement("div",{className:"w-screen h-16 bg-green-600 text-white flex items-center justify-between p-12 border-box shadow"},r.a.createElement(s.b,{to:"/hypotheca",className:"flex items-center text-2xl font-bold"},r.a.createElement("div",{className:"p-2 shadow-md rounded-full bg-white"},r.a.createElement("img",{style:{height:"35px"},className:"max-w-xs",src:h.a})),r.a.createElement("img",{className:"hidden ml-3 md:block relative w-32 max-w-xs",src:p.a})),r.a.createElement("div",{className:"hidden lg:block"},r.a.createElement(s.b,{to:"/question",className:"mx-3"},"Calculate Mortgage"),r.a.createElement(s.b,{onClick:function(){t(0)},to:"/faq",className:"mx-3"},"FAQ")),r.a.createElement("button",{onClick:function(){return m(!0)},className:"block lg:hidden"},r.a.createElement("svg",{className:"fill-current h-5 w-5",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),o&&r.a.createElement("div",{className:u()("flex flex-col lg:hidden absolute h-screen w-screen top-0 left-0 bg-white font-bold text-gray-700",{hidden:!o})},r.a.createElement("button",{onClick:function(){return m(!1)},className:"lg:hidden p-5 absolute top-0 right-0"},r.a.createElement("svg",{fill:"gray",height:"15px",viewBox:"0 0 365.696 365.696",width:"15px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"}))),r.a.createElement(s.b,{onClick:function(){return m(!1)},to:"/question",className:"mx-3 mt-8 p-5 border-b-2"},"Calculate Mortgage"),r.a.createElement(s.b,{onClick:function(){return m(!1)},to:"/faq",className:"mx-3 p-5 border-b-2"},"FAQ")))},y=a(3),b=["startDate","mortgageAmount","interestRate","amortization","personalFrequency","interestImportance","lumpSumImportance"],x={mortgageAmount:"",interestRate:"",amortization:"",frequency:"monthly",lumpSumAmount:"",startDate:"",personalFrequency:"1",interestImportance:"1",lumpSumImportance:"1",stepNum:b[0],error:!1,errorMessage:""},E=function(e,t){switch(t.type){case"UPDATE_MORTGAGE":return Object(y.a)({},e,{mortgageAmount:t.mortgage,error:!1});case"UPDATE_INTEREST":return Object(y.a)({},e,{interestRate:t.interest,error:!1});case"UPDATE_AMORTIZATION":return Object(y.a)({},e,{amortization:t.amortization,error:!1});case"UPDATE_FREQUENCY":return Object(y.a)({},e,{frequency:t.frequency,error:!1});case"UPDATE_LUMP_AMOUNT":return Object(y.a)({},e,{lumpSumAmount:t.lumpSumAmount,error:!1});case"UPDATE_START_DATE":return Object(y.a)({},e,{startDate:t.date,error:!1});case"UPDATE_PERSONAL_FREQUENCY":return Object(y.a)({},e,{personalFrequency:t.frequency,error:!1});case"UPDATE_INTEREST_IMPORTANCE":return Object(y.a)({},e,{interestImportance:t.interest,error:!1});case"ERROR_STATE":return Object(y.a)({},e,{error:!0,errorMessage:t.message});case"PREV_STEP":var a=b.findIndex((function(t){return t===e.stepNum}));return Object(y.a)({},e,{stepNum:0===a?b[0]:b[a-1],error:!1});case"NEXT_STEP":var n=b.findIndex((function(t){return t===e.stepNum}));return Object(y.a)({},e,{stepNum:b[n]===b[b.length-1]?b[n]:b[n+1]});default:throw new Error}},w=function(e){var t=e.setResults,a=Object(n.useReducer)(E,x),l=Object(c.a)(a,2),o=l[0],m=l[1],i=Object(n.useState)(),d=Object(c.a)(i,2),p=d[0],g=d[1],h=function(){var e=o[o.stepNum];if(e)switch(o.stepNum){case"mortgageAmount":case"interestRate":parseInt(e)?(m({type:"NEXT_STEP"}),g("step-next")):m({type:"ERROR_STATE",message:"Invalid symbols in field"});break;case"startDate":var t=e.split("-");isNaN(new Date(e).getFullYear())?m({type:"ERROR_STATE",message:"Invalid date"}):3!==t.length||4!==t[0].length||2!==t[1].length||2!==t[2].length?m({type:"ERROR_STATE",message:"Invalid date format"}):(m({type:"NEXT_STEP"}),g("step-next"));break;default:m({type:"NEXT_STEP"}),g("step-next")}else m({type:"ERROR_STATE",message:"Value is required"})};return r.a.createElement("div",{className:"flex flex-col w-full max-w-xl p-2"},r.a.createElement("div",{className:"p-5 mt-4 bg-white rounded flex flex-col shadow-md w-full overflow-hidden"},"mortgageAmount"===o.stepNum&&r.a.createElement("div",{className:"".concat(p," mb-3")},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"What is your mortgage amount?"),r.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"$200000",value:o.mortgageAmount,onChange:function(e){return m({type:"UPDATE_MORTGAGE",mortgage:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?h():null}})),"interestRate"===o.stepNum&&r.a.createElement("div",{className:"".concat(p," mb-3")},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"What is your stated interest rate?"),r.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"2.25%",value:o.interestRate,onChange:function(e){return m({type:"UPDATE_INTEREST",interest:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?h():null}})),"amortization"===o.stepNum&&r.a.createElement("div",{className:"".concat(p," mb-3")},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"What is your mortgage amortization term (in years)?"),r.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"25",value:o.amortization,onChange:function(e){return m({type:"UPDATE_AMORTIZATION",amortization:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?h():null}})),"frequency"===o.stepNum&&r.a.createElement("div",{className:"".concat(p," mb-3")},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"How often will you be making payments?"),r.a.createElement("select",{onChange:function(e){return m({type:"UPDATE_FREQUENCY",frequency:e.target.value})},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"},r.a.createElement("option",{value:"monthly"},"Monthly"),r.a.createElement("option",{value:"semimonthly"},"Semi-Monthly"),r.a.createElement("option",{value:"biweekly"},"Bi-Weekly"),r.a.createElement("option",{value:"accbiweekly"},"Acc. Bi-Weekly"),r.a.createElement("option",{value:"weekly"},"Weekly"),r.a.createElement("option",{value:"accweekly"},"Acc. Weekly"))),"startDate"===o.stepNum&&r.a.createElement("div",{className:"".concat(p," mb-3")},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"What is your mortgage start date?"),r.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"YYYY-MM-DD",value:o.startDate,onChange:function(e){return m({type:"UPDATE_START_DATE",date:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?h():null}})),"personalFrequency"===o.stepNum&&r.a.createElement("div",{className:"".concat(p," mb-3")},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"How often do you get paid (i.e. for employment or self-employment income)"),r.a.createElement("select",{onChange:function(e){return m({type:"UPDATE_PERSONAL_FREQUENCY",frequency:e.target.value})},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"},r.a.createElement("option",{value:"1"},"Monthly"),r.a.createElement("option",{value:"2"},"Semi-Monthly"),r.a.createElement("option",{value:"3"},"Bi-Weekly"),r.a.createElement("option",{value:"4"},"Weekly"))),"interestImportance"===o.stepNum&&r.a.createElement("div",{className:"".concat(p," mb-3")},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"How important is it to you to save interest on your mortgage?"),r.a.createElement("select",{onChange:function(e){return m({type:"UPDATE_INTEREST_IMPORTANCE",interest:e.target.value})},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"},r.a.createElement("option",{value:"1"},"Not Important"),r.a.createElement("option",{value:"3"},"Important"))),"lumpSumImportance"===o.stepNum&&r.a.createElement("div",{className:"".concat(p," mb-3")},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"How likely are you to make additional lump-sum payments on your mortgage?"),r.a.createElement("select",{onChange:function(e){return m({type:"UPDATE_INTEREST_IMPORTANCE",interest:e.target.value})},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"},r.a.createElement("option",{value:"1"},"Very Unlikely"),r.a.createElement("option",{value:"2"},"Unlikely"),r.a.createElement("option",{value:"3"},"Likely"),r.a.createElement("option",{value:"4"},"Very Likely"))),o.error&&r.a.createElement("label",{className:"text-sm text-red-600 font-bold mb-3"},"*",o.errorMessage),r.a.createElement("div",{className:"w-full flex justify-between"},r.a.createElement("button",{disabled:o.stepNum===b[0],onClick:function(){m({type:"PREV_STEP"}),g("step-prev")},className:u()("bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",{"cursor-not-allowed opacity-50":o.stepNum===b[0]})},"Back"),o.stepNum!==b[b.length-1]&&r.a.createElement("button",{onClick:function(){return h()},className:"bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Continue"),o.stepNum===b[b.length-1]&&r.a.createElement(s.b,{onClick:function(){var e=function(){var e,t=parseInt(o.personalFrequency)+parseInt(o.interestImportance)+parseInt(o.lumpSumImportance);return t<=3?e="monthly":t<=6?e="semimonthly":t<=9?e="accbiweekly":t<=12&&(e="accweekly"),m({type:"UPDATE_FREQUENCY",frequency:e}),e}();t(Object(y.a)({},o,{frequency:e}))},to:"/frequency",className:"bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Finish"))))},v=a(56),N=a.n(v),k=function(){return r.a.createElement("div",{className:"landing w-screen h-screen flex flex-col items-center justify-center p-6"},r.a.createElement("div",{className:"w-screen max-w-5xl flex flex-col lg:flex-row items-center justify-center lg:justify-between px-12 md:p-12 mb-4"},r.a.createElement("div",{className:"flex flex-col mb-5"},r.a.createElement("div",{className:"block md:flex"},r.a.createElement("span",{className:"inline-flex text-3xl md:text-5xl font-bold text-gray-700 mr-3"},"Mortgages made"),r.a.createElement("span",{className:"text-3xl md:text-5xl font-bold text-green-600"},"easy")),r.a.createElement("span",{className:"text-md md:text-lg font-bold text-gray-600 mt-8"},"Intelligent mortgage calculator that recommends the optimal payment strategy based on your preferences")),r.a.createElement("img",{className:"max-w-xs md:max-w-sm",src:N.a,alt:"landing_pic"})),r.a.createElement(s.b,{to:"/question",className:"bg-green-600 text-white font-bold p-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"},"Calculate your mortgage now"))},T=function(e){var t=e.resultsState,a=void 0===t?x:t,l=e.setResults,o=Object(n.useReducer)(E,a),s=Object(c.a)(o,2),m=s[0],i=s[1],d=Object(n.useState)(!1),p=Object(c.a)(d,2),g=p[0],h=p[1];return r.a.createElement("div",{className:"w-full"},r.a.createElement("div",{className:"block lg:hidden w-full bg-white"},r.a.createElement("button",{onClick:function(){return h(!0)},className:u()("m-3 border border-green-300 bg-white text-green-600 text-sm font-bold p-3 rounded-full shadow-md focus:outline-none focus:shadow-outline",{hidden:g})},"Edit Mortgage Details")),r.a.createElement("div",{className:u()("absolute h-full lg:h-auto flex-col lg:flex-row p-2 pt-3 mb-1 bg-white lg:items-center lg:justify-between rounded lg:flex shadow-md w-full lg:relative",{"hidden lg:flex":!g})},r.a.createElement("button",{onClick:function(){return h(!1)},className:"lg:hidden p-2 absolute top-0 right-0"},r.a.createElement("svg",{fill:"gray",height:"15px",viewBox:"0 0 365.696 365.696",width:"15px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"}))),r.a.createElement("div",{className:"mx-2"},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"Start Date"),r.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"YYYY-MM-DD",value:m.startDate,onChange:function(e){return i({type:"UPDATE_START_DATE",date:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?void 0:null},onBlur:function(){return l(m)}})),r.a.createElement("div",{className:"mx-2"},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"Mortgage amount"),r.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"$200000",value:m.mortgageAmount,onChange:function(e){return i({type:"UPDATE_MORTGAGE",mortgage:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?void 0:null},onBlur:function(){return l(m)}})),r.a.createElement("div",{className:"mx-2"},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"Interest rate"),r.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"2.25%",value:m.interestRate,onChange:function(e){return i({type:"UPDATE_INTEREST",interest:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?void 0:null},onBlur:function(){return l(m)}})),r.a.createElement("div",{className:"mx-2"},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"Amortization term (in years)"),r.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"25",value:m.amortization,onChange:function(e){return i({type:"UPDATE_AMORTIZATION",amortization:e.target.value})},onKeyUp:function(e){return 13===e.keyCode?void 0:null},onBlur:function(){return l(m)}})),r.a.createElement("div",{className:"mx-2"},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"Payment frequency"),r.a.createElement("select",{value:m.frequency||"monthly",onChange:function(e){i({type:"UPDATE_FREQUENCY",frequency:e.target.value}),l(Object(y.a)({},m,{frequency:e.target.value}))},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"},r.a.createElement("option",{value:"monthly"},"Monthly"),r.a.createElement("option",{value:"semimonthly"},"Semi-Monthly"),r.a.createElement("option",{value:"biweekly"},"Bi-Weekly"),r.a.createElement("option",{value:"accbiweekly"},"Acc. Bi-Weekly"),r.a.createElement("option",{value:"weekly"},"Weekly"),r.a.createElement("option",{value:"accweekly"},"Acc. Weekly"))),r.a.createElement("div",{className:"mx-2"},r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"Lump-sum amount"),r.a.createElement("input",{required:!0,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",placeholder:"$250",value:m.lumpSumAmount,onChange:function(e){return i({type:"UPDATE_LUMP_AMOUNT",lumpSumAmount:e.target.value})},onBlur:function(){return l(m)}}))))},A={mortgage:{question:"What is a mortgage?",answer:"A mortgage is a type of loan used to purchase a home or property. The loan is generally paid off over many years and the property is used as security."},mortgagePayment:{question:"What is the composition of a mortgage payment?",answer:"Mortgages are repaid at regular intervals and are composed of both interest and principal. When a mortgage payment is made, the interest due on the principal is serviced first, and the remainder is allocated to the repayment of principal."},frequencyOptions:{question:"What payment frequency options do I have?",answer:"The default mortgage payment frequency is monthly. In Canada, there are six mortgage payment options available: Monthly, semi monthly, bi-weekly, accelerated bi-weekly, weekly, and accelerated weekly."},monthly:{question:"What is a monthly mortgage payment option?",answer:"12 payments are made each year. The mortgage is paid once per month, on the same day each month."},semimonthly:{question:"What is a semi monthly mortgage payment option?",answer:"24 payments are made each year. The mortgage is paid twice a month, either on the 1st and 15th or on the 16th and at the last day of the month. The total amount paid each year amounts to the same as the monthly option."},biweekly:{question:"What is a bi-weekly mortgage payment option?",answer:"26 payments are made each year. The mortgage is paid every two weeks. The total amount paid per year amounts to the same as the monthly option."},accbiweekly:{question:"What is an accelerated bi-weekly mortgage payment option?",answer:"26 payments are made each year. The mortgage is paid every two weeks. The payment amount is calculated by taking the monthly payment divided by two, amounting to approximately one extra payment made per year compared to the monthly option. Note: The accelerated option is an effective way to direct mortgage payments directly to the repayment of principal."},weekly:{question:"What is a weekly mortgage payment option?",answer:"52 payments are made each year. The mortgage is paid every week. The total amount paid per year amounts to the same as the monthly option."},accweekly:{question:"What is an accelerated weekly mortgage payment option?",answer:"52 payments are made each year. The mortgage is paid every week. The payment amount is calculated by taking the monthly payment divided by four, amounting to approximately one extra payment made per year compared to the monthly option. Note: The accelerated option is an effective way to direct mortgage payments directly to the repayment of principal."},interestRate:{question:"What is an annual interest rate?",answer:"The stated rate offered by financial institutions, which is compounded semi-annually."},compounding:{question:"What does semi-annual compounding mean?",answer:"Semi-annual compounding is a term describing the interest factor charge, which is once every six months. The more frequent the compounding period, the higher the interest."},compoundReason:{question:"Why are mortgage interest rates compounded semi-annually?",answer:"By law, fixed rate mortgages in Canada are compounded semi-annually."},amortization:{question:"What is an amortization schedule?",answer:"An amortization schedule shows each mortgage payment and the amount of that payment allocated to principal (the balance owing) and the amount of that payment allocated to interest. Paying down the principal as quickly as possible reduces the amount of interest paid."},amortVsTerm:{question:"What is the difference between the amortization period and the mortgage term?",answer:"An amortization term represents the entire life of the mortgage, which can range from 10, 20, 25 or even 35 years, depending on the circumstances. In other words, an amortization period is the length of time needed to repay the mortgage loan. A mortgage term is the length of time that a mortgage agreement is in effect at an agreed upon interest rate. Common mortgage terms are 1-year, 3-years, and 5-years. At the end of each mortgage term, the mortgage is renewed to a new term until it is fully repaid."},saveMoney:{question:"How can I save money on my mortgage?",answer:"Making additional lump-sum payments on the mortgage will allow for interest savings on interest by the early repayment of principal."},lumpSum:{question:"Should I made additional lump-sum payments on my mortgage?",answer:"By reducing the principal, savings on the interest will be beneficial. However, it is noted that if you have debts with a higher interest rate or investments that could generate higher returns, there is an opportunity cost by early repayment on the mortgage."}},q=function(e){var t=e.faqPosition;return Object(n.useEffect)((function(){var e=document.querySelector(".faq-tile-".concat(t));e&&e.scrollIntoView({behavior:"smooth"})}),[t]),r.a.createElement("div",{className:"flex flex-col w-full max-w-xl p-2"},r.a.createElement("div",{className:"p-5 mt-4 bg-white rounded flex flex-col shadow-md w-full"},Object.keys(A).map((function(e){return r.a.createElement("div",{key:e,className:"".concat(e!==A.length-1?"faq-tile-".concat(e," mb-8"):"faq-tile-".concat(e))},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2"},"Q: ".concat(A[e].question)),r.a.createElement("label",{className:"block text-gray-600 text-sm font-bold mb-2"},"A: ".concat(A[e].answer)))}))))},S=function(e){var t=e.setFaqPosition;return r.a.createElement("div",{className:"w-full flex flex-col justify-center p-8 lg:p-12 xl:p-24 bg-gray-500 bg-opacity-25"},r.a.createElement("div",{className:"flex flex-col lg:flex-row justify-center"},Object.keys(A).filter((function(e,t){return t<3})).map((function(e){return r.a.createElement(s.b,{onClick:function(){t(e)},to:"/faq",key:e,className:"text-left transition-all duration-300 hover:bg-gray-200 hover:cursor-pointer p-5 mb-5 mr-4 bg-white rounded flex items-center shadow-md w-full lg:max-w-sm"},r.a.createElement("span",{className:"block text-gray-700 font-bold mb-2 flex-grow"},A[e].question))}))),r.a.createElement("div",{className:"flex flex-col lg:flex-row justify-center"},Object.keys(A).filter((function(e,t){return t>2&&t<6})).map((function(e){return r.a.createElement(s.b,{onClick:function(){t(e)},to:"/faq",key:e,className:"text-left transition-all duration-300 hover:bg-gray-200 hover:cursor-pointer p-5 mb-5 mr-4 bg-white rounded flex items-center shadow-md w-full lg:max-w-sm"},r.a.createElement("span",{className:"block text-gray-700 font-bold mb-2"},A[e].question))}))))},M=a(57),R=a.n(M),P=a(58),C=a.n(P),O=function(){return r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"p-5 bg-white rounded flex flex-col mt-5 shadow-md w-full"},r.a.createElement("label",{className:"block text-gray-700 text-lg text-center font-bold mb-8"},"When it comes to mortgages, you are"),r.a.createElement("div",{className:"flex flex-col md:flex-row justify-center items-center"},r.a.createElement(s.b,{to:"/calculate",className:"transition-all duration-200 h-full w-full flex flex-row md:flex-col items-center rounded font-bold p-4 text-gray-700 hover:bg-gray-300 hover:shadow-md focus:outline-none focus:shadow-outline mb-2 md:mb-0 mr-0 md:mr-4"},r.a.createElement("img",{className:"flex-grow-0 w-24 mb-2",src:R.a,alt:"search-icon"}),r.a.createElement("span",{className:"flex-grow text-center"},"Searching for the optimal payment strategy")),r.a.createElement(s.b,{to:"/results",className:"transition-all duration-200 h-full w-full flex flex-row md:flex-col items-center rounded font-bold p-4 text-gray-700 hover:bg-gray-300 hover:shadow-md focus:outline-none focus:shadow-outline"},r.a.createElement("img",{className:"flex-grow-0 w-24 mb-2",src:C.a,alt:"calculate-icon"}),r.a.createElement("span",{className:"flex-grow text-center"},"Ready to calculate your amortization schedule")))))},D=function(e){var t=(e.results||{frequency:"monthly"}).frequency;return r.a.createElement("div",{className:"landing w-screen h-screen flex flex-col items-center justify-center p-6"},r.a.createElement("div",{className:"w-screen max-w-5xl flex flex-col lg:flex-row items-center justify-center lg:justify-between px-12 md:p-12 mb-3"},r.a.createElement("div",{className:"flex flex-col mb-5"},r.a.createElement("div",{className:"text-3xl md:text-5xl font-bold text-gray-700"},"Based on your results, we suggest the",r.a.createElement("span",{className:"ml-3 mr-3 text-3xl md:text-5xl font-bold text-green-600"},function(e){switch(e){case"monthly":return"Monthly";case"semimonthly":return"Semi-Monthly";case"biweekly":return"Bi-Weekly";case"accbiweekly":return"Acc. Bi-Weekly";case"weekly":return"Weekly";case"accweekly":return"Acc. Weekly";default:return"Monthly"}}(t)),"payment schedule"),r.a.createElement("span",{className:"text-md md:text-lg font-bold text-green-600 mt-8 mr-3"},A[t].question),r.a.createElement("span",{className:"text-md md:text-lg font-bold text-gray-600 mt-3"},A[t].answer),r.a.createElement("span",{className:"text-md md:text-lg text-gray-600 mt-5"},"Feel free to view how different payment schedules affect your mortgage using the ",r.a.createElement("strong",null,"Payment Frequency")," dropdown on the next page"))),r.a.createElement(s.b,{to:"/results",className:"bg-green-600 text-white font-bold p-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"},"View amortization schedule"))},I=a(11),j=a.n(I),_=function(e){var t=[],a=e.mortgageAmount,n=e.interestRate,r=e.amortization,l=e.lumpSumAmount,o=e.frequency,c=e.startDate,s=0;l&&(s=parseInt(l));var m,i=12;switch(o){case"monthly":i=12,m={num:1,type:"months"};break;case"semimonthly":i=24,m={num:15,type:"days"};break;case"biweekly":case"accbiweekly":i=26,m={num:14,type:"days"};break;case"weekly":case"accweekly":i=52,m={num:7,type:"days"};break;default:i=12,m={num:1,type:"months"}}for(var u=r*i,d=Math.pow(1+n/100/2,2/i)-1,p="accbiweekly"===o,g="accweekly"===o,h=0;h<u;h++){var f=0===h?parseInt(a):t[h-1].endingBalance,y=0===h?j()(c).format("MMM DD YYYY"):j()(t[h-1].currentDate).add(m.num,m.type).format("MMM DD YYYY"),b=f*d,x=U(n,i,u,r,a,f,p,g),E=x+s,w=Math.max(x-b+s,0),v=Math.max(f-w,0);if(f<=0)break;t.push({currentDate:y,openingBalance:W(f),schedPMT:W(x),lumpSumAmount:W(l),totalPMT:W(E),principal:W(w),interest:W(b),endingBalance:W(v)})}return t},U=function(e,t,a,n,r,l,o,c){switch(!0){case o:return Math.min(-1*B(Math.pow(e/100/2+1,1/6)-1,12*n,r)/2,l);case c:return Math.min(-1*B(Math.pow(e/100/2+1,1/6)-1,12*n,r)/4,l);default:return Math.min(-1*B(12*(Math.pow(e/100/2+1,1/6)-1)/t,a,r),l)}},W=function(e){return(Math.round(100*e)/100).toFixed(2)},B=function(e,t,a,n,r){if(n||(n=0),r||(r=0),0==e)return-(a+n)/t;var l=Math.pow(1+e,t),o=e/(l-1)*-(a*l+n);return 1==r&&(o/=1+e),o},z=a(59),F=function(e){var t,a,n,l,o=e.results;if(!o)return null;var c=_(o),s=[];c.forEach((function(e,t){s.length?s.push(parseInt(s[t-1])+parseInt(e.interest)):s.push(parseInt(e.interest))}));var m={labels:c.map((function(e){return e.currentDate.toString()})),datasets:[{label:"Remaining Balance",data:c.map((function(e){return e.endingBalance})),fill:!0,backgroundColor:"rgba(2, 149, 0, 0.2)",borderColor:"rgba(2, 149, 0, 1)",borderWidth:1,pointRadius:0},{label:"Interest Paid",data:s,fill:!0,backgroundColor:"rgba(0, 0, 0, 0.5)",borderColor:"rgba(75, 75, 75, 1)",borderWidth:1,pointRadius:0}]};return r.a.createElement("div",{className:"bg-white rounded shadow-md w-full max-w-xl"},r.a.createElement("div",{className:"p-5 flex flex-col items-center w-full"},r.a.createElement(z.Line,{data:m}),r.a.createElement("div",{className:"mt-3 text-sm"},"Zero balance date: ".concat((null===(t=c[c.length-1])||void 0===t?void 0:t.currentDate)||0),r.a.createElement("br",null),"Average scheduled payment: $".concat((null===(a=c[0])||void 0===a?void 0:a.totalPMT.toLocaleString())||0),r.a.createElement("br",null),"Total amortization: ".concat(j.a.duration(j()(null===(n=c[c.length-1])||void 0===n?void 0:n.currentDate).diff(j()(null===(l=c[0])||void 0===l?void 0:l.currentDate))).asYears().toFixed(2)||0),r.a.createElement("br",null),"Total interest paid $".concat(Number(s[s.length-1]).toLocaleString()||0))))},Y=function(e){var t=e.results;if(!t)return null;var a=_(t);return r.a.createElement("div",{className:"w-screen lg:justify-center flex overflow-auto"},r.a.createElement("table",{className:"table-auto"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"bg-white"},r.a.createElement("th",{className:"px-4 py-2"},"Payment Number"),r.a.createElement("th",{className:"px-4 py-2"},"Date"),r.a.createElement("th",{className:"px-4 py-2"},"Opening Balance"),r.a.createElement("th",{className:"px-4 py-2"},"Scheduled PMT"),r.a.createElement("th",{className:"px-4 py-2"},"Lump Sum"),r.a.createElement("th",{className:"px-4 py-2"},"Total PMT"),r.a.createElement("th",{className:"px-4 py-2"},"Principal"),r.a.createElement("th",{className:"px-4 py-2"},"Interest"),r.a.createElement("th",{className:"px-4 py-2"},"Ending Balance"))),r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",{key:t,className:(t+1)%2===0?"bg-white hover:bg-blue-100 transition-all":"bg-gray-100 hover:bg-blue-100 transition-all"},r.a.createElement("td",{className:"border px-4 py-2"},t+1),r.a.createElement("td",{className:"border px-4 py-2 text-right"},e.currentDate),r.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.openingBalance).toLocaleString().split(".")[0]),r.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.schedPMT).toLocaleString().split(".")[0]),r.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.lumpSumAmount).toLocaleString().split(".")[0]),r.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.totalPMT).toLocaleString().split(".")[0]),r.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.principal).toLocaleString().split(".")[0]),r.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.interest).toLocaleString().split(".")[0]),r.a.createElement("td",{className:"border px-4 py-2 text-right"},"$",Number(e.endingBalance).toLocaleString().split(".")[0]))})))))},L=function(e){var t=e.results,a=Object(n.useState)("table"),l=Object(c.a)(a,2),o=l[0],s=l[1];return r.a.createElement("div",{className:"w-screen items-center flex flex-col"},r.a.createElement("div",{className:"shadow"},r.a.createElement("button",{className:"py-3 px-6 border border-b-0 focus:outline-none ".concat("table"===o?"bg-white":"bg-gray-300"),onClick:function(){return s("table")}},"Schedule"),r.a.createElement("button",{className:"py-3 px-6 border border-b-0 focus:outline-none ".concat("chart"===o?"bg-white":"bg-gray-300"),onClick:function(){return s("chart")}},"Visualization")),"table"===o&&r.a.createElement(Y,{results:t}),"chart"===o&&r.a.createElement(F,{results:t}))};var $=function(){var e=Object(n.useState)(x),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(),i=Object(c.a)(o,2),u=i[0],d=i[1];return r.a.createElement(s.a,null,r.a.createElement("div",{className:"app flex flex-col h-screen"},r.a.createElement(f,{setFaqPosition:d}),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement("div",{className:"flex-auto overflow-auto"},r.a.createElement(k,null),r.a.createElement(S,{setFaqPosition:d}))),r.a.createElement(m.a,{exact:!0,path:"/question"},r.a.createElement("div",{className:"flex flex-auto justify-center overflow-y-auto"},r.a.createElement(O,null))),r.a.createElement(m.a,{exact:!0,path:"/calculate"},r.a.createElement("div",{className:"flex flex-auto justify-center overflow-y-auto"},r.a.createElement(w,{setResults:l}))),r.a.createElement(m.a,{exact:!0,path:"/frequency"},r.a.createElement("div",{className:"flex flex-col flex-auto items-center overflow-y-auto"},r.a.createElement(D,{results:a}))),r.a.createElement(m.a,{exact:!0,path:"/results"},r.a.createElement("div",{className:"flex flex-col flex-auto items-center overflow-y-auto"},r.a.createElement(T,{resultsState:a,setResults:l}),r.a.createElement(L,{results:a}))),r.a.createElement(m.a,{exact:!0,path:"/faq"},r.a.createElement("div",{className:"flex flex-auto justify-center overflow-y-auto"},r.a.createElement(q,{faqPosition:u}))),r.a.createElement(m.a,{path:"*"},r.a.createElement("div",{className:"flex-auto overflow-auto"},r.a.createElement(k,null),r.a.createElement(S,{setFaqPosition:d}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a.p+"static/media/brand_name.e62411da.png"},54:function(e,t,a){e.exports=a.p+"static/media/brand_logo.393af97f.png"},56:function(e,t,a){e.exports=a.p+"static/media/landing_image.43e45c65.svg"},57:function(e,t,a){e.exports=a.p+"static/media/search_icon.7c0ecd6b.svg"},58:function(e,t,a){e.exports=a.p+"static/media/calculate_icon.f0b94f31.svg"},60:function(e,t,a){e.exports=a(167)},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.1848d9f8.chunk.js.map