(this["webpackJsonphackathon-react-dream-team"]=this["webpackJsonphackathon-react-dream-team"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(17),s=a.n(r),i=a(10),c=a(20),l=a(12),o=a(5),d=a(2),m="https://github.com/",u="https://www.linkedin.com/in/",b="https://www.facebook.com/",j={teamLead:{_id:"1",content:"Team Leader",color:"danger"},frontend:{_id:"2",content:"Front-end Developer",color:"success"}},h=[{_id:"1",firstName:"Daniiel",lastName:"Kondratiuk",about:"Currently I am training as a web developer at WebForse3 School in Strasbourg. During my studies, I mastered the work of HTML, CSS, Javascript, PHP, SQL. I met with WordPress, Ionic and Angular. Studied Symfony more fundamentally. Moreover, I am currently studying React on my own. I wish to find my first job as a web developer. I am dynamic, curious, Id like to get a new piece of knowledge. Sociable and easy-going. I quickly integrate into the team. I like what I am doingn my own.",age:26,roles:[j.teamLead,j.frontend],avatar:"./assets/daniel/daniel.png",socials:[{name:"github",url:m+"daniielkondratiuk"},{name:"linkedin",url:u+"daniel-kondratiuk-5b51551a2/"},{name:"facebook",url:b+"danielkondratiuk95"}],skills:[{name:"HTML",percent:95},{name:"CSS",percent:30},{name:"JavaScript",percent:49},{name:"ReactJS",percent:75},{name:"NodeJS",percent:10}],favorite:!1},{_id:"2",firstName:"Natalia",lastName:"Zhelonkina",about:"I have been studying web development for about 2 years and have a strong desire to work and develop in this field.Im looking for a creative hard-skill team to work with and together get better",age:16,roles:[j.frontend],avatar:"assets/natalia/nat.png",socials:[{name:"github",url:m+"natella2902/"},{name:"linkedin",url:u+"natalia-zhelonkina-8242421b2/"}],skills:[{name:"HTML",percent:95},{name:"CSS",percent:30},{name:"JavaScript",percent:49},{name:"ReactJS",percent:75},{name:"NodeJS",percent:10}],favorite:!1},{_id:"3",firstName:"Denis",lastName:"Saberov",about:"Hello, my name is Denis, Im a JavaScript developer. I have knowledge of such technologies as HTML&CSS/JavaScript/React/Redux/Webpack and some basic knowledge of Node.js.Every day I do my best to improve my skills.",age:26,roles:[j.frontend],avatar:"https://github.com/SetRedEyes/hackathon-react-dream-team/blob/4ee14d6f1fd0db5efcad1743eeda2729995aeae7/public/assets/denis/denis.jpg",socials:[{name:"github",url:m+"SetRedEyes"},{name:"linkedin",url:u+"setredeyes/"},{name:"facebook",url:b+"denis.saberov.37"}],skills:[{name:"HTML",percent:95},{name:"CSS",percent:30},{name:"JavaScript",percent:49},{name:"ReactJS",percent:75},{name:"NodeJS",percent:10}],favorite:!1},{_id:"4",firstName:"Alex",lastName:"Tukarev",about:"Hello. I am a Front-end developer with experience in creating a SPA with React/Redux/TypeScript/HTML/CSS. In my free time, I solve problems oncodewars, delve into familiar ones and study new technologies,study C++. , I plan to study Node.js and learning English. Inthe future, I see myself as a Full-stack Developer. I am ready to consider proposals for full-time or project employment. ",age:30,roles:[j.frontend],avatar:"public/assets/alex/alex.png",socials:[{name:"github",url:m+"Oreda-Z"},{name:"linkedin",url:u+"aleksey-tukarev/"}],skills:[{name:"HTML",percent:95},{name:"CSS",percent:30},{name:"JavaScript",percent:49},{name:"ReactJS",percent:75},{name:"NodeJS",percent:10}],favorite:!1},{_id:"5",firstName:"Ilya",lastName:"Targaev",about:"Purposeful, active, responsible, sociable, executive, stress-resistant, friendly. I have a competent speech and know how to work in a team.",age:26,roles:[j.frontend],avatar:"assets/iliya/iliya.png",socials:[{name:"github",url:m+"ilya1910"}],skills:[{name:"HTML",percent:95},{name:"CSS",percent:30},{name:"JavaScript",percent:49},{name:"ReactJS",percent:75},{name:"NodeJS",percent:10}],favorite:!1}],f={getAllUsers:function(){return new Promise((function(e){setTimeout((function(){return e(h)}),300)}))},getUserById:function(e){return new Promise((function(t){setTimeout((function(){return t(h.find((function(t){return t._id===e})))}),300)}))}},p=(a(25),a(26),a(0)),g=function(e){var t=e.color,a=e.handleClick,n=e.name,r=e.type,s=e.classes,i="rounded"===r?"":"rounded-0";return Object(p.jsx)("button",{onClick:function(){return a()},className:"btn btn-".concat(t," ").concat(i," ").concat(s),children:n})},v=function(e){var t=e.users,a=e.handleClick,n=e.handleToggleFavorite;return t.map((function(e){return Object(p.jsxs)("div",{className:"card my-2 position-relative",children:[Object(p.jsx)("img",{className:"card-img-top",src:e.avatar,alt:"Card ok cap"}),Object(p.jsx)(g,{color:"warning",name:e.favorite?Object(p.jsx)("i",{className:"bi bi-star-fill"}):Object(p.jsx)("i",{className:"bi bi-star"}),handleClick:function(){return n(e._id)},classes:"position-absolute end-0"}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("h5",{className:"card-title",children:[e.firstName," ",e.lastName]})}),Object(p.jsx)(g,{color:"primary",name:"View Profile",handleClick:function(){return a(e._id)},classes:"d-block w-100"}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)("ol",{children:e.skills.map((function(e){return Object(p.jsx)("li",{children:e.name},e.name)}))}),Object(p.jsx)("ul",{children:e.socials.map((function(e){return Object(p.jsx)("li",{children:e.name},e.name)}))})]})]},e._id)}))},x=function(e){var t=e.users,a=e.handleToggleFavorite,n=Object(d.g)();return Object(p.jsx)("div",{className:"d-flex justify-content-around flex-wrap",children:Object(p.jsx)(v,{users:t,handleClick:function(e){n.push(e)},handleToggleFavorite:a})})},O=(a(36),function(){return Object(p.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:Object(p.jsx)("div",{className:"collapse navbar-collapse",children:Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsx)("li",{className:"nav-item active",children:Object(p.jsx)(o.b,{className:"nav-link",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.b,{className:"nav-link",to:"/favorite-users",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"})})]})})})}),k=(a(37),function(e){var t=e.handleToggleFavorite,a=localStorage.getItem("usersFavorite"),n=JSON.parse(a),r=Object(d.g)();return 0===n.length?Object(p.jsx)("h1",{className:"ms-2",children:"\u041d\u0435\u0442 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445"}):Object(p.jsx)(x,{users:n,handleClick:function(e){r.push(e)},handleToggleFavorite:t})}),N=a(6),S=a.n(N),_=a(7),y=a.n(_),w=function(e){var t=e.name,a=e.percent,n=e.type;return"progress"===n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{htmlFor:"file",children:t}),Object(p.jsxs)("progress",{id:"file",max:"100",value:a,children:[" ",a,"%"]})]}):"circle"===n?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:y.a.skillRow,children:[Object(p.jsxs)("svg",{viewBox:"0 0 100 100",className:y.a.skillShape,children:[Object(p.jsxs)("linearGradient",{id:"linear-gradient",children:[Object(p.jsx)("stop",{offset:"0%",stopColor:"gold"}),Object(p.jsx)("stop",{offset:"100%",stopColor:"teal"})]}),Object(p.jsx)("circle",{cx:"50",cy:"50",r:"40",className:y.a.skillCircleAbove}),Object(p.jsx)("circle",{cx:"50",cy:"50",r:"40",transform:"rotate(180 50 50)",className:y.a.skillCircleUnder,stroke:"url(#linear-gradient)",strokeDasharray:250,strokeDashoffset:250*(100-a)/100})]}),Object(p.jsx)("div",{className:y.a.skillTitle,children:t})]})}):void 0},I=(a(38),function(e){var t=e.color,a=e.content;return Object(p.jsx)("span",{className:"badge badge-margin bg-".concat(t," me-2"),children:a})}),C=function(e){var t=e.user;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:S.a.item,children:[Object(p.jsxs)("div",{className:S.a.itemFirst,children:[Object(p.jsx)("div",{className:S.a.itemImg,children:Object(p.jsx)("img",{className:S.a.itemPic,src:t.avatar,alt:"Foto ".concat(t.firstName)})}),Object(p.jsx)("ul",{className:S.a.socialList,children:t.socials.map((function(e){return Object(p.jsx)("li",{className:"me-2 ",children:Object(p.jsxs)("a",{href:e.url,className:"text-decoration-none",children:[Object(p.jsx)("i",{className:"bi bi-".concat(e.name," me-1 ")}),Object(p.jsx)("span",{children:e.name})]})},e.name)}))})]}),Object(p.jsxs)("div",{className:S.a.itemSec,children:[Object(p.jsxs)("h2",{className:S.a.color,children:["My name is ",t.firstName," ",t.lastName]}),Object(p.jsx)("div",{children:t.roles.map((function(e){return Object(p.jsx)(I,{color:e.color,content:e.content},e._id)}))}),Object(p.jsxs)("p",{children:["I am ",t.age," years old"]}),Object(p.jsx)("h3",{children:"About me"}),Object(p.jsx)("p",{children:t.about}),Object(p.jsx)("h3",{children:"I wanna tell you about my skills"}),Object(p.jsx)("ul",{className:S.a.elements,children:t.skills.map((function(e){return Object(p.jsx)("li",{className:S.a.element,children:Object(p.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{type:"circle"}))},e.name)}))})]})]})})},F=function(e){var t=e.match,a=Object(n.useState)(null),r=Object(l.a)(a,2),s=r[0],i=r[1],c=t.params.userId;return Object(n.useEffect)((function(){f.getUserById(c).then(i)}),[s,c]),s?Object(p.jsx)(p.Fragment,{children:s?Object(p.jsx)(C,{user:s}):Object(p.jsx)("h2",{children:"User not found"})}):null},J=(a(39),function(e){var t=e.users,a=Object(d.h)().pathname,n=a.split("/").filter((function(e){return e})),r=function(e){return"favorite-users"===e?"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435":isNaN(e)?void 0:t.find((function(t){return t._id===e})).firstName};return"/"===a?null:Object(p.jsx)("nav",{"aria-label":"breadcrumb",children:Object(p.jsxs)("ol",{className:"breadcrumb ms-2 mt-2",children:[Object(p.jsxs)("li",{className:"breadcrumb-item",children:[Object(p.jsx)("i",{className:"bi bi-house-door me-1"}),Object(p.jsx)(o.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})]}),n.map((function(e,t){var a="/".concat(n.slice().join("/")),s=t===n.length-1;return Object(p.jsx)("li",{className:"breadcrumb-item word text-nowrap",children:s?Object(p.jsx)("p",{children:r(e)}):Object(p.jsx)(o.b,{to:a,children:r(e)})},t)}))]})})}),T=(a(40),function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){f.getAllUsers().then(r)}),[a]),localStorage.getItem("usersFavorite")||localStorage.setItem("usersFavorite",JSON.stringify([]));var s=function(e){r(a.filter((function(t){return t._id===e&&(t.favorite=!t.favorite),t}))),localStorage.setItem("usersFavorite",JSON.stringify([]));var t=[];return a.map((function(e){return!0===e.favorite&&(t=t===[]?[e]:[].concat(Object(c.a)(t),[e])),t})),t&&(t=t.filter((function(e){return!1!==e.favorite}))),localStorage.setItem("usersFavorite",JSON.stringify(t))};return a?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(O,{}),Object(p.jsx)(J,{users:a}),Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(p.jsx)(x,{users:a,handleToggleFavorite:s})}}),Object(p.jsx)(d.b,{path:"/favorite-users",exact:!0,render:function(){return Object(p.jsx)(k,{handleToggleFavorite:s})}}),Object(p.jsx)(d.b,{path:"/:userId",exact:!0,render:function(e){return Object(p.jsx)(F,Object(i.a)({users:a},e))}}),Object(p.jsx)(d.a,{to:"/"})]})]})}):null});a(41),a(42);s.a.render(Object(p.jsx)(T,{}),document.getElementById("root"))},6:function(e,t,a){e.exports={item:"user-page_item__2d5lW",itemFirst:"user-page_itemFirst__wQtJB",itemImg:"user-page_itemImg__41c_O",itemPic:"user-page_itemPic__1mbfn",itemSec:"user-page_itemSec__3yhw9",elements:"user-page_elements__1MBio",element:"user-page_element__23WYW",color:"user-page_color__1DIZ0",socialList:"user-page_socialList__gmWwq",socialItem:"user-page_socialItem__2NBCy"}},7:function(e,t,a){e.exports={base:"progress_base__qnri0",skillRow:"progress_skillRow__2USeP",skillShape:"progress_skillShape__11-iI",skillCircleAbove:"progress_skillCircleAbove__1oS7O",skillCircleUnder:"progress_skillCircleUnder__1IM8P",skillTitle:"progress_skillTitle__2Txu2"}}},[[43,1,2]]]);
//# sourceMappingURL=main.33fb5ca2.chunk.js.map