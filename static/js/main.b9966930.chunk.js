(this["webpackJsonpcoro-know"]=this["webpackJsonpcoro-know"]||[]).push([[0],{114:function(e,t,c){},116:function(e,t,c){},223:function(e,t,c){},224:function(e,t,c){},230:function(e,t,c){},231:function(e,t,c){},232:function(e,t,c){},240:function(e,t,c){},243:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(23),r=c.n(n),i=(c(114),c(24)),o=c(8),l=c(11),j=c.n(l),d=c(21),b=c(9),h=(c(116),c(70)),x=c(2);var u=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(b.a)(n,2),i=r[0],o=r[1],l=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.caw.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){console.log(e),o(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[]);var u={labels:["Cases","Deaths","Recovered","active","critical"],datasets:[{label:"World Dataset",data:[i.cases,i.deaths,i.recovered,i.active,i.critical],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(25, 205, 86)","rgb(255, 205, 86)","rgb(255, 205, 186)"],hoverOffset:4}],options:{responsive:!0}};return Object(a.useEffect)((function(){fetch("./coroknow.json").then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),s(e.Home)})).catch((function(e){console.log("Error Reading data "+e)}))}),[]),Object(x.jsxs)("div",{className:"home",children:[Object(x.jsx)("div",{className:"Home__left",children:c.map((function(e){return Object(x.jsxs)("div",{className:"con",children:[Object(x.jsx)("h5",{children:"Things to Remember in Covid"}),Object(x.jsx)("li",{className:"content mb-1",children:e.Isolation}),Object(x.jsx)("li",{className:"content mb-1",children:e.Disinfection}),Object(x.jsx)("li",{className:"content mb-1",children:e.Diet}),Object(x.jsx)("li",{className:"content",children:e.Vaccine}),Object(x.jsxs)("ul",{className:"list-group",children:[Object(x.jsx)("h5",{children:"Laws and Regulations"}),Object(x.jsx)("li",{className:"list-group-item",children:e.Laws[0].A}),Object(x.jsx)("li",{className:"list-group-item",children:e.Laws[0].B}),Object(x.jsx)("li",{className:"list-group-item",children:e.Laws[0].C}),Object(x.jsx)("li",{className:"list-group-item",children:e.Laws[0].D}),Object(x.jsx)("li",{className:"list-group-item",children:e.Laws[0].E})]})]})}))}),Object(x.jsx)("div",{className:"Home__middle",children:Object(x.jsxs)("div",{className:"Chart",children:[Object(x.jsxs)("div",{className:"graphs",children:[Object(x.jsx)("h3",{children:"World Wide Cases Graph"}),Object(x.jsx)("hr",{}),Object(x.jsx)(h.a,{data:{labels:["Jan","Feb","Mar","April","May"],datasets:[{label:"Covid Cases in 2021 (Jan-Recent)",data:[10286709,10766245,11124527,12303131,19925517],backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],pointBackgroundColor:["rgba(255, 99, 132, 0.2)"],pointBorderColor:["rgba(255, 99, 132, 1)"]},{label:"Covid Recovered in 2021 (Jan-Recent)",data:[9883461,10448406,10798921,11525039,15992271],backgroundColor:["rgba(14, 162, 135, 0.2)"],borderColor:["rgba(54, 162, 1, 235)"],pointBackgroundColor:["rgba(14, 162, 135, 0.2)"],pointBorderColor:["rgba(54, 162, 1, 235)"]},{label:"Covid Death Cases in 2021 (Jan-Recent)",data:[148994,154486,157248,163396,215542],backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],pointBackgroundColor:["rgba(54, 162, 235, 0.2)"],pointBorderColor:["rgba(54, 162, 235, 1)"]}],options:{scales:{y:{beginAtZero:!0}},responsive:!0}}})]}),Object(x.jsxs)("div",{className:"graphs",children:[Object(x.jsx)("h1",{children:"Covid Cases Graph"}),Object(x.jsx)("hr",{}),Object(x.jsx)(h.b,{data:u})]})]})})]})},O=c(260),m=(c(223),c.p+"static/media/kajal.d2d403be.jpeg"),p=c.p+"static/media/shivam.8f11116e.jpeg";var f=function(){return Object(x.jsxs)("div",{className:"about",children:[Object(x.jsx)("h1",{children:"About Us"}),Object(x.jsxs)("div",{className:"cardlist",children:[Object(x.jsxs)(O.a,{className:"cardinfo",children:[Object(x.jsx)(O.a.Img,{variant:"top",src:"https://media-exp1.licdn.com/dms/image/C5603AQEmEAHnS-CxOQ/profile-displayphoto-shrink_200_200/0/1613386068170?e=1626912000&v=beta&t=g7HBpbvxRLEU_EcYu8MVk9PTpeY4Bf5-wNowZXSV9xA"}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:"Shivansh Sharma"}),Object(x.jsx)(O.a.Text,{children:"Enrollment number: 0191CS181156"})]})]}),Object(x.jsxs)(O.a,{className:"cardinfo",children:[Object(x.jsx)(O.a.Img,{variant:"top",src:"https://media-exp1.licdn.com/dms/image/C5603AQHdG7z1sUbHzg/profile-displayphoto-shrink_200_200/0/1613920363434?e=1626912000&v=beta&t=i6rTM2ejpSkqrLtX2WnP4ZybMFXCXmXcBpKRF9u96M8"}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:"Prateek Wadhwani"}),Object(x.jsx)(O.a.Text,{children:"Enrollment number: 0191CS181112"})]})]}),Object(x.jsxs)(O.a,{className:"cardinfo",children:[Object(x.jsx)(O.a.Img,{variant:"top",src:m}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:"Kajal Kanade"}),Object(x.jsx)(O.a.Text,{children:"Enrollment number: 0191CS181058"})]})]}),Object(x.jsxs)(O.a,{className:"cardinfo",children:[Object(x.jsx)(O.a.Img,{variant:"top",src:p}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:"Shivam Kulpehra"}),Object(x.jsx)(O.a.Text,{children:"Enrollment number: 0191CS181154"})]})]})]})]})},v=c(256),g=c(99),N=c.n(g),C=(c(224),function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),r=Object(b.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(""),h=Object(b.a)(l,2),u=h[0],O=h[1],m=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://4sov3wdiag.execute-api.us-east-1.amazonaws.com/coron/ckapp").then((function(e){return e.json()})).then((function(e){s(e.Items)}));case 2:o(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m()}),[]),Object(x.jsxs)("div",{className:"healthcare",children:[Object(x.jsx)("h1",{children:"Healthcare Centers"}),Object(x.jsx)("div",{class:"form-outline",children:Object(x.jsx)("input",{type:"search",id:"form1",placeholder:"Search a District",class:"form-control",onChange:function(e){O(e.target.value)}})}),Object(x.jsx)("hr",{}),i?Object(x.jsx)(v.a,{className:"tab",striped:!0,bordered:!0,hover:!0,children:Object(x.jsx)("tbody",{children:c.filter((function(e){return""===u||e.name.toLowerCase().includes(u.toLowerCase())?e:void 0})).map((function(e){return Object(x.jsx)("tr",{children:Object(x.jsx)("td",{children:e.name.match(/[^"]+/i)[0]})})}))})}):Object(x.jsx)(N.a,{className:"animated_",css:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},color:"slateblue",loading:!0,size:100})]})}),k=c(257),_=c(100),w=c(101),S=c.n(w);c(230);var y=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),r=Object(b.a)(n,2),i=r[0],o=r[1],l=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=462016&date=31-03-2021").then((function(e){return e.json()})).then((function(e){console.log(e.sessions),s(e.sessions)}));case 2:o(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),Object(x.jsxs)("div",{className:"vaccine",children:[Object(x.jsx)("h1",{children:"Vaccine Availability in Bhopal"}),Object(x.jsx)("hr",{}),i?Object(x.jsx)("div",{className:"vaccine_show",children:c.map((function(e){return Object(x.jsxs)(O.a,{className:"text-center",children:[Object(x.jsx)(O.a.Header,{children:e.vaccine}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsxs)(O.a.Title,{children:["Availability: ",e.available_capacity]}),Object(x.jsx)(O.a.Text,{children:Object(x.jsxs)("div",{className:"sec",children:[Object(x.jsxs)("p",{children:["From : ",e.from]}),Object(x.jsxs)("p",{children:["To : ",e.to]})]})}),Object(x.jsx)("hr",{}),Object(x.jsxs)(O.a.Text,{children:["Minimum Age: ",e.min_age_limit]}),Object(x.jsx)("hr",{}),Object(x.jsxs)(O.a.Text,{children:["Fees: ",e.fee]}),Object(x.jsx)("hr",{}),Object(x.jsx)(O.a.Text,{children:Object(x.jsxs)("div",{className:"sec",children:[Object(x.jsxs)("p",{children:[" Hospital:",e.name]}),Object(x.jsxs)("p",{children:["    State:",e.state_name]}),Object(x.jsxs)("p",{children:[" District:",e.district_name]}),Object(x.jsxs)("p",{children:[" Pincode:",e.pincode]})]})})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:"Slots Available"}),Object(x.jsx)(k.a,{className:"list-group-flush",children:e.slots.map((function(e){return Object(x.jsx)(_.a,{children:e})}))})]}),Object(x.jsxs)(O.a.Footer,{className:"text-muted",children:["Date:",e.date]})]})}))}):Object(x.jsx)(S.a,{className:"animated_",css:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},color:"slateblue",loading:!0,size:100})]})},T=(c(231),c(102)),B=c.n(T);var E=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),r=Object(b.a)(n,2),i=r[0],o=r[1],l=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){s(e.statewise)}));case 2:o(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),Object(x.jsxs)("div",{className:"tracker",children:[Object(x.jsx)("h1",{children:"Tracking for covid cases state wise"}),Object(x.jsx)("hr",{}),i?Object(x.jsx)("div",{className:"table-responsive",children:Object(x.jsxs)(v.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"States Name"}),Object(x.jsx)("th",{children:"States Code"}),Object(x.jsx)("th",{children:"Active Cases"}),Object(x.jsx)("th",{children:"confirmed Cases"}),Object(x.jsx)("th",{children:"Deaths"}),Object(x.jsx)("th",{children:"Recovered"}),Object(x.jsx)("th",{children:"Last Updated"})]})}),Object(x.jsx)("tbody",{children:c.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"state__color",children:e.state}),Object(x.jsx)("td",{className:"state__codecolor",children:e.statecode}),Object(x.jsx)("td",{className:"state__active",children:e.active}),Object(x.jsx)("td",{className:"state__confirmed",children:e.confirmed}),Object(x.jsx)("td",{className:"state__deaths",children:e.deaths}),Object(x.jsx)("td",{className:"state__recovered",children:e.recovered}),Object(x.jsx)("td",{className:"lastup",children:e.lastupdatedtime})]})}))})]})}):Object(x.jsx)(B.a,{className:"animated_",css:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},color:"slateblue",loading:!0,size:100})]})},A=(c(232),c(106)),L=c(107),D=c(258),H=c(259),R=c.p+"static/media/logo.8eaa355e.gif",F=c(105),z=c.n(F),I=c(108),M=c.n(I);var P=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],s=t[1],n={fontSize:"25px"};return Object(x.jsxs)("div",{className:"Main__nav",children:[Object(x.jsx)(i.b,{className:"logo_link",to:"/",children:Object(x.jsxs)("div",{className:"logocon",children:[Object(x.jsx)("p",{children:"Coro"}),Object(x.jsx)("img",{src:R,alt:""}),Object(x.jsx)("p",{children:"Know"})]})}),Object(x.jsxs)(D.a,{"fixed-top":!0,expanded:c,className:"Navbars",expand:"lg",children:[Object(x.jsx)(D.a.Toggle,{onClick:function(){return s(!c&&"expanded")},"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(D.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsx)(H.a,{className:"mr-auto Navs",children:Object(x.jsxs)("div",{className:"NavItems",children:[Object(x.jsxs)(i.b,{onClick:function(){return s(!1)},to:"/vaccine",className:"navlink",exact:!0,activeClassName:"active",children:[Object(x.jsx)(z.a,{fontSize:"medium"}),Object(x.jsx)("h5",{children:" Vaccine"})]}),Object(x.jsxs)(i.b,{onClick:function(){return s(!1)},to:"/tracker",className:"navlink",exact:!0,activeClassName:"active",children:[Object(x.jsx)(A.a,{style:n}),Object(x.jsx)("h5",{children:" Tracker"})]}),Object(x.jsxs)(i.b,{onClick:function(){return s(!1)},to:"/healthcare",className:"navlink",exact:!0,activeClassName:"active",children:[Object(x.jsx)(L.a,{style:n}),Object(x.jsx)("h5",{children:" Health care"})]}),Object(x.jsxs)(i.b,{onClick:function(){return s(!1)},to:"/aboutus",className:"navlink",exact:!0,activeClassName:"active",children:[Object(x.jsx)(M.a,{fontSize:"medium"}),Object(x.jsx)("h5",{children:" About Us"})]})]})})})]})]})};c(240);var J=function(){return Object(x.jsxs)(i.a,{children:[Object(x.jsx)(P,{}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(x.jsx)(o.a,{path:"/Aboutus",component:f}),Object(x.jsx)(o.a,{path:"/tracker",component:E}),Object(x.jsx)(o.a,{path:"/healthcare",component:C}),Object(x.jsx)(o.a,{path:"/vaccine",component:y})]})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,261)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};c(241);r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(J,{})}),document.getElementById("root")),K()}},[[243,1,2]]]);
//# sourceMappingURL=main.b9966930.chunk.js.map