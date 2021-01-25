(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{33:function(n,t,e){},48:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e(0),o=e(6),i=e.n(o),c=(e(33),e(19)),s=e(9),l=e(10),u=e(14),m=e(13),d=e(2),p=e(3);function h(){var n=Object(d.a)(["\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 12px;\n  padding-right: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .h1Title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 46px;\n    color: honeydew;\n  }\n\n  .h2Title {\n    margin-bottom: 30px;\n    font-size: 32px;\n    color: honeydew;\n  }\n\n  .text {\n    font-size: 18px;\n    font-style: italic;\n    color: salmon;\n  }\n\n  .h1-appear {\n    transform: translateX(-300%);\n  }\n\n  .h1-appear-active {\n    transform: translateX(0);\n    transition: transform 500ms linear;\n  }\n\n  .filterScale-enter {\n    opacity: 0;\n    transform: scale(0.1);\n  }\n\n  .filterScale-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 250ms linear;\n  }\n\n  .filterScale-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  .filterScale-exit-active {\n    opacity: 0;\n    transform: scale(0.1);\n    transition: all 250ms linear;\n  }\n\n  .ntf-enter {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n\n  .ntf-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: all 250ms linear;\n  }\n\n  .ntf-exit {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .ntf-exit-active {\n    opacity: 0;\n    transform: translateX(100%);\n    transition: all 250ms linear;\n  }\n"]);return h=function(){return n},n}var f=p.a.div(h()),b=e(24),x=e.n(b),j=e(25);function g(){var n=Object(d.a)(["\n  padding: 10px;\n  margin-bottom: 50px;\n  border: 1px dotted orange;\n\n  .label {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    color: honeydew;\n    font-size: 22px;\n    font-weight: 700;\n  }\n\n  .input {\n    margin-top: 20px;\n    padding: 10px;\n    width: 250px;\n    height: 35px;\n    color: black;\n    font-size: 16px;\n    font-style: italic;\n  }\n\n  .submitBtn {\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 10px;\n    min-width: 80px;\n    height: 25px;\n    outline: none;\n    border-radius: 4px;\n    border-bottom: solid 1px #d6d6d6;\n    background-color: honeydew;\n    color: black;\n    font-weight: 700;\n    font-size: 14px;\n\n    &:hover {\n      cursor: pointer;\n    }\n    &:active {\n      background-color: springgreen;\n    }\n  }\n"]);return g=function(){return n},n}var y=p.a.form(g()),v=function(n){Object(u.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.handleSubmit=function(t){t.preventDefault(),n.props.onSubmit(n.state),n.setState({name:"",number:""})},n.handleChange=function(t){var e=t.currentTarget,a=e.name,r=e.value;n.setState(Object(j.a)({},a,r))},n}return Object(l.a)(e,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return Object(a.jsxs)(y,{id:"contact",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:"label",children:["Name",Object(a.jsx)("input",{className:"input",type:"text",name:"name",value:t,onChange:this.handleChange,placeholder:"Type to name"})]}),Object(a.jsxs)("label",{className:"label",children:["Phone number",Object(a.jsx)("input",{className:"input",type:"text",name:"number",value:e,onChange:this.handleChange,placeholder:"Type to phone(e.g. 111-11-11)"})]}),Object(a.jsx)("button",{type:"submit",className:"submitBtn",children:"Add contact"})]})}}]),e}(r.Component);function O(){var n=Object(d.a)(["\n  .contactList__item {\n    width: 400px;\n    display: flex;\n    justify-content: space-around;\n    align-items: baseline;\n    color: springgreen;\n    font-size: 19px;\n    font-weight: 500;\n\n    &:not(:last-child) {\n      margin-bottom: 20px;\n    }\n  }\n\n  .delBtn {\n    display: flex;\n    align-items: center;\n    outline: none;\n    border-radius: 4px;\n    border-bottom: solid 1px #d6d6d6;\n    min-width: 20px;\n    height: 25px;\n    padding: 10px;\n    background-color: honeydew;\n    color: black;\n    font-weight: 500;\n    font-size: 12px;\n\n    &:hover {\n      cursor: pointer;\n    }\n    &:active {\n      background-color: salmon;\n    }\n  }\n\n  .itemFade-enter {\n    opacity: 0;\n    transform: translateX(200%);\n  }\n\n  .itemFade-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: all 250ms linear;\n  }\n\n  .itemFade-exit {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .itemFade-exit-active {\n    opacity: 0;\n    transform: translateX(200%);\n    transition: all 250ms linear;\n  }\n"]);return O=function(){return n},n}var w=p.a.div(O()),N=e(50),C=e(49),S=function(n){var t=n.contacts,e=n.onDeleteContact;return Object(a.jsx)(w,{children:Object(a.jsx)(N.a,{component:"ul",children:t.map((function(n){var t=n.id,r=n.name,o=n.number;return Object(a.jsx)(C.a,{timeout:250,classNames:"itemFade",children:Object(a.jsxs)("li",{className:"contactList__item",children:[Object(a.jsxs)("p",{children:[r,": ",o]}),Object(a.jsx)("button",{className:"delBtn",type:"button",onClick:function(){return e(t)},children:"Delete"})]})},t)}))})})};function k(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  color: honeydew;\n  font-size: 22px;\n  font-weight: 700;\n\n  .input {\n    margin-top: 20px;\n    padding: 10px;\n    width: 250px;\n    height: 35px;\n    color: black;\n    font-size: 16px;\n    font-style: italic;\n  }\n"]);return k=function(){return n},n}var E=p.a.label(k()),z=function(n){var t=n.value,e=n.onChange;return Object(a.jsxs)(E,{children:["Find contacts by name",Object(a.jsx)("input",{className:"input",type:"text",value:t,onChange:e})]})};function B(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  right: 3%;\n  bottom: 80%;\n  text-align: center;\n  padding: 10px;\n  min-width: 100px;\n  height: 70px;\n  background-color: orange;\n  color: black;\n"]);return B=function(){return n},n}var X=p.a.div(B()),F=function(){return Object(a.jsx)(X,{children:Object(a.jsx)("p",{children:"Enter the contact's name and(or) phone number!"})})},T=function(){return Object(a.jsx)(X,{children:Object(a.jsx)("p",{children:"Is already in use!"})})},D=function(n){Object(u.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:"",showEmptyNtf:!1,showByUsedNtf:!1},n.addContact=function(t){var e=t.name,a=t.number,r=n.state.contacts,o={id:x.a.generate(),name:e,number:a};r.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))||r.find((function(n){return n.number===a}))?n.setState((function(n){return{showByUsedNtf:!n.showByUsedNtf}})):""===e.trim()||""===a.trim()?n.setState((function(n){return{showEmptyNtf:!n.showEmptyNtf}})):n.setState((function(n){var t=n.contacts;return{contacts:[o].concat(Object(c.a)(t))}}))},n.delContact=function(t){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==t}))}}))},n.getContacts=function(){var t=n.state,e=t.contacts,a=t.filter;return e.filter((function(n){return n.name.toLowerCase().includes(a.toLowerCase())}))},n.changeFilter=function(t){n.setState({filter:t.currentTarget.value})},n}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts"),t=JSON.parse(n);t&&t.length&&this.setState({contacts:Object(c.a)(t)})}},{key:"componentDidUpdate",value:function(n,t){var e=t.contacts,a=this.state.contacts;e!==a&&localStorage.setItem("contacts",JSON.stringify(a))}},{key:"render",value:function(){var n=this,t=this.state,e=t.contacts,r=t.filter,o=t.showEmptyNtf,i=t.showByUsedNtf,c=this.getContacts();return Object(a.jsxs)(f,{children:[Object(a.jsx)(C.a,{in:!0,appear:!0,timeout:500,classNames:"h1",unmountOnExit:!0,children:Object(a.jsx)("h1",{className:"h1Title",children:"Phonebook"})}),Object(a.jsx)(v,{onSubmit:this.addContact}),Object(a.jsx)("h2",{className:"h2Title",children:"Contacts"}),Object(a.jsx)(C.a,{in:e.length>1,classNames:"filterScale",timeout:250,unmountOnExit:!0,children:Object(a.jsx)(z,{value:r,onChange:this.changeFilter})}),Object(a.jsx)(S,{contacts:c,onDeleteContact:this.delContact}),!e.length&&Object(a.jsx)("p",{className:"text",children:"Your phonebook is empty. Please add contact."}),Object(a.jsx)(C.a,{in:o,onEntered:function(){return n.setState({showEmptyNtf:!1})},timeout:2e3,classNames:"ntf",unmountOnExit:!0,children:Object(a.jsx)(F,{})}),Object(a.jsx)(C.a,{in:i,onEntered:function(){return n.setState({showByUsedNtf:!1})},timeout:2e3,classNames:"ntf",unmountOnExit:!0,children:Object(a.jsx)(T,{})})]})}}]),e}(r.Component);i.a.render(Object(a.jsx)(D,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a71f8adb.chunk.js.map