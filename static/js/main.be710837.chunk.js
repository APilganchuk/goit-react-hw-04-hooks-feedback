(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(4),i=n.n(o),s=(n(10),n(2)),a=n(0),l=function(e){var t=e.message;return Object(a.jsx)("b",{children:t})},d=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,o=e.positivePercentage;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Statistics"}),t||n||c?Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{style:{color:"green"},children:["good: ",t]}),Object(a.jsxs)("li",{style:{color:"orange"},children:["neutral: ",n]}),Object(a.jsxs)("li",{style:{color:"red"},children:["bad: ",c]}),Object(a.jsxs)("li",{children:["total: ",r]}),Object(a.jsxs)("li",{children:["positive feedback:",o," %"]})]}):Object(a.jsx)(l,{message:"No feedback given"})]})},j=n(5),b=n.n(j),u=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(a.jsx)("div",{className:b.a.container,children:t.map((function(e,t){return Object(a.jsx)("button",{onClick:n[e],children:e},t)}))})},h=function(e){var t=e.children,n=e.title;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:n}),t]})};h.defaultProps={children:[],title:""};var O=h,f=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(0),i=Object(s.a)(o,2),l=i[0],j=i[1],b=Object(c.useState)(0),h=Object(s.a)(b,2),f=h[0],x=h[1],g={good:function(){r((function(e){return e+1}))},neutral:function(){j((function(e){return e+1}))},bad:function(){x((function(e){return e+1}))}},v=function(){return n+l+f};return Object(a.jsxs)(O,{title:"Please leave feedback",children:[Object(a.jsx)(u,{options:["good","neutral","bad"],onLeaveFeedback:g}),Object(a.jsx)(d,{good:n,neutral:l,bad:f,total:v(),positivePercentage:(n/v()*100).toFixed()})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={container:"FeedbackOptions_container__3EcYs"}}},[[12,1,2]]]);
//# sourceMappingURL=main.be710837.chunk.js.map